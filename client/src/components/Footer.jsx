import React from 'react'
import "../styles/footer.css"
import logo from "../media/AI_Skin_Logo.png"

export default function 
() {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
    <div className="contributions" style={{display : "flex", flexDirection : "row",justifyContent : "center", alignContent : "center"}}>
        <p>You can <a href='https://github.com/SSameer20/SkinAI' target='_blank'> Contribute </a> to the project
          {/* <button id='btn' style={{ display : "flex", flexDirection : "row",justifyContent : "center", alignContent : "center"}}><p>contribute</p><img src='https://www.svgrepo.com/show/349595/external-link.svg'  alt='Link' style={{maxHeight : "20px"}}/></button></a> */}
          </p>
    </div>
      
        <div className="copyright">
          <p>© {year} SkinAI | AI Powered Skin Care</p>
        </div>
    

  </footer>
  )
}
