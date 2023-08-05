// import fonts
import { Sora } from '@next/font/google'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

// import components
import Nav from './Nav/Nav'
import Header from './Nav/Header'
import TopLeftImg from './TopLeftImg'
import React from 'react'

// props

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={` page text-white ${sora.variable} bg-primary
  font-sora`
  }>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>
};

export default Layout;
