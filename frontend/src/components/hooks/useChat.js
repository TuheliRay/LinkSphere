// src/hooks/useChat.js
import { useState, useEffect, useCallback } from 'react';

export const useChat = (socket, currentRoom) => {
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (message) => {
      setMessages(prev => [...prev, message]);
    };

    const handleUsersUpdate = (users) => {
      setActiveUsers(users);
    };

    const handleTypingStart = (data) => {
      setTypingUsers(prev => {
        const userExists = prev.find(u => u.userId === data.userId);
        if (!userExists) return [...prev, data];
        return prev;
      });
    };

    const handleTypingStop = (data) => {
      setTypingUsers(prev => prev.filter(u => u.userId !== data.userId));
    };

    socket.on('message:new', handleNewMessage);
    socket.on('users:update', handleUsersUpdate);
    socket.on('typing:start', handleTypingStart);
    socket.on('typing:stop', handleTypingStop);

    return () => {
      socket.off('message:new', handleNewMessage);
      socket.off('users:update', handleUsersUpdate);
      socket.off('typing:start', handleTypingStart);
      socket.off('typing:stop', handleTypingStop);
    };
  }, [socket]);

  const sendMessage = useCallback((content) => {
    if (!socket || !content.trim()) return;

    const messageData = {
      content,
      roomId: currentRoom
    };

    socket.emit('message:send', messageData);
    socket.emit('typing:stop', { roomId: currentRoom });
  }, [socket, currentRoom]);

  const startTyping = useCallback(() => {
    if (socket) {
      socket.emit('typing:start', { roomId: currentRoom });
    }
  }, [socket, currentRoom]);

  const stopTyping = useCallback(() => {
    if (socket) {
      socket.emit('typing:stop', { roomId: currentRoom });
    }
  }, [socket, currentRoom]);

  return {
    messages,
    activeUsers,
    typingUsers,
    sendMessage,
    startTyping,
    stopTyping
  };
};