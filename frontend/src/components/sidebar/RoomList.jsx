// src/components/sidebar/RoomList.js
import React from 'react';

const RoomList = ({ rooms, currentRoom, onRoomChange }) => {
  return (
    <div className="p-4 flex-1">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Rooms</h3>
      <div className="space-y-1">
        {rooms.map(room => (
          <button
            key={room.id}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              currentRoom === room.id
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onRoomChange(room.id)}
          >
            # {room.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomList;