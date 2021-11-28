import React from 'react'
import { Navbar, Footer } from '../components'

export default function Layout({children}) {
  return(
    <div className="app-wrapper">
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}