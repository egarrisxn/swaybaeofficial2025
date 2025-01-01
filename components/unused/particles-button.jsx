import {Button} from '@/components/ui/button'
import {Particles} from '@/components/ui/particles'

export function ParticlesButton() {
  return (
    <div className='relative justify-center'>
      <Particles
        options={{
          particle: 'https://swaybae.net/avatar.png',
        }}
      >
        <Button>Particles!!</Button>
      </Particles>
    </div>
  )
}
