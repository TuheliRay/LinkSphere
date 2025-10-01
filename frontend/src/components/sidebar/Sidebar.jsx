// src/components/sidebar/Sidebar.js
import React from 'react';
import ActiveUsers from './ActiveUsers';
import RoomList from './RoomList';
import UserProfile from './UserProfile';

const Sidebar = ({ activeUsers, currentRoom, onRoomChange, rooms }) => {
  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
      <ActiveUsers activeUsers={activeUsers} />
      <RoomList 
        rooms={rooms} 
        currentRoom={currentRoom} 
        onRoomChange={onRoomChange} 
      />
      <UserProfile />
    </div>
  );
};

export default Sidebar;