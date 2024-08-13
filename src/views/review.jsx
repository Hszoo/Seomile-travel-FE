import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const Review = () => {
  const { id } = useParams(); // 여행지 ID를 URL에서 가져옴
  const navigate = useNavigate();
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://127.0.0.1:8080/travel/${id}/review`, {
        rating,
        review
      });

      // 리뷰 제출 후 상세 페이지로 돌아감
      navigate(`/detail/${id}`);
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  return (
    <Container>
      <Title>리뷰 작성</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="rating">평점</Label>
          <Input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <Label htmlFor="review">리뷰</Label>
          <TextArea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            required
          />
        </div>
        <SubmitButton type="submit">제출하기</SubmitButton>
      </form>
    </Container>
  );
};

export default Review;
