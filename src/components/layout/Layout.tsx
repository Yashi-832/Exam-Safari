<<<<<<< HEAD
//import React from 'react'
import Footer from '../footer/Footer'
import { ReactNode } from 'react';
//import Navbar from '../navbar/Navbar'
interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div>
=======
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
>>>>>>> 909f7c8 (first day task)
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout