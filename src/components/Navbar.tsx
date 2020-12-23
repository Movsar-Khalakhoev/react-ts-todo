import React from 'react'
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3 px1">
        <a href="/" className="brand-logo">React + TypeScript</a>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Список дел</Link></li>
          <li><Link to="/about">Информация</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
