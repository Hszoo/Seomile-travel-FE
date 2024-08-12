import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterButton from '../components/FilterButton';
import TravelCard from '../components/TravelPlace';
import axios from 'axios';

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

const Home = ({ travelPlaces = [] }) => {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [fetchedTravelPlaces, setFetchedTravelPlaces] = useState([]);  // 상태 변수 이름 변경

  const filterCategories = {
    지체: 1,
    시각: 2,
    청각: 3,
    영유아: 4,
    노령자: 5,
    전체: ''  // 전체 필터는 모든 카테고리를 포함하므로 비어 있음
  };
  
  const fetchTravelPlaces = async (category) => {
    try {
      const categoryParam = category === '' ? '' : `?categories=${category}`;
      const response = await axios.get(`http://127.0.0.1:8080/travel/list${categoryParam}`);
      setFetchedTravelPlaces(response.data);  // 상태 변수에 데이터 저장
    } catch (error) {
      console.error('Error fetching travel places:', error);
    }
  };

  useEffect(() => {
    fetchTravelPlaces(filterCategories[activeFilter]);
  }, [activeFilter]);

  const filterPlaces = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <Container>
      <Title>여행지 추천</Title>
      <FilterContainer>
        {Object.keys(filterCategories).map((filter) => (
          <FilterButton
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() => filterPlaces(filter)}
          />
        ))}
      </FilterContainer>
      <CardGrid>
        {fetchedTravelPlaces.map((place, index) => (
          <TravelCard
            key={index}
            id={place.travId}
            image={place.travImg}
            title={place.travName}
            location={place.travAddress}
            rating={place.reviewRate}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

export default Home;