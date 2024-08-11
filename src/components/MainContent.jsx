// MainContent.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';
import TravelCard from './TravelPlace';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  /* 태블릿 이상에서 카드 크기 조정 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); 
  }
`;

const MainContent = ({ travelPlaces = []}) => {
  const [activeFilter, setActiveFilter] = useState('전체');

  const filterPlaces = (filter) => {
    setActiveFilter(filter);
  };

  const filteredPlaces = travelPlaces.filter((place) => {
    if (activeFilter === '지체' && place.wheelchair) return true;
    if (activeFilter === '시각' && place.blind) return true;
    if (activeFilter === '청각' && place.deaf) return true;
    if (activeFilter === '영유아' && place.baby) return true;
    if (activeFilter === '노령자' && place.elder) return true;
    return false;
  });

  return (
    <Container>
      <Title>여행지 추천</Title>
      <FilterContainer>
        <FilterButton label="지체" active={activeFilter === '지체'} onClick={() => filterPlaces('지체')} />
        <FilterButton label="시각" active={activeFilter === '시각'} onClick={() => filterPlaces('시각')} />
        <FilterButton label="청각" active={activeFilter === '청각'} onClick={() => filterPlaces('청각')} />
        <FilterButton label="영유아" active={activeFilter === '영유아'} onClick={() => filterPlaces('영유아')} />
        <FilterButton label="노령자" active={activeFilter === '노령자'} onClick={() => filterPlaces('노령자')} />
      </FilterContainer>
      <CardGrid>
        {filteredPlaces.map((place, index) => (
          <TravelCard
            key={index}
            id={place.id}
            image={place.image}
            title={place.title}
            location={place.location}
            rating={place.rating}
            wheelchair={place.wheelchair}
            blind={place.blind}
            deaf={place.deaf}
            baby={place.baby}
            elder={place.elder}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

export default MainContent;