import React from 'react'
import { Navbar, Footer } from '../components'
import { Outlet } from 'react-router-dom'

export default function Layout({children}) {
  return(
    <div className="app-wrapper">
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}