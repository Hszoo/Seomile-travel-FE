import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';  
import { Link, useNavigate } from 'react-router-dom';  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 10px;

  span {
    color: #00aaff;
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const KakaoButton = styled.button`
  background-color: #fee500;
  color: #381e1f;
  border: none;
  border-radius: 5px;
  width: 80%;
  max-width: 300px; 
  padding: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 300px;
  margin: 20px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ccc;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }

  span {
    color: #888;
  }
`;

const InputContainer = styled.div`
  width: 80%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const LoginButton = styled.button`
  background-color: #00aaff;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 300px;
  margin-top: 15px;
  font-size: 14px;

  a {
    color: #00aaff;
    text-decoration: none;
  }
`;

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');  // 'id'를 'username'으로 변경
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8080/api/login', {
        username,  // 'id'를 'username'으로 변경
        password,
      });
      if (response.status === 200) {
        onLogin();  // 로그인 상태 업데이트
        navigate('/');  // 로그인 성공 시 홈 페이지로 이동
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Title>
        여러분 <span>편리하고 즐거운</span> 여행을 위한
      </Title>
      <SubTitle>서마일 트레블</SubTitle>
      <KakaoButton>
        카카오 로그인
      </KakaoButton>
      <Divider><span>또는</span></Divider>
      <InputContainer>
        <Input 
          type="text" 
          placeholder="아이디" 
          value={username}  // 'id'를 'username'으로 변경
          onChange={(e) => setUsername(e.target.value)}  // 'setId'를 'setUsername'으로 변경
        />
        <Input 
          type="password" 
          placeholder="비밀번호" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </InputContainer>
      <Footer>
        <Link to="/signup">회원가입</Link> 
        <Link to="/find-password">비밀번호 찾기</Link> 
      </Footer>
    </Container>
  );
};

export default Login;
