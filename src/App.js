import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Spinner from './components/Spinner';

function App() {
  const [isShown, setIsShown] = useState(false);
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
    
  const handleClick = async event => {
        // toggle shown state
        await delay(5000);
        setIsShown(false);
      }

 
  return (
    <div className='App'>
      <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/Users" element = {<Users onClick={handleClick}/>}/>
    </Routes>
    {!isShown ? <Spinner/> : <Users/> }
    </Router>
    </div>
  );
}

export default App;
