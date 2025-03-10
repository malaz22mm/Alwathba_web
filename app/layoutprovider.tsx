'use client'
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import Footer from '../component/footer';
import Header from '../component/header';
// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from 'component/themeSwitcher';
const url : string [] = ["/login" , "/resetpass" , "/setnewpass" , "/signup" , "/verification" , "/checkemail"]
const LayoutProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    let vaild = true;
    const pathname = usePathname();
    for (let i = 0; i < url.length; i++) {
      
      if (pathname.includes(url[i] as string)) {
        vaild = false;
      }
  }
    return (
        <>
            {vaild && <Header/> }
            {children}
            
            {vaild  && <Footer/> }
        </>
    )
};
export default LayoutProvider