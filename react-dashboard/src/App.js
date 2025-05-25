import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  // Redirección automática si la URL contiene :8080
  useEffect(() => {
    if (window.location.host.includes(':8080')) {
      const cleanUrl = window.location.href.replace(':8080', '');
      window.location.replace(cleanUrl);
    }
  }, []);

  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1>Bienvenido</h1>
          <p>Por favor, inicia sesión para acceder a la aplicación</p>
          <button 
            className="login-button"
            onClick={() => loginWithRedirect()}
          >
            Iniciar Sesión con Auth0
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;