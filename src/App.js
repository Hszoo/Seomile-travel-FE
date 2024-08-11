import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Map from './views/map';
import Program from "./views/program";
import Favorites from "./views/favorites";
import Home from './views/home';
import TravelDetail from './views/traveldetail';
import Login from './views/login';
import SignUp from './views/signup'; // 회원가입 페이지 추가

const travelPlaces = [
  // ... 여행지 데이터
];

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} /> {/* 회원가입 페이지 라우트 추가 */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div>
                  <Home travelPlaces={travelPlaces} />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
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
                <TravelDetail travelPlaces={travelPlaces} />
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