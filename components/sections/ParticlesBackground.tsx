'use client'

import Particles from '@tsparticles/react'
import type { ISourceOptions } from '@tsparticles/engine'

export function ParticlesBackground() {
  const options: ISourceOptions = {
    fullScreen: {
      enable: false,
    },

    fpsLimit: 120,

    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
        },
      },

      color: {
        value: '#06b6d4',
      },

      links: {
        enable: true,
        distance: 150,
        color: '#06b6d4',
        opacity: 0.15,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1,
      },

      opacity: {
        value: 0.5,
      },

      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },

      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.4,
          },
        },
      },
    },

    detectRetina: true,
  }

  return (
    <Particles
      id="particles"
      className="absolute inset-0"
      options={options}
    />
  )
}