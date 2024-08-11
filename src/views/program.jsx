import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SidoModal from '../components/sidomodal';
import LocalModal from '../components/localmodal';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LocalButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ProgramCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProgramTitle = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProgramDates = styled.div`
  font-size: 12px;
  color: #6c757d;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 5px;
`;

const Program = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [localModalVisible, setLocalModalVisible] = useState(false);
  const [selectedSido, setSelectedSido] = useState('');
  const [selectedSubArea, setSelectedSubArea] = useState('');
  const [sidos, setSidos] = useState([]);

  useEffect(() => {
    fetch('/regions.json')
      .then(response => response.json())
      .then(data => setSidos(data))
      .catch(error => console.error('Error fetching the JSON data:', error));
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenLocalModal = () => {
    if (selectedSido) {
      setLocalModalVisible(true);
    } else {
      alert('먼저 시/도를 선택하세요.');
    }
  };

  const handleCloseLocalModal = () => {
    setLocalModalVisible(false);
  };

  const handleSelectSido = (sido) => {
    setSelectedSido(sido);
    setSelectedSubArea(''); 
    setModalVisible(false); 
  };

  const handleSelectSubArea = (subArea) => {
    setSelectedSubArea(subArea);
    setLocalModalVisible(false);
  };

  const selectedSidoData = sidos.find(sido => sido.name === selectedSido);

  return (
    <Container>
      <Title>국가 지원 프로그램</Title>
      <FilterContainer>
        <LocalButton onClick={handleOpenModal}>{selectedSido || '시/도'}</LocalButton>
        <LocalButton onClick={handleOpenLocalModal}>{selectedSubArea || '지역'}</LocalButton>
      </FilterContainer>
      <ProgramCard>
        <ProgramTitle>경주 여행 장애 관광버스 지원</ProgramTitle>
        <ProgramDates>
          <Icon>📅</Icon> 2023.03.01 ~ 2023.07.14
        </ProgramDates>
      </ProgramCard>
      <ProgramCard>
        <ProgramTitle>경주 무장애 나눔길 조성사업</ProgramTitle>
        <ProgramDates>
          <Icon>📅</Icon> 2023.03.01 ~ 2023.07.14
        </ProgramDates>
      </ProgramCard>
      <SidoModal
        visible={modalVisible}
        onClose={handleCloseModal}
        sidos={sidos}
        selectedSido={selectedSido}
        onSelectSido={handleSelectSido}
      />
      <LocalModal
        visible={localModalVisible}
        onClose={handleCloseLocalModal}
        subAreas={selectedSidoData ? selectedSidoData.subArea : []}
        selectedSubArea={selectedSubArea}
        onSelectSubArea={handleSelectSubArea}
      />
    </Container>
  );
};

export default Program;