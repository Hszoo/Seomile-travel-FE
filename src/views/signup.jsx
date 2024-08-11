import React from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      <Title>
        여러분 <span>편리하고 즐거운</span> 여행을 위한
      </Title>
      <SubTitle>회원가입</SubTitle>
      <InputContainer>
        <Input type="text" placeholder="아이디" />
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Input type="password" placeholder="비밀번호 확인" />
        <SignUpButton>회원가입</SignUpButton>
      </InputContainer>
      <Footer>
        <a href="/login">로그인</a>
      </Footer>
    </Container>
  );
};

export default SignUp;
