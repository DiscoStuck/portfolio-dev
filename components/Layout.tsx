// import fonts
import { Sora, Black_Ops_One, Saira } from '@next/font/google'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})
const blackOpsOne = Black_Ops_One({
  subsets: ['latin'],
  variable: '--font-black_ops_one',
  weight: ['400']
})
const saira = Saira({
  subsets: ['latin'],
  variable: '--font-saira',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

import Nav from './Nav/Nav'
import Header from './Nav/Header'
import React from 'react'
import ScrollEvent from './Nav/ScrollEvent'

type LayoutProps = {
  children: React.ReactNode
}


const Layout = ({ children }: LayoutProps) => {
  return <div className={` page text-white ${blackOpsOne.variable} ${saira.variable} bg-bg
  font-sora`
  }>
    <Nav />
    <ScrollEvent />
    <Header />
    {children}
  </div>
};

export default Layout;
