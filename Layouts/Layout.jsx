import TopNav from '@/components/nav/TopNav'
import { Divider, Spacer } from '@nextui-org/react'
// import localFont from 'next/font/local';

// const inter = Inter({ subsets: ['latin'] });
// const itrmFont = localFont({ src: '../font/NanumGothic.woff2'})

// const itrmFont = localFont({
//   src: [
//     {
//       path: '../font/NanumGothic.woff2'
//     }
//   ],
//   display: 'swap'
// });

export default function Layout({ children }) {
  
  return (
    // <div className={itrmFont.className}>
    <div>
      <TopNav />
      <Spacer y={4} />
      <div>{children}</div>
    </div>
  )
}
