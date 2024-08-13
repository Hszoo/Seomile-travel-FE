import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ChatBox = styled.div`
  width: 90%;
  max-width: 500px;
  height: 70%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
`;

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
`;

const MessageItem = styled.li`
  padding: 10px;
  background-color: ${(props) => (props.isUser ? '#007bff' : '#e9ecef')};
  color: ${(props) => (props.isUser ? 'white' : 'black')};
  margin-bottom: 10px;
  border-radius: 5px;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  max-width: 80%;
  word-wrap: break-word;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [client, setClient] = useState(null);
  const messageEndRef = useRef(null);

  useEffect(() => {
    // WebSocket 클라이언트 초기화
    const wsClient = new W3CWebSocket('ws://127.0.0.1:8080/chat'); // 백엔드 WebSocket 서버 주소
    setClient(wsClient);

    wsClient.onopen = () => {
      console.log('WebSocket connection established');
    };

    wsClient.onmessage = (message) => {
      console.log('Received message from server:', message.data);
      try {
        const parsedMessage = JSON.parse(message.data);
        setMessages((prevMessages) => [...prevMessages, parsedMessage]);
      } catch (error) {
        console.error('Failed to parse message from server:', error);
      }
    };

    wsClient.onclose = () => {
      console.log('WebSocket connection closed');
    };

    wsClient.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      wsClient.close();
    };
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() === '') {
      console.log('Message is empty, not sending');
      return;
    }

    const chatMessage = {
      sender: 'User',  // 실제 사용자의 이름이나 ID로 변경
      recipientBot: 'ChatBot',
      message,
    };

    if (client && client.readyState === WebSocket.OPEN) {
      console.log('Sending message to server:', chatMessage);
      client.send(JSON.stringify(chatMessage));
      setMessages((prevMessages) => [...prevMessages, chatMessage]);
      setMessage('');
    } else {
      console.error('WebSocket is not open. Ready state:', client?.readyState);
    }
  };

  return (
    <Container>
      <ChatBox>
        <MessageList>
          {messages.map((msg, index) => (
            <MessageItem key={index} isUser={msg.sender === 'User'}>
              <strong>{msg.sender}:</strong> {msg.message}
            </MessageItem>
          ))}
          <div ref={messageEndRef} />
        </MessageList>
      </ChatBox>
      <InputContainer>
        <Input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="메시지를 입력하세요..." 
        />
        <SendButton onClick={handleSendMessage}>전송</SendButton>
      </InputContainer>
    </Container>
  );
};

export default Chat;
