// src/components/chat/TypingIndicator.js
import React from 'react';

const TypingIndicator = ({ typingUsers }) => {
  if (typingUsers.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-2 text-gray-500">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-sm italic">
          {typingUsers.map(user => user.user.first_name).join(', ')} 
          {typingUsers.length === 1 ? ' is' : ' are'} typing...
        </span>
      </div>
    </div>
  );
};

export default TypingIndicator;