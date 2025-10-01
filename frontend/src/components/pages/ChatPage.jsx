// src/pages/ChatPage.js
import React, { useState, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';
import { useChat } from '../hooks/useChat';
import Sidebar from '../sidebar/Sidebar';
import ChatContainer from '../chat/ChatContainer';

const ChatPage = () => {
  const [currentRoom, setCurrentRoom] = useState('general');
  const { socket } = useSocket('http://localhost:3000');
  const { messages, activeUsers, typingUsers, sendMessage, startTyping, stopTyping } = useChat(socket, currentRoom);

  const rooms = [
    { id: 'general', name: 'General' },
    { id: 'random', name: 'Random' },
    { id: 'tech', name: 'Tech' },
    { id: 'support', name: 'Support' }
  ];

  useEffect(() => {
    if (socket) {
      socket.emit('room:join', currentRoom);
    }
  }, [socket, currentRoom]);

  const handleRoomChange = (roomId) => {
    setCurrentRoom(roomId);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <Sidebar 
        activeUsers={activeUsers}
        currentRoom={currentRoom}
        onRoomChange={handleRoomChange}
        rooms={rooms}
      />
      <ChatContainer 
        currentRoom={currentRoom}
        activeUsers={activeUsers}
        messages={messages}
        typingUsers={typingUsers}
        onSendMessage={sendMessage}
        onTypingStart={startTyping}
        onTypingStop={stopTyping}
      />
    </div>
  );
};

export default ChatPage;