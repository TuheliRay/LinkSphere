// src/hooks/useSocket.js
import { useState, useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import io from 'socket.io-client';

export const useSocket = (url) => {
  const { user } = useUser();
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!user) return;

    const token = user.getToken();
    const newSocket = io(url, {
      auth: { token }
    });

    setSocket(newSocket);

    newSocket.on('connect', () => {
      setIsConnected(true);
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      newSocket.close();
    };
  }, [user, url]);

  return { socket, isConnected };
};