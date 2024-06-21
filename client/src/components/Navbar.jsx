import "../styles/navigation.css"
import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../media/AI_Skin_Logo.png"
import Profile from "../media/profile.png"

export default function Navbar() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="" srcset="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/"> Menu</Link>
            </li>
            <li>
              <Link to="/">Test</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>

            <img src={Profile} alt="" srcset="" className="navigation-profile" />
          </ul>
        </div>
      </div>
    </div>
  )
}
