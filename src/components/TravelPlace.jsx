import React from 'react';
import styled from 'styled-components';
import { BlindIcon, DeafIcon, BabyIcon, WheelchairIcon, LocationIcon, StarIcon } from './icons/auth-icon';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 10px;
  width: 150px; /* 카드 크기 조정 */
  cursor: pointer;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100px; /* 이미지 높이 조정 */
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px 0;
`;

const Title = styled.h3`
  font-size: 16px; /* 폰트 크기 조정 */
  margin: 10px 0;
`;

const Location = styled.div`
  color: #777;
  font-size: 12px; /* 폰트 크기 조정 */
  display: flex;
  align-items: center;
`;

const Rating = styled.div`
  color: #ffcc00;
  font-size: 14px; /* 폰트 크기 조정 */
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Icons = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 20px; /* 아이콘 크기 조정 */
  gap: 5px;
`;

const TravelCard = ({ id, image, title, location, rating, onClick, blind, deaf, baby, wheelchair }) => {
  return (
    <Card onClick={onClick}>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Location>
          <LocationIcon /> {location}
        </Location>
        <Rating>
          <StarIcon /> {rating}
        </Rating>
        <Icons>
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
  onClick: PropTypes.func.isRequired,
  blind: PropTypes.bool,
  deaf: PropTypes.bool,
  baby: PropTypes.bool,
  wheelchair: PropTypes.bool,
};

export default TravelCard;