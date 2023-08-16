import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine, Container } from 'tsparticles-engine'
import { useCallback } from 'react';

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles engine...", engine);
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded!", container);
  }, [])

  return (
    <Particles
      className='w-full h-full fixed xl:absolute translate-z-0 left-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: ''
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 90
            }, repulse: {
              distance: 120,
              duration: 1
            }
          }
        },
        particles: {
          color: {
            value: '#e68e2e'
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 0.2, max: 2 }
          }
        },
        detectRetina: true
      }}
    />
  )
};

export default ParticlesContainer;
