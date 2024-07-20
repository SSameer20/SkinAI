import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication';
import App from './App';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from "./components/Test"
import About from "./components/About"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
