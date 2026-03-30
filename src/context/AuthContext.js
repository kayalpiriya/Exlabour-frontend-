'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const API = axios.create({
    baseURL: 'https://exlabour-backend.onrender.com/api',
});

API.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = Cookies.get('user');
        const token = Cookies.get('token');

        if (storedUser && token) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                Cookies.remove('user');
                Cookies.remove('token');
            }
        }
        setLoading(false);
    }, []);

    // LOGIN FUNCTION
    const login = async (email, password) => {
        try {
            const res = await API.post('/auth/login', { email, password });
            const userData = res.data;

            Cookies.set('token', userData.token, {
                expires: 30,
                secure: true, // HTTPS only
                sameSite: 'None' // cross-domain
            });
            Cookies.set('user', JSON.stringify(userData), {
                expires: 30,
                secure: true,
                sameSite: 'None'
            });
            setUser(userData);
            return userData;
        } catch (error) {
            throw error;
        }
    };

    const register = async (formData) => {
        try {
            const res = await API.post('/auth/register', formData);
            const userData = res.data;

            Cookies.set('token', userData.token, { expires: 30 });
            Cookies.set('user', JSON.stringify(userData), { expires: 30 });
            setUser(userData);
            return userData;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        Cookies.remove('token');
        Cookies.remove('user');
        setUser(null);
    };

    const updateUser = (updatedData) => {
        const newUser = { ...user, ...updatedData };
        Cookies.set('user', JSON.stringify(newUser), { expires: 30 });
        setUser(newUser);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);