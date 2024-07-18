import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Time = styled.div`
  font-size: 18px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Time>9:41</Time>
      <Title>여행지 추천</Title>
      <div></div>
    </HeaderContainer>
  );
};

export default Header;