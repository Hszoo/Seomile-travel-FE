import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Map from './views/map';
import Program from "./views/program";
import Favorites from "./views/favorites";
import Home from './views/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/program" element={<Program />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;