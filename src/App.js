import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Map from './views/map';
import Program from "./views/program";
import Favorites from "./views/favorites";
import Home from './views/home';
import TravelDetail from './views/traveldetail';
import Login from './views/login';
import SignUp from './views/signup'; 
import Chat from './views/chat'; // chat.jsx 파일 import

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />

          {/* 인증 필요 없는 페이지 */}
          <Route 
            path="/" 
            element={
              <div>
                <Home />
                <Footer />
              </div>
            } 
          />

          {/* 인증이 필요한 페이지 */}
          <Route
            path="/map"
            element={
              isAuthenticated ? (
                <div>
                  <Map />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/program"
            element={
              isAuthenticated ? (
                <div>
                  <Program />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/favorites"
            element={
              isAuthenticated ? (
                <div>
                  <Favorites />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/detail/:id"
            element={
              isAuthenticated ? (
                <TravelDetail />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/chat"
            element={
              isAuthenticated ? (
                <div>
                  <Chat />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
