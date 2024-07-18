import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
  
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
        
      </div>
    
  );
}

export default App;
