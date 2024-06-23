import "../styles/navigation.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Logo from "../media/AI_Skin_Logo.png"
import Profile from "../media/profile.png"

export default function Navbar() {
  const [log, setLog] = useState(false)

  const profileButton = () => {
    setLog(!log)
  }
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
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <div className="image">
              <img src={Profile} alt="" srcset="" className="navigation-profile" onClick={profileButton}/>
              <button className="profile-logout-button" onClick={profileButton} style={log===true ? {display : "block"} : {display : "none"}}>Logout</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
