import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'PLAY11 | Daily Football Games',description:'Four new football guessing games every day. Guess players, clubs, career paths and test your football knowledge.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
