import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.active ? '#00aaff' : '#ccc')};
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  width: 55px;  
  height: 55px; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#0088cc' : '#bbb')};
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
    font-size: 20px;
  }
`;

const FilterButton = ({ label, active, onClick }) => {
  return (
    <Button
      active={active ? 'true' : undefined} // active가 true일 때만 'true'로 설정
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
