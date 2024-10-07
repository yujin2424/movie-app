import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Movies from './routes/Movies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';
import Users from './routes/Users';

function App() {
   
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/movies" element={<Movies />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/users" element={<Users />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
