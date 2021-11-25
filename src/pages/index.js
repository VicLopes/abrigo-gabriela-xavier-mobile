import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Showcase from './showcase'
import FAQ from './faq'

export default function PagesRoutes() {
  return(
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="showcase" element={<Showcase />} />
    </Routes>
  )
}