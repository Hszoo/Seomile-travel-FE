import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Map from './views/map';
import Program from "./views/program";
import Favorites from "./views/favorites";
import Home from './views/home';
import TravelDetail from './views/traveldetail';

const travelPlaces = [
  {
    id: '1',
    image: '/images/찌르꼬.jpg',
    title: '라바 타운',
    location: '종로구',
    rating: '4.7',
    wheelchair: true,
    baby: true,
    address: '서울특별시 동대문구 서울시립대로 163(전농동)',
    contact: '서울시립대학교 박물관(02-6490-6486)',
    closedDays: '토요일, 일요일, 공휴일',
    hours: '월~금 10:00~12:00, 13:00 ~ 17:00',
    fee: '무료',
  },
  {
    id: '2',
    image: '/images/팽도리.jpg',
    title: '문화철도 959',
    location: '구로구',
    rating: '4.8',
    wheelchair: false,
    baby: true,
    address: '서울특별시 구로구 서울시립대로 159',
    contact: '구로구청 문화관광과(02-860-2000)',
    closedDays: '월요일',
    hours: '화~일 09:00~18:00',
    fee: '유료',
  },
  // ... 다른 장소들
];

const App = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home travelPlaces={travelPlaces} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/program" element={<Program />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<TravelDetail travelPlaces={travelPlaces} />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;