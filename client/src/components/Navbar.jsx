import React from 'react'
import "../styles/navigation.css"
import {Link} from "react-router-dom"
import profile from  "../media/profile.png"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/test">TEST</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <img src={profile} alt="user" style={{maxHeight : "7vh"}} />
      </ul>
      
    </nav>
  )
}
