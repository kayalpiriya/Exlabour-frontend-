// 'use client';

// import { createContext, useState, useEffect, useContext } from 'react';
// import API from '@/utils/api';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Load user from localStorage
//     useEffect(() => {
//         try {
//             const storedUser = localStorage.getItem('user');
//             if (storedUser) setUser(JSON.parse(storedUser));
//         } catch {
//             localStorage.removeItem('user');
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     // REGISTER
//     const register = async (formData) => {
//         const { data } = await API.post('/auth/register', formData);
//         localStorage.setItem('user', JSON.stringify(data));
//         setUser(data);
//         return data;
//     };

//     // LOGIN
//     const login = async (formData) => {
//         const { data } = await API.post('/auth/login', formData);
//         localStorage.setItem('user', JSON.stringify(data));
//         setUser(data);
//         return data;
//     };

//     // LOGOUT
//     const logout = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, loading, register, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);


// 'use client';

// import { createContext, useState, useEffect, useContext } from 'react';
// import API from '@/utils/api';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         const storedUser = localStorage.getItem('user');

//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }

//         setLoading(false);

//     }, []);

//     // LOGIN
//     const login = async (formData) => {

//         const { data } = await API.post('/auth/login', formData);

//         localStorage.setItem('user', JSON.stringify(data));

//         setUser(data);

//         return data;

//     };

//     // REGISTER
//     const register = async (formData) => {

//         const { data } = await API.post('/auth/register', formData);

//         localStorage.setItem('user', JSON.stringify(data));

//         setUser(data);

//         return data;

//     };

//     const logout = () => {

//         localStorage.removeItem('user');

//         setUser(null);

//     };

//     return (

//         <AuthContext.Provider
//             value={{
//                 user,
//                 login,
//                 register,
//                 logout,
//                 loading
//             }}
//         >
//             {children}
//         </AuthContext.Provider>

//     );

// };

// export const useAuth = () => useContext(AuthContext);

// 'use client';

// import { createContext, useState, useEffect, useContext } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         try {
//             const storedUser = localStorage.getItem('user');
//             if (storedUser) {
//                 setUser(JSON.parse(storedUser));
//             }
//         } catch (error) {
//             localStorage.removeItem('user');
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     // This just SAVES user data - does NOT make API call
//     const login = (userData) => {
//         localStorage.setItem('user', JSON.stringify(userData));
//         setUser(userData);
//     };

//     const logout = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout, loading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);







'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Add token to requests automatically
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
        // Check if user is logged in on page load
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
            
            Cookies.set('token', userData.token, { expires: 30 });
            Cookies.set('user', JSON.stringify(userData), { expires: 30 });
            setUser(userData);
            return userData;
        } catch (error) {
            throw error;
        }
    };

    // REGISTER FUNCTION - This was missing!
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