import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
