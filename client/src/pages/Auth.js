import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'http://localhost/5000/financelogin' : 'http://localhost/5000/financesignup';
    try {
      const response = await axios.post(endpoint, { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/financedashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: '10px', marginBottom: '10px', fontSize: '16px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding
            : '10px', marginBottom: '10px', fontSize: '16px' }}
            />
            <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
            {isLogin ? 'Login' : 'Signup'}
            </button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} style={{ marginTop: '10px' }}>
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
            </button>
            </div>
            );
            };
            
            export default Auth;
