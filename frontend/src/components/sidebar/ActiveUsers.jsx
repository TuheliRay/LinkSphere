// src/components/sidebar/ActiveUsers.js
import React from 'react';

const ActiveUsers = ({ activeUsers }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">
        Active Users ({activeUsers.length})
      </h3>
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {activeUsers.map(activeUser => (
          <div 
            key={activeUser.userId} 
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <img 
              src={activeUser.user.image_url} 
              alt={activeUser.user.first_name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              {activeUser.user.first_name} {activeUser.user.last_name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveUsers;