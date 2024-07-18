import React from 'react'
import "../styles/home.css"

export default function Home() {
  return (
    <section>
      <article id='main-section'>
        <p id="home-title">SKIN X - AI Skin Assistant</p>
        <p id="sub-title">Welcome to AI Skin Health Assistant: Your Personal Dermatology Expert</p>
        <p id="description">At AI Skin Health Assistant, we are revolutionizing skincare with the power of artificial intelligence. Our cutting-edge platform provides you with personalized, expert-level skin health assessments and recommendations, all from the comfort of your home.</p>
        <p id="sub-title">How It Works:</p>
        <p id="description">

          <li>Upload Your Photo: Take a clear photo of your skin and upload it to our platform.</li>
          <li>AI Analysis: Our AI scans and analyzes your skin, identifying any issues and potential concerns.</li>
          <li>Receive Recommendations: Get a detailed report with personalized skincare tips and product recommendations.</li>
          <li>Track Your Progress: Monitor your skin's health over time with our regular check-ins and updates.</li>
          <li>Join the future of skincare with AI Skin Health Assistant. Discover the best version of your skin with our innovative, AI-driven solutions. Your journey to healthier, radiant skin starts here.</li>
        </p>
      </article>

      <article id='faq'>

        <div className="cards">
          <div className="card">
            <p id="card-title">Advanced AI Technology</p>
            <p id="card-desc">Our sophisticated AI algorithms analyze your skin condition with precision, identifying issues such as acne, dryness, pigmentation, and more. By leveraging a vast database of dermatological knowledge, our AI delivers accurate and reliable results.</p>

          </div>
        </div>

        <div className="cards">
          <div className="card">
            <p id="card-title">Personalized Insights</p>
            <p id="card-desc">Say goodbye to long waiting times and expensive dermatologist visits. With AI Skin Health Assistant, you can get a detailed skin health analysis anytime, anywhere. Simply upload a photo of your skin, and let our AI do the rest.</p>

          </div>
        </div>


        <div className="cards">
          <div className="card">
            <p id="card-title">Easy and Convenient</p>
            <p id="card-desc">Our sophisticated AI algorithms analyze your skin condition with precision, identifying issues such as acne, dryness, pigmentation, and more. By leveraging a vast database of dermatological knowledge, our AI delivers accurate and reliable results.</p>

          </div>
        </div>


        <div className="cards">
          <div className="card">
            <p id="card-title">Trusted and Secure</p>
            <p id="card-desc">Your privacy is our priority. We use advanced security measures to ensure your data is protected and confidential. Trust us to keep your personal information safe.</p>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <p id="card-title">Expert-Backed Solutions</p>
            <p id="card-desc">Our AI recommendations are backed by dermatologists and skincare experts, ensuring you receive the best advice for maintaining healthy, beautiful skin.</p>
          </div>
        </div>



      </article>

    </section>
  )
}
