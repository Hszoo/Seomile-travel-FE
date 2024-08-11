import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BabyIcon, BlindIcon, DeafIcon, WheelchairIcon, StarIcon } from '../components/icons/auth-icon';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Rating = styled.div`
  color: #ffcc00;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const BasicInfo = styled.div`
  margin: 20px 0;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 10px;
`;

const TravelDetail = ({ travelPlaces }) => {
  const { id } = useParams();
  const place = travelPlaces.find(p => p.id === id);


  return (
    <Container>
      <Image src={place.image} alt={place.title} />
      <Title>
        {place.title} 
        <IconWrapper>
          {place.blind && <BlindIcon />}
          {place.deaf && <DeafIcon />}
          {place.baby && <BabyIcon />}
          {place.wheelchair && <WheelchairIcon />}
        </IconWrapper>
      </Title>
      <Rating>
        <StarIcon /> {place.rating}
      </Rating>
      <BasicInfo>
        <h3>기본 정보</h3>
        <p>주소: {place.address}</p>
        <p>문의: {place.contact}</p>
        <p>휴무일: {place.closedDays}</p>
        <p>이용시간: {place.hours}</p>
        <p>이용요금: {place.fee}</p>
      </BasicInfo>
    </Container>
  );
};

TravelDetail.propTypes = {
  travelPlaces: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      blind: PropTypes.bool,
      deaf: PropTypes.bool,
      baby: PropTypes.bool,
      wheelchair: PropTypes.bool,
      address: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
      closedDays: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
      fee: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TravelDetail;