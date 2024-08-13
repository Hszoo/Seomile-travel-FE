import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';  

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

const SignUpButton = styled.button`
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

const SignUp = () => {
  const [username, setUsername] = useState('');  // 'id'를 'username'으로 변경
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8080/api/signup', {
        username,  // 'id'를 'username'으로 변경
        email,
        password,
      });
      if (response.status === 200) {
        // 회원가입 성공 시 로그인 페이지로 이동
        navigate('/login');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Title>
        여러분 <span>편리하고 즐거운</span> 여행을 위한
      </Title>
      <SubTitle>회원가입</SubTitle>
      <InputContainer>
        <Input 
          type="text" 
          placeholder="아이디" 
          value={username}  // 'id'를 'username'으로 변경
          onChange={(e) => setUsername(e.target.value)}  // 'setId'를 'setUsername'으로 변경
        />
        <Input 
          type="email" 
          placeholder="이메일" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="비밀번호" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="비밀번호 확인" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
      </InputContainer>
      <Footer>
        <a href="/login">로그인</a>
      </Footer>
    </Container>
  );
};

export default SignUp;
