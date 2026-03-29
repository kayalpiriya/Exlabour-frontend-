'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const token = Cookies.get('token'); 
        
        if (!token) return;

        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://exlabour-backend.onrender.com';

        const newSocket = io(API_URL, {
            auth: { token },
            withCredentials: true,
        });

        // Join specific rooms based on user role
        const userStr = Cookies.get('user');
        if (userStr) {
            try {
                const user = JSON.parse(userStr);
                if (user.role === 'admin') {
                    newSocket.emit('join_role_room', 'admin');
                } else if (user.role === 'tasker' && user.verificationStatus === 'verified') {
                    newSocket.emit('join_role_room', 'verified_taskers');
                }
            } catch (e) { 
                console.error('Error parsing user cookie for socket:', e);
            }
        }

        newSocket.on('connect', () => {
             console.log('Connected to socket server');
        });

        newSocket.on('new_notification', (data) => {
            // Add to state immediately
            setNotifications(prev => [data, ...prev]);
            
            // Show toast popup in bottom right or top right
            toast.success(data.message, {
                icon: '🔔',
                duration: 5000,
            });
        });

        setSocket(newSocket);

        return () => newSocket.close();
    }, []);

    // Function to fetch offline notifications from DB when user logs in
    const fetchOfflineNotifications = async (userToken) => {
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://exlabour-backend.onrender.com';
            const res = await fetch(`${API_URL}/api/notifications`, {
                headers: { Authorization: `Bearer ${userToken}` }
            });
            const data = await res.json();
            setNotifications(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Failed to fetch offline notifications', error);
        }
    };

    return (
        <NotificationContext.Provider value={{ socket, notifications, setNotifications, fetchOfflineNotifications }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => {
    return useContext(NotificationContext);
};
