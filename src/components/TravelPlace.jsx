import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faWheelchair, faSmile } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 220px;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const Location = styled.div`
  color: #777;
  font-size: 14px;
`;

const Rating = styled.div`
  color: #ffcc00;
  font-size: 16px;
  margin: 10px 0;
`;

const Icons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const TravelCard = ({ image, title, location, rating }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Location>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
      </Location>
      <Rating>
        <FontAwesomeIcon icon={faStar} /> {rating}
      </Rating>
      <Icons>
        <FontAwesomeIcon icon={faWheelchair} />
        <FontAwesomeIcon icon={faSmile} />
      </Icons>
    </Card>
  );
};

export default TravelCard;
