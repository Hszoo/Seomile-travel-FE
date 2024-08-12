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
import axios from 'axios';  // Axios는 HTTP 요청을 위한 라이브러리입니다.

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [travelPlaces, setTravelPlaces] = useState([]);  // 여행지 상태 추가

  useEffect(() => {
    // API 호출 함수
    const fetchTravelPlaces = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/travel/list?categories=1&categories=3');
        setTravelPlaces(response.data);  // 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching travel places:', error);
      }
    };

    fetchTravelPlaces();
  }, []);  // 빈 배열을 넣어 컴포넌트가 마운트될 때만 호출되도록 함

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ 
              <div>
                  <Home travelPlaces={travelPlaces} />
                  <Footer />
              </div>} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} /> {/* 회원가입 페이지 라우트 추가 */}
          {/* <Route
            path="/"
            element={
              isAuthenticated ? (
                <div>
                  <Home travelPlaces={travelPlaces} />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/" replace />
              )
            }
          /> */}
          <Route
            path="/map"
            element={
              isAuthenticated ? (
                <div>
                  <Map />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/" replace />
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
                <Navigate to="/" replace />
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
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/detail/:id"
            element={
              isAuthenticated ? (
                <TravelDetail travelPlaces={travelPlaces} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;