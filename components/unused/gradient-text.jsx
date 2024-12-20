// 'use client'
// import * as React from 'react'
// import {GradientHeading} from './ui/gradient-heading'

// export default function GradientText() {
//   const variants = ['default', 'pink', 'light']
//   const sizes = ['lg', 'xl', 'xxl', 'xxxl']
//   const weights = ['thin', 'base', 'semi', 'bold', 'black']

//   return (
//     <div className='space-y-8 p-4'>
//       {variants.map((variant) => (
//         <div key={variant}>
//           <h2 className='mb-4 text-xl font-semibold'>Variant: {variant}</h2>
//           {sizes.map((size) => (
//             <div key={size} className='mb-2'>
//               {weights.map((weight) => (
//                 <GradientHeading
//                   key={`${variant}-${size}-${weight}`}
//                   variant={variant}
//                   size={size}
//                   weight={weight}
//                   className='mb-2'
//                 >
//                   {`Heading - ${size}`}
//                 </GradientHeading>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   )
// }
