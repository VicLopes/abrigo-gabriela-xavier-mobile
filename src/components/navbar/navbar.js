import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { BurgerIcon, SearchIcon } from '../../assets'

export default function Navbar() {
  const [isExpanded, setExpanded] = useState(false)
  // const [isSearchOpen, setSearchOpen] = useState(false)

  return(
    <nav className="navbar-wrapper">
      <div className="buttons">
        {/* <SearchIcon onClick={() => setSearchOpen(true)} /> */}
        <BurgerIcon onClick={() => setExpanded(!isExpanded)}/>
      </div>
      {isExpanded && (<div className="navbar-wrapper__expanded">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/showcase">Vitrine</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>)}
    </nav>
  )
}