import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BlindIcon, DeafIcon, BabyIcon, WheelchairIcon, LocationIcon, StarIcon, ElderIcon } from './icons/auth-icon';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 10px;
  width: 150px;
  cursor: pointer;
  position: relative; 
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px 0;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const Location = styled.div`
  color: #777;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const Rating = styled.div`
  color: #ffcc00;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Icons = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 20px;
  gap: 5px;
`;

const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isfavorite ? 'red' : 'gray')}; /* 좋아요 상태에 따른 색상 */
  font-size: 24px;
`;

const TravelCard = ({ id, image, title, location, rating, onClick, blind, deaf, baby, wheelchair, elder, hideHeart }) => {
  const [isfavorite, setisfavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setisfavorite(favorites.some(fav => fav.id === id));
  }, [id]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    const updatedFavorite = !isfavorite;
    setisfavorite(updatedFavorite);

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (updatedFavorite) {
      favorites.push({ id, image, title, location, rating, blind, deaf, baby, wheelchair, elder });
    } else {
      favorites = favorites.filter(fav => fav.id !== id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Image src={image} alt={title} />
      {!hideHeart && (
        <HeartButton isfavorite={isfavorite} onClick={handleFavoriteClick}>
          {isfavorite ? <FaHeart /> : <FaRegHeart />}
        </HeartButton>
      )}
      <Content>
        <Title>{title}</Title>
        <Location>
          <LocationIcon /> {location}
        </Location>
        <Rating>
          <StarIcon /> {rating}
        </Rating>
        <Icons>
          {elder && <ElderIcon />}
          {blind && <BlindIcon />}
          {deaf && <DeafIcon />}
          {baby && <BabyIcon />}
          {wheelchair && <WheelchairIcon />}
        </Icons>
      </Content>
    </Card>
  );
};

TravelCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  elder: PropTypes.bool,
  blind: PropTypes.bool,
  deaf: PropTypes.bool,
  baby: PropTypes.bool,
  wheelchair: PropTypes.bool,
  hideHeart: PropTypes.bool,
};

export default TravelCard;
