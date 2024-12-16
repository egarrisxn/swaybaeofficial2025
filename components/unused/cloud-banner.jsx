// keyframes: {
//   cloud: {
//     from: { transform: 'translateX(0)' },
//     to: { transform: 'translateX(calc(-100% - 4rem))' },
//   },
// }
// animation: {
//   cloud: 'cloud 30s linear infinite',

// const logos = [
//   {
//     name: 'Vercel',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
//   },
//   {
//     name: 'Nextjs',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
//   },
//   {
//     name: 'Prime',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
//   },
//   {
//     name: 'Trustpilot',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
//   },
//   {
//     name: 'Webflow',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
//   },
//   {
//     name: 'Airbnb',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
//   },
//   {
//     name: 'Tina',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
//   },
//   {
//     name: 'Stackoverflow',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
//   },
//   {
//     name: 'mistral',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
//   },
// ]

// export default function CloudBanner() {
//   return (
//     <div className='container w-screen py-12'>
//       <div className='mx-auto w-full px-4 md:px-8'>
//         <div
//           className='group relative mt-6 flex gap-6 overflow-hidden p-2'
//           style={{
//             maskImage:
//               'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
//           }}
//         >
//           {Array(5)
//             .fill(null)
//             .map((_, index) => (
//               <div
//                 key={index}
//                 className='animate-logo-cloud flex shrink-0 flex-row justify-around gap-6'
//               >
//                 {logos.map((logo, key) => (
//                   <img
//                     key={key}
//                     src={logo.url}
//                     className='h-10 w-28 px-2 brightness-0 dark:invert'
//                     alt={`${logo.name}`}
//                   />
//                 ))}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   )
// }
