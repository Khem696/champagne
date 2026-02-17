import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import '../../styles/admin.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // In a real application, you would make an API call here
            // For demo purposes, we'll use hardcoded credentials
            if (credentials.username === 'admin' && credentials.password === 'admin123') {
                const userData = {
                    id: 1,
                    username: credentials.username,
                    role: 'admin'
                };
                const token = 'demo-token'; // In real app, this would come from your backend

                login(userData, token);
                
                // Redirect to the originally attempted URL or dashboard
                const from = location.state?.from?.pathname || '/admin/dashboard';
                navigate(from, { replace: true });
            } else {
                setError('Invalid credentials');
            }
        } catch {
            setError('An error occurred during login');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-box">
                <h1>Admin Login</h1>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} className="admin-login-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login; 