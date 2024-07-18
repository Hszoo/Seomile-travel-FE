import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeIcon from './icons/home.png';
import mapIcon from './icons/map.png';
import chatIcon from './icons/chat.png';
import browserIcon from './icons/browser.png';
import favoritesIcon from './icons/favorites.png';

const FooterContainer = styled.footer`
  background-color: white;
  padding: 1em 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);

  .icon-container.active {
    color: #00aaff;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .label {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
`;

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: blue;
  text-decoration: none;

`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink to="/" className="icon-container">
        <img src={homeIcon} className="icon" alt="홈" />
        <div className="label">홈</div>
      </FooterLink>
      <FooterLink to="/map" className="icon-container">
        <img src={mapIcon} className="icon" alt="지도" />
        <div className="label">지도</div>
      </FooterLink>
      <FooterLink to ="/chat" className="icon-container">
        <img src={chatIcon} className="icon" alt="채팅" />
      </FooterLink>
      <FooterLink to="/program" className="icon-container">
        <img src={browserIcon} className="icon" alt="프로그램" />
        <div className="label">프로그램</div>
      </FooterLink>
      <FooterLink to="/favorites" className="icon-container">
        <img src={favoritesIcon} className="icon" alt="즐겨찾기" />
        <div className="label">즐겨찾기</div>
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
