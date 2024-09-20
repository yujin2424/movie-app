import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Movies from './routes/Movies';
import Navbar from './components/Navbar';
import './App.scss';

function App() {

  
      return (
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about:id" element={<About />}/>
            <Route path="/movies" element={<Movies />}/>
          </Routes>
      </div>
  );
}
export default App;
