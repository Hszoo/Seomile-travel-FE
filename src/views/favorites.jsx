import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterButton from '../components/FilterButton';
import TravelCard from '../components/TravelPlace';

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Favorites = () => {
  return (
    <Container>
      <Title>즐겨찾기</Title>
      <FilterContainer>
        <FilterButton label="전체" active />
        <FilterButton label="시각" />
        <FilterButton label="청각" />
        <FilterButton label="영유아" />
        <FilterButton label="노령자" />
      </FilterContainer>
      <CardGrid>
      <TravelCard
          image="image-url-1"
          title="라바 타운"
          location="종로구"
          rating="4.7"
        />
        <TravelCard
          image="image-url-2"
          title="문화철도 959"
          location="구로구"
          rating="4.8"
        />
        <TravelCard
          image="image-url-3"
          title="풋볼 팬타지움"
          location="마포구"
          rating="4.3"
        />
        <TravelCard
          image="image-url-4"
          title="한국의 집"
          location="중구"
          rating="4.5"
        />
      </CardGrid>
    </Container>
  )
}

export default Favorites;