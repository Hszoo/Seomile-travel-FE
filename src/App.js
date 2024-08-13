import React, { useState, useEffect } from 'react'; // React에서 useState와 useEffect를 가져옵니다.
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
import Review from './views/review'; // 리뷰 컴포넌트 추가

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
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<TravelDetail />} />
          <Route path="/review/:id" element={<Review />} /> {/* 리뷰 페이지 경로 추가 */}
          <Route
            path="/map"
            element={isAuthenticated ? <Map /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/program"
            element={isAuthenticated ? <Program /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/favorites"
            element={isAuthenticated ? <Favorites /> : <Navigate to="/login" replace />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
