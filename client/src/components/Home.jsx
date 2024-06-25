import React from 'react'
import "../styles/home.css"
import Navbar from './Navbar'


export default function Home() {
  return (
   
    <section className='home'>
        <Navbar />
        <aside className='home-page-introduction'>
            <h1>SkinAi</h1>
            <span>AI Powered Skin Care Solution</span>
        </aside>
    </section>
  )
}
