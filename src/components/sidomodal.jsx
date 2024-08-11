import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 300px;
  max-width: 100%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const SidoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  text-align: center;
`;

const SidoItem = styled.li`
  margin: 10px 0;
  cursor: pointer;
  font-size: 16px;
  color: ${props => (props.selected ? '#007bff' : '#333')};

  &:hover {
    color: #007bff;
  }
`;

const SelectButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SidoModal = ({ visible, onClose, sidos, selectedSido, onSelectSido }) => {
  if (!visible) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>시/도 선택</Title>
        <SidoList>
          {sidos.map(sido => (
            <SidoItem
              key={sido.name}
              selected={sido.name === selectedSido}
              onClick={() => onSelectSido(sido.name)}
            >
              {sido.name}
            </SidoItem>
          ))}
        </SidoList>
        <SelectButton onClick={onClose}>선택하기</SelectButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SidoModal;