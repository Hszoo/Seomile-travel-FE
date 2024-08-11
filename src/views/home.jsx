import React from 'react';
import MainContent from '../components/MainContent';

const Home = ({ travelPlaces }) => {
  return (
    <div>
      <MainContent travelPlaces={travelPlaces} />
    </div>
  );
};

export default Home;