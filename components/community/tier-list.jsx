import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {Crown, Skull, Ghost, Moon, Star, Flame} from 'lucide-react'

export default function TierList() {
  return (
    <section className='pb-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid max-w-[65ch] grid-cols-1 leading-relaxed xl:max-w-[80ch]'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <div className='flex flex-row items-center gap-2 text-sm font-semibold tracking-wide text-purple-900 md:text-base lg:text-lg xl:gap-3 xl:text-xl 2xl:text-2xl dark:text-purple-100'>
                  <Ghost className='size-5 text-purple-600 md:size-6 xl:size-7 dark:text-purple-400' />
                  TRICK OR TREATER 2024
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className='list-inside list-disc pl-2 text-xs md:space-y-0.5 md:text-sm lg:text-base xl:space-y-1 xl:text-lg 2xl:text-xl'>
                  <li>adinsxytoje</li>
                  <li>alistair_covax</li>
                  <li>alpha_pt_</li>
                  <li>biscotti</li>
                  <li>chillestialhs</li>
                  <li>devtron25</li>
                  <li>IteukkaI</li>
                  <li>orbitalsky210</li>
                  <li>owlicioushs</li>
                  <li>proffaridoon</li>
                  <li>sinkdb_</li>
                  <li>tatsumasa</li>
                  <li>twiztid_c</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                <div className='flex flex-row items-center gap-2 text-sm font-semibold tracking-wide text-purple-900 md:text-base lg:text-lg xl:gap-3 xl:text-xl 2xl:text-2xl dark:text-purple-100'>
                  <Skull className='size-5 text-purple-600 md:size-6 xl:size-7 dark:text-purple-400' />
                  ACOLYTE OF THE SPECTER
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className='list-inside list-disc pl-2 text-xs md:space-y-0.5 md:text-sm lg:text-base xl:space-y-1 xl:text-lg 2xl:text-xl'>
                  <li>darthkek69</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
                <div className='flex flex-row items-center gap-2 text-sm font-semibold tracking-wide text-purple-900 md:text-base lg:text-lg xl:gap-3 xl:text-xl 2xl:text-2xl dark:text-purple-100'>
                  <Moon className='size-5 text-purple-600 md:size-6 xl:size-7 dark:text-purple-400' />
                  WARDEN OF THE WICKED
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className='list-inside list-disc pl-2 text-xs md:space-y-0.5 md:text-sm lg:text-base xl:space-y-1 xl:text-lg 2xl:text-xl'>
                  <li>aelund_</li>
                  <li>ggsutton</li>
                  <li>phyrelight</li>
                  <li>sinkdb_</li>
                  <li>yahli27tv</li>
                  <li>yaltus</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>
                <div className='flex flex-row items-center gap-2 text-sm font-semibold tracking-wide text-purple-900 md:text-base lg:text-lg xl:gap-3 xl:text-xl 2xl:text-2xl dark:text-purple-100'>
                  <Star className='size-5 text-purple-600 md:size-6 xl:size-7 dark:text-purple-400' />
                  KEEPERS OF SOULS
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className='list-inside list-disc pl-2 text-xs md:space-y-0.5 md:text-sm lg:text-base xl:space-y-1 xl:text-lg 2xl:text-xl'>
                  <li>alistair_covax</li>
                  <li>darkmek131</li>
                  <li>momoretta</li>
                  <li>nexusshade</li>
                  <li>owlicioushs</li>
                  <li>tatsumasa</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>
                <div className='flex flex-row items-center gap-2 text-sm font-semibold tracking-wide text-purple-900 md:text-base lg:text-lg xl:gap-3 xl:text-xl 2xl:text-2xl dark:text-purple-100'>
                  <Crown className='size-5 text-purple-600 md:size-6 xl:size-7 dark:text-purple-400' />
                  THE HAUNTED MONARCH
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className='list-inside list-disc pl-2 text-xs md:space-y-0.5 md:text-sm lg:text-base xl:space-y-1 xl:text-lg 2xl:text-xl'>
                  <li>owlicioushs</li>
                  <li>proffaridoon</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6'>
              <AccordionTrigger>
                <div className='flex flex-row items-center gap-2 text-sm font-semibold tracking-wide text-purple-900 transition-colors md:text-base lg:text-lg xl:gap-3 xl:text-xl 2xl:text-2xl dark:text-purple-100'>
                  <Flame className='size-5 text-purple-600 md:size-6 xl:size-7 dark:text-purple-400' />
                  THE ETERNAL NIGHTMARE
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className='list-inside list-disc pl-2 text-xs md:space-y-0.5 md:text-sm lg:text-base xl:space-y-1 xl:text-lg 2xl:text-xl'>
                  <li>biscotti</li>
                  <li>chillestialhs</li>
                  <li>comiclzz</li>
                  <li>ericshinss</li>
                  <li>jawbonetheclown</li>
                  <li>momoretta</li>
                  <li>twiztid_c</li>
                  <li>worldofhaganation</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
