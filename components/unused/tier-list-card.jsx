'use client'
import {Card} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {ScrollArea} from '@/components/ui/scroll-area'
import {Crown, Skull, Ghost, Moon, Star, Flame} from 'lucide-react'
import {motion} from 'motion/react'

const tierIcons = {
  'TRICK OR TREATER 2024': Ghost,
  'ACOLYTE OF THE SPECTER': Skull,
  'WARDEN OF THE WICKED': Moon,
  'KEEPER OF SOULS': Star,
  'THE HAUNTED MONARCH': Crown,
  'THE ETERNAL NIGHTMARE': Flame,
}

const tierData = [
  {
    tier: 'TRICK OR TREATER 2024',
    users: [
      'adinsxytoje',
      'alistair_covax',
      'alpha_pt_',
      'biscotti',
      'chillestialhs',
      'devtron25',
      'IteukkaI',
      'orbitalsky210',
      'owlicioushs',
      'proffaridoon',
      'sinkdb_',
      'tatsumasa',
      'twiztid_c',
    ],
  },
  {
    tier: 'ACOLYTE OF THE SPECTER',
    users: ['darthkek69'],
  },
  {
    tier: 'WARDEN OF THE WICKED',
    users: ['aelund_', 'ggsutton', 'phyrelight', 'sinkdb_', 'yahli27tv', 'yaltus'],
  },
  {
    tier: 'KEEPER OF SOULS',
    buy: 75,
    users: ['alistair_covax', 'darkmek131', 'momoretta', 'nexusshade', 'owlicioushs', 'tatsumasa'],
  },
  {
    tier: 'THE HAUNTED MONARCH',
    users: ['owlicioushs', 'proffaridoon'],
  },
  {
    tier: 'THE ETERNAL NIGHTMARE',
    users: [
      'biscotti',
      'chillestialhs',
      'comiclzz',
      'ericshinss',
      'jawbonetheclown',
      'momoretta',
      'twiztid_c',
      'worldofhaganation',
    ],
  },
]

export default function TierListCard() {
  return (
    <section className='border pb-12'>
      <div className='container mx-auto my-24 max-w-4xl border px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl'>
        <div className='mx-auto flex flex-col items-center justify-center space-y-8 border p-1'>
          {tierData.map((tier, index) => {
            const Icon = tierIcons[tier.tier]
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}
              >
                <Card className='overflow-hidden bg-white/90 backdrop-blur-lg transition-all hover:shadow-lg dark:bg-black/90'>
                  <div className='border-b border-purple-100 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 dark:border-purple-900'>
                    <div className='flex items-center gap-2 sm:gap-3'>
                      <Icon className='size-5 text-purple-600 sm:size-6 dark:text-purple-400' />
                      <h2 className='font-bold tracking-tight text-purple-900 sm:text-lg dark:text-purple-100'>
                        {tier.tier}
                      </h2>
                      <Badge
                        variant='secondary'
                        className='ml-auto bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100'
                      ></Badge>
                    </div>
                  </div>
                  <ScrollArea className='h-full p-6'>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'>
                      {tier.users.map((user, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-2 text-sm text-purple-900 transition-colors hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-100 dark:hover:bg-purple-800/50'
                        >
                          <div className='size-2 rounded-full bg-purple-500' />
                          {user}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
