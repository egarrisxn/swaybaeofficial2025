import {SubathonHeader} from '@/components/(subathon)/header'
import {SubathonDetails} from '@/components/(subathon)/details'
import {PointsProgress} from '@/components/(subathon)/points-progress'
import {PointSystem} from '@/components/(subathon)/point-system'
import {GoalsList} from '@/components/(subathon)/goals-list'
import {Incentives} from '@/components/(subathon)/incentives'

export const metadata = {
  title: 'Subathon Page',
}

export default function SubathonPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12 dark:from-purple-950 dark:to-pink-950'>
      <div className='container mx-auto my-24 max-w-7xl space-y-12 px-4 py-8'>
        <SubathonHeader />
        <PointsProgress currentPoints={0} nextGoalPoints={10000} />
        <SubathonDetails />
        <PointSystem />
        <GoalsList />
        <Incentives />
      </div>
    </div>
  )
}

// export const metadata = {
//   title: 'Subathon Page',
// }

// export default function SubathonPage() {
//   return (
//     <div className='min-h-screen w-full py-12'>
//       <div className='container prose mx-auto my-24 max-w-7xl px-4 dark:prose-invert xl:px-0'>
//         <h1>Subathon</h1>
//         <h5>End-Of-Year Stream Party</h5>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
//           dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//           dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//           officia deserunt mollit anim ,{' '}
//           <a href='#' target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
//             <em>Random Link Example</em>
//           </a>{' '}
//           id est laborum.
//         </p>
//       </div>
//     </div>
//   )
// }
