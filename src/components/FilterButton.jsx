import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.active ? '#00aaff' : '#ccc')};
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? '#0088cc' : '#bbb')};
  }
`;

const FilterButton = ({ label, active }) => {
  return <Button active={active}>{label}</Button>;
};

export default FilterButton;
