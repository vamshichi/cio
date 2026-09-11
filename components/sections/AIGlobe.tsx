'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'

/* ================================================================
   TYPES
================================================================ */

type Point3 = [number, number, number]

/* ================================================================
   CONFIG
================================================================ */

const GLOBE_RADIUS = 2.65
const PARTICLE_COUNT = 1500

const CYAN = '#67e8f9'
const ELECTRIC = '#22d3ee'
const BLUE = '#38bdf8'
const WHITE = '#ecfeff'

/* ================================================================
   LAT / LONG → SPHERE
================================================================ */

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

/* ================================================================
   FIBONACCI SPHERE
================================================================ */

function generateSpherePoints(
  count: number,
  radius: number
) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const phi = Math.PI * (3 - Math.sqrt(5))

  const cyanColor = new THREE.Color(CYAN)
  const blueColor = new THREE.Color(BLUE)
  const whiteColor = new THREE.Color(WHITE)

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const radiusAtY = Math.sqrt(
      Math.max(0, 1 - y * y)
    )

    const theta = phi * i

    const x =
      Math.cos(theta) *
      radiusAtY *
      radius

    const z =
      Math.sin(theta) *
      radiusAtY *
      radius

    positions[i * 3] = x
    positions[i * 3 + 1] = y * radius
    positions[i * 3 + 2] = z

    /*
     * Mostly cyan / blue.
     * A few particles become almost white.
     */

    const colorChoice = Math.random()

    const color =
      colorChoice > 0.93
        ? whiteColor
        : colorChoice > 0.55
        ? cyanColor
        : blueColor

    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  return {
    positions,
    colors,
  }
}

/* ================================================================
   NETWORK CONNECTIONS
================================================================ */

function generateConnections(
  points: Float32Array,
  count: number
) {
  const positions: number[] = []

  /*
   * Instead of checking every point against every other point,
   * connect points to a few nearby Fibonacci neighbours.
   *
   * This dramatically reduces CPU work.
   */

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

      if (distanceSquared < 0.16) {
        positions.push(
          ax,
          ay,
          az,
          bx,
          by,
          bz
        )
      }
    }
  }

  return new Float32Array(positions)
}

/* ================================================================
   INDIA PARTICLES
================================================================ */

function generateIndiaParticles() {
  const positions: number[] = []
  const colors: number[] = []

  const cyan = new THREE.Color('#22d3ee')
  const white = new THREE.Color('#ffffff')

  /*
   * Approximate India geographic region.
   *
   * This creates a glowing geographic zone rather than
   * loading a texture/map.
   */

  for (let i = 0; i < 280; i++) {
    const latitude =
      7 + Math.random() * 28

    const longitude =
      68 + Math.random() * 30

    const point = latLongToVector(
      latitude,
      longitude,
      GLOBE_RADIUS + 0.018
    )

    /*
     * Keep the region slightly irregular.
     */

    const edgeNoise =
      Math.sin(latitude * 0.8) *
      Math.cos(longitude * 0.35)

    point.multiplyScalar(
      1 + edgeNoise * 0.003
    )

    positions.push(
      point.x,
      point.y,
      point.z
    )

    const color =
      Math.random() > 0.78
        ? white
        : cyan

    colors.push(
      color.r,
      color.g,
      color.b
    )
  }

  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
  }
}

/* ================================================================
   CITY NODES
================================================================ */

const cities = [
  {
    name: 'Delhi',
    lat: 28.61,
    lon: 77.20,
    important: true,
  },
  {
    name: 'Mumbai',
    lat: 19.07,
    lon: 72.87,
    important: false,
  },
  {
    name: 'Bengaluru',
    lat: 12.97,
    lon: 77.59,
    important: true,
  },
  {
    name: 'Hyderabad',
    lat: 17.38,
    lon: 78.48,
    important: false,
  },
  {
    name: 'Chennai',
    lat: 13.08,
    lon: 80.27,
    important: false,
  },
  {
    name: 'Kolkata',
    lat: 22.57,
    lon: 88.36,
    important: false,
  },
  {
    name: 'Singapore',
    lat: 1.35,
    lon: 103.81,
    important: false,
  },
  {
    name: 'Dubai',
    lat: 25.20,
    lon: 55.27,
    important: false,
  },
  {
    name: 'London',
    lat: 51.50,
    lon: -0.12,
    important: false,
  },
  {
    name: 'New York',
    lat: 40.71,
    lon: -74.00,
    important: false,
  },
]

