// src/components/sidebar/UserProfile.js
import React from 'react';
import { useUser } from '@clerk/clerk-react';

const UserProfile = () => {
  const { user } = useUser();

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-center space-x-3">
        <img 
          src={user?.imageUrl} 
          alt={user?.firstName}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;