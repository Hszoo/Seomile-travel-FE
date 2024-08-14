import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

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

const SearchIcon = styled(FaSearch)`
  cursor: pointer;
`;

const MapContainer = styled.div`
  flex: 1;
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
  resize: vertical;
  overflow: auto;
`;

const Resizer = styled.div`
  height: 10px;
  background: #ddd;
  cursor: ns-resize;
  width: 100%;
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

const mapStyles = {        
  height: "100%",
  width: "100%"
};

const defaultCenter = {
  lat: 37.5665, 
  lng: 126.9780
};

const Map = () => {
  const [places, setPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [listHeight, setListHeight] = useState(200); // 초기 높이 설정

  const listRef = useRef(null);
  const startY = useRef(0);
  const startHeight = useRef(0);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:8080/travel/list');
        setPlaces(response.data);
      } catch (error) {
        console.error('Error fetching travel places:', error);
      }
    };

    fetchPlaces();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/travel/search', {
        params: { keyword: searchQuery }
      });
      setPlaces(response.data);
    } catch (error) {
      console.error('Error searching travel places:', error);
    }
  };

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  const handleMouseDown = (e) => {
    startY.current = e.clientY;
    startHeight.current = listHeight;
    document.documentElement.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newHeight = startHeight.current - (e.clientY - startY.current);
    setListHeight(newHeight);
  };

  const handleMouseUp = () => {
    document.documentElement.removeEventListener('mousemove', handleMouseMove);
    document.documentElement.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <Container>
      <SearchBar>
        <SearchIcon onClick={handleSearch} />
        <SearchInput 
          placeholder="검색하거나 지도를 이동하세요" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
        />
      </SearchBar>
      <MapContainer>
        <LoadScript googleMapsApiKey="AIzaSyBuc55NM4zQrmthzmlHfjoY4uJZzEdqlgM">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={12}
            center={defaultCenter}
          >
            {places.map((place, index) => (
              <Marker 
                key={index}
                position={{ lat: parseFloat(place.travX), lng: parseFloat(place.travY) }}
                title={place.travName}
                onClick={() => handleMarkerClick(place)}
              />
            ))}

            {selectedPlace && (
              <InfoWindow
                position={{ lat: parseFloat(selectedPlace.travX), lng: parseFloat(selectedPlace.travY) }}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div>
                  <h3>{selectedPlace.travName}</h3>
                  <p>{selectedPlace.travAddress}</p>
                  <p>{`Latitude: ${selectedPlace.travX}, Longitude: ${selectedPlace.travY}`}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
        <ListItemContainer ref={listRef} style={{ height: listHeight }}>
          <Resizer onMouseDown={handleMouseDown} />
          {places.map((place, index) => (
            <ListItem key={index}>
              <ListItemText>
                <ListItemTitle>{place.travName}</ListItemTitle>
                <ListItemSubtitle>{place.travAddress}</ListItemSubtitle>
              </ListItemText>
            </ListItem>
          ))}
        </ListItemContainer>
      </MapContainer>
    </Container>
  );
};

export default Map;
