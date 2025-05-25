import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Auth0 App</Link>
        <div className="navbar-nav ms-auto">
          {isAuthenticated && (
            <div className="d-flex align-items-center">
              {user?.picture && (
                <img 
                  src={user.picture} 
                  alt="Profile" 
                  className="profile-img me-2" 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%'
                  }}
                />
              )}
              <span className="navbar-text me-3">Hola, {user?.name}</span>
              <Link to="/profile" className="btn btn-outline-light btn-sm me-2">Perfil</Link>
              <Link to="/dashboard" className="btn btn-outline-light btn-sm me-2">Dashboard</Link>
              <button 
                className="btn btn-outline-danger btn-sm"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;