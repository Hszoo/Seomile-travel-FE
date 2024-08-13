import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, LocationIcon, ProgramIcon, FavoritesIcon } from './icons/auth-icon';
import { FaRegCommentDots } from 'react-icons/fa'; 

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
`;

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.active ? '#00aaff' : 'gray')};  /* 활성화 여부에 따라 색상 변경 */

  .icon {
    width: 24px;
    height: 24px;
    filter: ${(props) => (props.active ? 'none' : 'grayscale(100%)')};  /* 비활성화 시 아이콘 회색조로 */
  }

  .label {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
`;

const ChatIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00aaff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  .icon {
    width: 24px;
    height: 24px;
    color: white; 
  }
`;

const Footer = () => {
  const location = useLocation();

  return (
    <FooterContainer>
      <FooterLink to="/" active={location.pathname === '/'}>
        <HomeIcon className="icon" />
        <div className="label">홈</div>
      </FooterLink>
      <FooterLink to="/map" active={location.pathname === '/map'}>
        <LocationIcon className="icon" />
        <div className="label">지도</div>
      </FooterLink>
      <FooterLink to="/chat" active={location.pathname === '/chat'}>
        <ChatIconContainer>
          <FaRegCommentDots className="icon" /> 
        </ChatIconContainer>
      </FooterLink>
      <FooterLink to="/program" active={location.pathname === '/program'}>
        <ProgramIcon className="icon" />
        <div className="label">프로그램</div>
      </FooterLink>
      <FooterLink to="/favorites" active={location.pathname === '/favorites'}>
        <FavoritesIcon className="icon" />
        <div className="label">즐겨찾기</div>
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
