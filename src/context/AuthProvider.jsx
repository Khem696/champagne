import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import AuthContext from './authContext';

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('adminToken');
            const userData = localStorage.getItem('adminUser');

            if (token && userData) {
                setIsAuthenticated(true);
                setUser(JSON.parse(userData));
            }
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminUser', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
