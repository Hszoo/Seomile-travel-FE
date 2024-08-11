import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { WheelchairIcon } from '../components//icons/auth-icon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 16px;
`;

const MapContainer = styled.div`
  flex: 1;
  background: url('/path/to/your/map-image.png') no-repeat center center;
  background-size: cover;
  position: relative;
`;

const ListItemContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 10px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ListItemText = styled.div`
  margin-left: 10px;
`;

const ListItemTitle = styled.div`
  font-weight: bold;
`;

const ListItemSubtitle = styled.div`
  color: #555;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: white;
  border-top: 1px solid #ddd;
`;

const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #555;
`;

const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

const Map = () => {
  return (
    <Container>
      <SearchBar>
        <FaSearch />
        <SearchInput placeholder="검색하거나 지도를 이동하세요" />
      </SearchBar>
      <MapContainer>
        <ListItemContainer>
          <ListItem>
            <WheelchairIcon />
            <ListItemText>
              <ListItemTitle>한국의 집</ListItemTitle>
              <ListItemSubtitle>서울특별시 종로구</ListItemSubtitle>
            </ListItemText>
          </ListItem>
          <ListItem>
            <WheelchairIcon />
            <ListItemText>
              <ListItemTitle>경국대학교 호수공원</ListItemTitle>
              <ListItemSubtitle>서울특별시 관악구</ListItemSubtitle>
            </ListItemText>
          </ListItem>
        </ListItemContainer>
      </MapContainer>
    </Container>
  );
};

export default Map;