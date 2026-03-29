'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [socket, setSocket] = current => useState(null);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Assuming your auth token is stored in cookies named 'token'
        // If it's in localStorage, adjust accordingly.
        const token = Cookies.get('token'); 
        
        if (!token) return;

        const newSocket = io('http://localhost:5000', {
            auth: { token },
            withCredentials: true,
        });

        // Optional: If user is admin or tasker, join specific rooms
        // By default, the backend joins the user to their own personal room (their ID).
        const userStr = localStorage.getItem('userInfo');
        if (userStr) {
            const user = JSON.parse(userStr);
            if (user.role === 'admin') {
                newSocket.emit('join_role_room', 'admin');
            } else if (user.role === 'tasker' && user.verificationStatus === 'verified') {
                newSocket.emit('join_role_room', 'verified_taskers');
            }
        }

        newSocket.on('connect', () => {
             console.log('Connected to socket server');
        });

        newSocket.on('new_notification', (data) => {
            // Add to state
            setNotifications(prev => [data, ...prev]);
            
            // Show toast
            toast(data.message, {
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
            const res = await fetch('http://localhost:5000/api/notifications', {
                headers: { Authorization: `Bearer ${userToken}` }
            });
            const data = await res.json();
            setNotifications(data);
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