/* ================================================================
   DATA ROUTE
================================================================ */

function createRoute(
  start: Point3,
  end: Point3
) {
  const startVector =
    new THREE.Vector3(...start)

  const endVector =
    new THREE.Vector3(...end)

  const midpoint = startVector
    .clone()
    .add(endVector)
    .normalize()
    .multiplyScalar(GLOBE_RADIUS * 1.12)

  const curve =
    new THREE.QuadraticBezierCurve3(
      startVector,
      midpoint,
      endVector
    )

  return curve
}

/* ================================================================
   GLOBE CORE
================================================================ */

function GlobeCore() {
  const globe = useRef<THREE.Group>(null)

  const mouse = useRef({
    x: 0,
    y: 0,
  })

  /* ================================================================
     PARTICLES
  ================================================================ */

  const particleData = useMemo(
    () =>
      generateSpherePoints(
        PARTICLE_COUNT,
        GLOBE_RADIUS
      ),
    []
  )

  const connections = useMemo(
    () =>
      generateConnections(
        particleData.positions,
        PARTICLE_COUNT
      ),
    [particleData]
  )

  /* ================================================================
     INDIA
  ================================================================ */

  const indiaParticles = useMemo(
    () => generateIndiaParticles(),
    []
  )

  /* ================================================================
     CITY POSITIONS
  ================================================================ */

  const cityPositions = useMemo(() => {
    return cities.map((city) => {
      return latLongToVector(
        city.lat,
        city.lon,
        GLOBE_RADIUS + 0.055
      )
    })
  }, [])

  /* ================================================================
     ROUTES
  ================================================================ */

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

  /* ================================================================
     ANIMATION
  ================================================================ */

  useFrame((state) => {
    if (!globe.current) return

    const time =
      state.clock.elapsedTime

    const targetX =
      state.pointer.y * 0.16

    const targetY =
      state.pointer.x * 0.32

    mouse.current.x =
      THREE.MathUtils.lerp(
        mouse.current.x,
        targetX,
        0.035
      )

    mouse.current.y =
      THREE.MathUtils.lerp(
        mouse.current.y,
        targetY,
        0.035
      )

    /*
     * Slow cinematic rotation
     */

    globe.current.rotation.x =
      mouse.current.x +
      Math.sin(time * 0.18) * 0.025

    globe.current.rotation.y =
      time * 0.045 +
      mouse.current.y
  })

  return (
    <group ref={globe}>
      {/* ==========================================================
          INNER DARK CORE
      ========================================================== */}

      <mesh>
        <sphereGeometry
          args={[2.58, 64, 64]}
        />

        <meshBasicMaterial
          color="#02070A"
          transparent
          opacity={0.72}
        />
      </mesh>

      {/* ==========================================================
          INNER CYAN ATMOSPHERE
      ========================================================== */}

      <mesh>
        <sphereGeometry
          args={[2.62, 64, 64]}
        />

        <meshBasicMaterial
          color="#0b2830"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>

      {/* ==========================================================
          PARTICLE EARTH
      ========================================================== */}

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              particleData.positions,
              3,
            ]}
          />

          <bufferAttribute
            attach="attributes-color"
            args={[
              particleData.colors,
              3,
            ]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.023}
          sizeAttenuation
          transparent
          opacity={0.82}
          vertexColors
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </points>

      {/* ==========================================================
          NETWORK
      ========================================================== */}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.075}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </lineSegments>

      {/* ==========================================================
          LATITUDE / LONGITUDE
      ========================================================== */}

      <mesh>
        <sphereGeometry
          args={[2.66, 24, 18]}
        />

        <meshBasicMaterial
          color="#67e8f9"
          wireframe
          transparent
          opacity={0.045}
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>

      {/* ==========================================================
          INDIA PARTICLE FIELD
      ========================================================== */}

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              indiaParticles.positions,
              3,
            ]}
          />

          <bufferAttribute
            attach="attributes-color"
            args={[
              indiaParticles.colors,
              3,
            ]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.038}
          sizeAttenuation
          transparent
          opacity={1}
          vertexColors
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </points>

      {/* ==========================================================
          INDIA GLOW
      ========================================================== */}

      <mesh
        position={latLongToVector(
          21,
          79,
          GLOBE_RADIUS + 0.02
        )}
      >
        <sphereGeometry
          args={[0.24, 24, 24]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.1}
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>

      {/* ==========================================================
          CITY NODES
      ========================================================== */}

      {cityPositions.map(
        (position, index) => {
          const city = cities[index]

          return (
            <group
              key={city.name}
              position={position}
            >
              {/* Core */}
              <mesh>
                <sphereGeometry
                  args={[
                    city.important
                      ? 0.065
                      : 0.035,
                    12,
                    12,
                  ]}
                />

                <meshBasicMaterial
                  color={
                    city.important
                      ? WHITE
                      : ELECTRIC
                  }
                  blending={
                    THREE.AdditiveBlending
                  }
                />
              </mesh>

              {/* Glow */}
              <mesh>
                <sphereGeometry
                  args={[
                    city.important
                      ? 0.16
                      : 0.10,
                    12,
                    12,
                  ]}
                />

                <meshBasicMaterial
                  color={ELECTRIC}
                  transparent
                  opacity={
                    city.important
                      ? 0.1
                      : 0.055
                  }
                  blending={
                    THREE.AdditiveBlending
                  }
                />
              </mesh>
            </group>
          )
        }
      )}

      {/* ==========================================================
          DATA ROUTES
      ========================================================== */}

      {routes.map((route, index) => {
        const points =
          route.getPoints(80)

        const geometry =
          new THREE.BufferGeometry().setFromPoints(
            points
          )

        return (
          <line
            key={index}
          >
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial
              color={
                index % 3 === 0
                  ? '#ffffff'
                  : '#22d3ee'
              }
              transparent
              opacity={
                index % 3 === 0
                  ? 0.22
                  : 0.14
              }
              blending={
                THREE.AdditiveBlending
              }
            />
          </line>
        )
      })}

      {/* ==========================================================
          ORBIT 01
      ========================================================== */}

      <mesh
        rotation={[
          Math.PI / 2.35,
          0.2,
          0.25,
        ]}
      >
        <torusGeometry
          args={[
            3.04,
            0.007,
            8,
            220,
          ]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.5}
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>

      {/* ==========================================================
          ORBIT 02
      ========================================================== */}

      <mesh
        rotation={[
          0.5,
          Math.PI / 3,
          0.15,
        ]}
      >
        <torusGeometry
          args={[
            3.25,
            0.006,
            8,
            220,
          ]}
        />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.27}
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>

      {/* ==========================================================
          ORBIT 03
      ========================================================== */}

      <mesh
        rotation={[
          -0.4,
          -0.7,
          0.5,
        ]}
      >
        <torusGeometry
          args={[
            3.42,
            0.004,
            8,
            220,
          ]}
        />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.13}
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>
    </group>
  )
}

