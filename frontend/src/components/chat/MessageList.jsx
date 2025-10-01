// src/components/chat/MessageList.js
import React, { useEffect, useRef } from 'react';
import TypingIndicator from './TypingIndicator';

const MessageList = ({ messages, currentRoom, typingUsers }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const roomMessages = messages.filter(message => message.roomId === currentRoom);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {roomMessages.map(message => (
          <div 
            key={message.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-3">
              <img 
                src={message.user.imageUrl} 
                alt={message.user.firstName}
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-gray-900">
                    {message.user.firstName} {message.user.lastName}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                <p className="text-gray-800 whitespace-pre-wrap break-words">
                  {message.content}
                </p>
              </div>
            </div>
          </div>
        ))}

        <TypingIndicator typingUsers={typingUsers} />
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;