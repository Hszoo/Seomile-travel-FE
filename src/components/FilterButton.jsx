import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.active ? '#00aaff' : '#ccc')};
  border: none;
  border-radius: 50%;
  margin:0 5px;
  font-size: 16px;
  cursor: pointer;
  width: 150px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &:hover {
    background-color: ${(props) => (props.active ? '#0088cc' : '#bbb')};
  }
`;

const FilterButton = ({ label, active, onClick }) => {
  return <Button active={active} onClick={onClick}>{label}</Button>;
};

export default FilterButton;