/* ================================================================
   FLOATING DATA POINTS
================================================================ */

function DataPoints() {
  const group =
    useRef<THREE.Group>(null)

  const data = useMemo(
    () => [
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

    const time =
      state.clock.elapsedTime

    group.current.children.forEach(
      (child, index) => {
        child.position.y =
          data[index][1] +
          Math.sin(
            time * 1.15 + index
          ) *
            0.075
      }
    )
  })

  return (
    <group ref={group}>
      {data.map((position, index) => (
        <group
          key={index}
          position={position}
        >
          {/* Core */}
          <mesh>
            <sphereGeometry
              args={[0.045, 12, 12]}
            />

            <meshBasicMaterial
              color="#ecfeff"
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>

          {/* Glow */}
          <mesh>
            <sphereGeometry
              args={[0.15, 12, 12]}
            />

            <meshBasicMaterial
              color="#22d3ee"
              transparent
              opacity={0.09}
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/* ================================================================
   SCENE
================================================================ */

function Scene() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 8]}
        fov={40}
      />

      <ambientLight intensity={0.15} />

      <GlobeCore />

      <DataPoints />
    </>
  )
}

/* ================================================================
   MAIN AI GLOBE
================================================================ */

export function AIGlobe() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
      "
    >
      {/* ==========================================================
          OUTER ATMOSPHERE
      ========================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[75%]
          w-[75%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[48%]
          w-[48%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/[0.06]
          blur-[80px]
        "
      />

      {/* ==========================================================
          CANVAS
      ========================================================== */}

      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            'high-performance',
        }}
        camera={{
          position: [0, 0, 8],
          fov: 40,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}