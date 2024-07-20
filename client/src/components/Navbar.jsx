import React, { useState } from 'react'
import "../styles/navigation.css"
import { Link } from "react-router-dom"
import profile from "../media/profile.png"

export default function Navbar() {
  const [log, setLog] = useState(false)
  const [user, setUser] = useState(false)
  const handleProfile = () => {
    setLog(!log)
    
  }

  const handleUser = () =>{
    setUser(!user)
    setLog(!log)
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/test">TEST</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <div className={log ? "click" : "notClick"}>
          <img src={profile} alt="user" style={{ maxHeight: "7vh", cursor: "pointer" }} onClick={handleProfile} />
          <div className="user_log" style={log ? {display : "flex"} : {display : "none"}}>
            <button>Profile</button>
            <button onClick={handleUser}>{user ? "Logout" : "Logout"}</button>
            {log ? (<span onClick={() => setLog(!log)}>X</span>) : (<span></span>)}
            
          </div>
        </div>
      </ul>


    </nav>
  )
}
