import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from './components/Search';



function App() {
  return (
    //BEM
    <div className="App">
            <Router>
            <Routes>
            <Route path="/" element={<Home />} />
  
              
              <Route path='/search' element={<Search />} />

            
            </Routes>
            </Router>
    </div>
  );
}

export default App;
