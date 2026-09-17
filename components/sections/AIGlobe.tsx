'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'

type Point3 = [number, number, number]

const GLOBE_RADIUS = 2.72
const PARTICLE_COUNT = 1900

const CYAN = '#67e8f9'
const ELECTRIC = '#22d3ee'
const BLUE = '#38bdf8'
const WHITE = '#ecfeff'

function latLongToVector(
  latitude: number,
  longitude: number,
  radius: number
): THREE.Vector3 {
  const lat = THREE.MathUtils.degToRad(latitude)
  const lon = THREE.MathUtils.degToRad(longitude)

  return new THREE.Vector3(
    radius * Math.cos(lat) * Math.cos(lon),
    radius * Math.sin(lat),
    radius * Math.cos(lat) * Math.sin(lon)
  )
}

function generateSpherePoints(count: number, radius: number) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const phi = Math.PI * (3 - Math.sqrt(5))

  const cyanColor = new THREE.Color(CYAN)
  const blueColor = new THREE.Color(BLUE)
  const whiteColor = new THREE.Color(WHITE)

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = phi * i

    positions[i * 3] = Math.cos(theta) * radiusAtY * radius
    positions[i * 3 + 1] = y * radius
    positions[i * 3 + 2] = Math.sin(theta) * radiusAtY * radius

    const colorChoice = Math.random()

    const color =
      colorChoice > 0.95
        ? whiteColor
        : colorChoice > 0.52
          ? cyanColor
          : blueColor

    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  return { positions, colors }
}

function generateConnections(points: Float32Array, count: number) {
  const positions: number[] = []
  const neighbourOffsets = [1, 2, 3, 5, 8, 13]

  for (let i = 0; i < count; i++) {
    const ax = points[i * 3]
    const ay = points[i * 3 + 1]
    const az = points[i * 3 + 2]

    for (const offset of neighbourOffsets) {
      const j = i + offset
      if (j >= count) continue

      const bx = points[j * 3]
      const by = points[j * 3 + 1]
      const bz = points[j * 3 + 2]

      const distanceSquared =
        (ax - bx) ** 2 +
        (ay - by) ** 2 +
        (az - bz) ** 2

      if (distanceSquared < 0.15) {
        positions.push(ax, ay, az, bx, by, bz)
      }
    }
  }

  return new Float32Array(positions)
}

function generateIndiaParticles() {
  const positions: number[] = []
  const colors: number[] = []

  const cyan = new THREE.Color(ELECTRIC)
  const white = new THREE.Color('#ffffff')

  for (let i = 0; i < 360; i++) {
    const latitude = 7 + Math.random() * 28
    const longitude = 68 + Math.random() * 30

    const point = latLongToVector(
      latitude,
      longitude,
      GLOBE_RADIUS + 0.025
    )

    const edgeNoise =
      Math.sin(latitude * 0.8) * Math.cos(longitude * 0.35)

    point.multiplyScalar(1 + edgeNoise * 0.003)

    positions.push(point.x, point.y, point.z)

    const color = Math.random() > 0.76 ? white : cyan

    colors.push(color.r, color.g, color.b)
  }

  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
  }
}

const cities = [
  { name: 'Delhi', lat: 28.61, lon: 77.2, important: true },
  { name: 'Mumbai', lat: 19.07, lon: 72.87, important: false },
  { name: 'Bengaluru', lat: 12.97, lon: 77.59, important: true },
  { name: 'Hyderabad', lat: 17.38, lon: 78.48, important: false },
  { name: 'Chennai', lat: 13.08, lon: 80.27, important: false },
  { name: 'Kolkata', lat: 22.57, lon: 88.36, important: false },
  { name: 'Singapore', lat: 1.35, lon: 103.81, important: false },
  { name: 'Dubai', lat: 25.2, lon: 55.27, important: false },
  { name: 'London', lat: 51.5, lon: -0.12, important: false },
  { name: 'New York', lat: 40.71, lon: -74, important: false },
]

function createRoute(start: Point3, end: Point3) {
  const startVector = new THREE.Vector3(...start)
  const endVector = new THREE.Vector3(...end)

  const midpoint = startVector
    .clone()
    .add(endVector)
    .normalize()
    .multiplyScalar(GLOBE_RADIUS * 1.12)

  return new THREE.QuadraticBezierCurve3(
    startVector,
    midpoint,
    endVector
  )
}

