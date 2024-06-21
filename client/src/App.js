import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    </div>
    </BrowserRouter>
  );
}

export default App;
