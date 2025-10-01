// src/components/chat/ChatHeader.js
import React from 'react';

const ChatHeader = ({ currentRoom, activeUsersCount }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">#{currentRoom}</h2>
          <p className="text-sm text-gray-500">
            {activeUsersCount} users online
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;