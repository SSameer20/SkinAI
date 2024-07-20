import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  
      <div className="App">
         <Navbar />
        <div className="content">
          <Outlet />
        </div>
         <Footer /> 
      </div>
    
  );
}

export default App;
