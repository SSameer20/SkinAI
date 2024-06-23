import React from 'react'
import "../styles/footer.css"
import logo from "../media/AI_Skin_Logo.png"

export default function 
() {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
    <div className="contributions">
        <p>You can report issues or <a href='https://github.com/SSameer20/SkinAI' target='_blank'>contribute</a></p>
    </div>
      
        <div className="copyright">
          <p>© {year} SkinAI | AI Powered Skin Care</p>
        </div>
    

  </footer>
  )
}
