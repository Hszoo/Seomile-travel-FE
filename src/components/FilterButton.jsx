import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.active ? '#00aaff' : '#ccc')};
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  width: 55px;  /* 고정된 너비 */
  height: 55px; /* 고정된 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#0088cc' : '#bbb')};
  }

  @media (min-width: 768px) {
    width: 70px;  /* 웹에서 더 큰 화면을 위한 버튼 크기 조정 */
    height: 70px; /* 웹에서 더 큰 화면을 위한 버튼 크기 조정 */
    font-size: 18px; /* 텍스트 크기도 약간 증가 */
  }

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
    font-size: 20px;
  }
`;

const FilterButton = ({ label, active, onClick }) => {
  return <Button active={active} onClick={onClick}>{label}</Button>;
};

export default FilterButton;