function GlobeCore() {
  const globe = useRef<THREE.Group>(null)

  const mouse = useRef({ x: 0, y: 0 })

  const particleData = useMemo(
    () => generateSpherePoints(PARTICLE_COUNT, GLOBE_RADIUS),
    []
  )

  const connections = useMemo(
    () => generateConnections(particleData.positions, PARTICLE_COUNT),
    [particleData]
  )

  const indiaParticles = useMemo(() => generateIndiaParticles(), [])

  const cityPositions = useMemo(
    () =>
      cities.map((city) =>
        latLongToVector(city.lat, city.lon, GLOBE_RADIUS + 0.055)
      ),
    []
  )

  const routes = useMemo(() => {
    const routePairs = [
      [0, 1],
      [0, 2],
      [0, 6],
      [0, 7],
      [0, 8],
      [0, 9],
      [2, 4],
      [1, 3],
      [3, 4],
    ]

    return routePairs.map(([a, b]) =>
      createRoute(
        cityPositions[a].toArray() as Point3,
        cityPositions[b].toArray() as Point3
      )
    )
  }, [cityPositions])

  useFrame((state) => {
    if (!globe.current) return

    const time = state.clock.elapsedTime

    const targetX = state.pointer.y * 0.13
    const targetY = state.pointer.x * 0.24

    mouse.current.x = THREE.MathUtils.lerp(
      mouse.current.x,
      targetX,
      0.035
    )

    mouse.current.y = THREE.MathUtils.lerp(
      mouse.current.y,
      targetY,
      0.035
    )

    globe.current.rotation.x =
      mouse.current.x + Math.sin(time * 0.18) * 0.018

    globe.current.rotation.y =
      time * 0.038 + mouse.current.y
  })

  return (
    <group ref={globe}>
      {/* Dark glass core */}
      <mesh>
        <sphereGeometry args={[2.63, 64, 64]} />
        <meshBasicMaterial
          color="#010609"
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Atmospheric shell */}
      <mesh>
        <sphereGeometry args={[2.68, 64, 64]} />
        <meshBasicMaterial
          color="#0a3540"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Global particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particleData.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleData.colors, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.019}
          sizeAttenuation
          transparent
          opacity={0.72}
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Network */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color={BLUE}
          transparent
          opacity={0.065}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Latitude / longitude */}
      <mesh>
        <sphereGeometry args={[2.70, 24, 18]} />
        <meshBasicMaterial
          color={CYAN}
          wireframe
          transparent
          opacity={0.055}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* India particle field */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[indiaParticles.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[indiaParticles.colors, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.95}
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* India hotspot */}
      <mesh
        position={latLongToVector(21, 79, GLOBE_RADIUS + 0.03)}
      >
        <sphereGeometry args={[0.23, 24, 24]} />
        <meshBasicMaterial
          color={ELECTRIC}
          transparent
          opacity={0.11}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* City nodes */}
      {cityPositions.map((position, index) => {
        const city = cities[index]

        return (
          <group key={city.name} position={position}>
            <mesh>
              <sphereGeometry
                args={[city.important ? 0.07 : 0.035, 12, 12]}
              />
              <meshBasicMaterial
                color={city.important ? WHITE : ELECTRIC}
                blending={THREE.AdditiveBlending}
              />
            </mesh>

            <mesh>
              <sphereGeometry
                args={[city.important ? 0.17 : 0.095, 12, 12]}
              />
              <meshBasicMaterial
                color={ELECTRIC}
                transparent
                opacity={city.important ? 0.11 : 0.045}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          </group>
        )
      })}

      {/* Global routes */}
      {routes.map((route, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(
          route.getPoints(80)
        )

        return (
          <line key={index}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial
              color={index % 3 === 0 ? WHITE : ELECTRIC}
              transparent
              opacity={index % 3 === 0 ? 0.18 : 0.11}
              blending={THREE.AdditiveBlending}
            />
          </line>
        )
      })}

      {/* Primary orbital ring */}
      <mesh
        rotation={[
          Math.PI / 2.35,
          0.2,
          0.25,
        ]}
      >
        <torusGeometry args={[3.08, 0.007, 8, 240]} />
        <meshBasicMaterial
          color={ELECTRIC}
          transparent
          opacity={0.46}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Secondary orbital ring */}
      <mesh rotation={[0.5, Math.PI / 3, 0.15]}>
        <torusGeometry args={[3.27, 0.005, 8, 240]} />
        <meshBasicMaterial
          color={CYAN}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Very subtle third orbit */}
      <mesh rotation={[-0.4, -0.7, 0.5]}>
        <torusGeometry args={[3.43, 0.0035, 8, 240]} />
        <meshBasicMaterial
          color={WHITE}
          transparent
          opacity={0.09}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

function DataPoints() {
  const group = useRef<THREE.Group>(null)

  const data = useMemo(
    () =>
      [
        [-3.55, 1.25, 0],
        [3.35, 1.7, -0.5],
        [3.1, -1.5, 0.4],
        [-3.3, -1.7, -0.5],
        [0.1, 3.25, -0.5],
        [-0.8, -3.15, 0.2],
        [3.6, 0.15, -1],
        [-3.7, 0, 0],
      ] as Point3[],
    []
  )

  useFrame((state) => {
    if (!group.current) return

    const time = state.clock.elapsedTime

    group.current.children.forEach((child, index) => {
      child.position.y =
        data[index][1] +
        Math.sin(time * 1.05 + index) * 0.065
    })
  })

  return (
    <group ref={group}>
      {data.map((position, index) => (
        <group key={index} position={position}>
          <mesh>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial
              color={WHITE}
              blending={THREE.AdditiveBlending}
            />
          </mesh>

          <mesh>
            <sphereGeometry args={[0.14, 12, 12]} />
            <meshBasicMaterial
              color={ELECTRIC}
              transparent
              opacity={0.07}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 8]}
        fov={39}
      />

      <ambientLight intensity={0.1} />
      <GlobeCore />
      <DataPoints />
    </>
  )
}

export function AIGlobe() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.055] blur-[70px]" />

      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{
          position: [0, 0, 8],
          fov: 39,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
