// src/components/chat/ChatContainer.js
import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatContainer = ({ 
  currentRoom, 
  activeUsers, 
  messages, 
  typingUsers, 
  onSendMessage, 
  onTypingStart, 
  onTypingStop 
}) => {
  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader currentRoom={currentRoom} activeUsersCount={activeUsers.length} />
      <MessageList 
        messages={messages} 
        currentRoom={currentRoom} 
        typingUsers={typingUsers} 
      />
      <MessageInput 
        onSendMessage={onSendMessage}
        onTypingStart={onTypingStart}
        onTypingStop={onTypingStop}
      />
    </div>
  );
};

export default ChatContainer;