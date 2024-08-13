import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가
import styled from 'styled-components';
import axios from 'axios';

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

const ReviewButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TravelDetail = () => {
  const { id } = useParams(); // URL 파라미터에서 id를 추출
  const navigate = useNavigate(); // useNavigate를 통해 페이지 이동을 관리
  const [place, setPlace] = useState(null); // 여행지 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 오류 상태 관리

  useEffect(() => {
    const fetchTravelDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1:8080/travel`, {
          params: { travelCode: id } // 서버에 travelCode로 id를 전달
        });
        setPlace(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching travel detail:', err);
        setError('Error fetching travel detail');
        setLoading(false);
      }
    };

    fetchTravelDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!place) return <div>No travel data available</div>;

  const handleReviewClick = () => {
    navigate(`/review/${id}`); // 리뷰 페이지로 이동
  };

  return (
    <Container>
      <Image src={place.travImg} alt={place.travName} />
      <Title>{place.travName}</Title>
      <Rating>
        <span>Rating: {place.reviewRating}</span>
      </Rating>
      <BasicInfo>
        <h3>기본 정보</h3>
        <p>주소: {place.travAddress}</p>
        <p>문의: {place.tel}</p>
        <p>휴무일: {place.closeDate}</p>
        <p>이용시간: {place.availableTime}</p>
        <p>이용요금: {place.fee}</p>
      </BasicInfo>
      <ReviewButton onClick={handleReviewClick}>리뷰 작성하기</ReviewButton>
    </Container>
  );
};

export default TravelDetail;
