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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [activeFilter, setActiveFilter] = useState('전체');

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const filterFavorites = (filter) => {
    setActiveFilter(filter);
  };

  const filteredFavorites = favorites.filter((fav) => {
    if (activeFilter === '전체') return true;
    if (activeFilter === '지체' && fav.wheelchair) return true;
    if (activeFilter === '시각' && fav.blind) return true;
    if (activeFilter === '청각' && fav.deaf) return true;
    if (activeFilter === '영유아' && fav.baby) return true;
    if (activeFilter === '노령자' && fav.elder) return true;
    return false;
  });

  return (
    <Container>
      <Title>즐겨찾기</Title>
      <FilterContainer>
        <FilterButton label="전체" active={activeFilter === '전체'} onClick={() => filterFavorites('전체')} />
        <FilterButton label="지체" active={activeFilter === '지체'} onClick={() => filterFavorites('지체')} />
        <FilterButton label="시각" active={activeFilter === '시각'} onClick={() => filterFavorites('시각')} />
        <FilterButton label="청각" active={activeFilter === '청각'} onClick={() => filterFavorites('청각')} />
        <FilterButton label="영유아" active={activeFilter === '영유아'} onClick={() => filterFavorites('영유아')} />
        <FilterButton label="노령자" active={activeFilter === '노령자'} onClick={() => filterFavorites('노령자')} />
      </FilterContainer>
      <CardGrid>
        {filteredFavorites.map((fav) => (
          <TravelCard
            key={fav.id}
            id={fav.id}
            image={fav.image}
            title={fav.title}
            location={fav.location}
            rating={fav.rating}
            blind={fav.blind}
            deaf={fav.deaf}
            baby={fav.baby}
            wheelchair={fav.wheelchair}
            elder={fav.elder}
            hideHeart
          />
        ))}
      </CardGrid>
    </Container>
  );
};

export default Favorites;
