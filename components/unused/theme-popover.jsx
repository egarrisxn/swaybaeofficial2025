// 'use client'
// import {useEffect, useState} from 'react'
// import {Monitor, Moon, Sun} from 'lucide-react'
// import {PopoverForm} from '@/components/ui/popover-form'

// export default function ThemePopover() {
//   const [theme, setTheme] = useState('')
//   const [open, setOpen] = useState(true)
//   const themes = ['light', 'dark', 'system']

//   useEffect(() => {
//     const root = window.document.documentElement
//     root.classList.remove('light', 'dark')
//     if (theme === 'system') {
//       const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? 'dark'
//         : 'light'
//       root.classList.add(systemTheme)
//     } else {
//       if (theme) root.classList.add(theme)
//     }
//   }, [theme])

//   return (
//     <div className='flex'>
//       <PopoverForm
//         showSuccess={false}
//         title='Choose theme'
//         open={open}
//         setOpen={setOpen}
//         width='150px'
//         height='150px'
//         showCloseButton={true}
//         openChild={
//           <div className='p-1.5'>
//             <h3 className='px-2 text-sm tracking-tight'>Theme</h3>
//             <div className='space-y-1 pt-1.5'>
//               {themes.map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setTheme(t)}
//                   className={`flex w-full items-center rounded-md px-2 py-1.5 text-sm ${
//                     theme === t ? 'bg-foreground/10' : ''
//                   }`}
//                 >
//                   {t === 'light' && <Sun className='mr-1 size-3' />}
//                   {t === 'dark' && <Moon className='mr-1 size-3' />}
//                   {t === 'system' && <Monitor className='mr-1 size-3' />}
//                   <span className='capitalize'>{t}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         }
//       />
//     </div>
//   )
// }
