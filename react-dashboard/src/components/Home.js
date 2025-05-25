import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import LogoutButton from './LogoutButton';

function Home() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <Navbar />
      
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card welcome-card">
              <div className="card-body text-center py-5">
                <h1 className="card-title mb-4">¡Bienvenido a tu aplicación segura!</h1>
                {isAuthenticated && (
                  <div>
                    {user?.picture && (
                      <img 
                        src={user.picture} 
                        alt="Profile" 
                        className="rounded-circle mb-3" 
                        width="100" 
                        height="100" 
                      />
                    )}
                    <h3>Hola, {user?.name}</h3>
                    <p className="lead">{user?.email}</p>
                    <p className="mb-4">Has iniciado sesión correctamente con Auth0</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">🔒 Seguridad</h5>
                <p className="card-text">Todas las rutas están protegidas por Auth0. Solo usuarios autenticados pueden acceder.</p>
                <Link to="/profile" className="btn btn-primary">Ver Perfil</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">📊 Dashboard</h5>
                <p className="card-text">Accede a tu panel de control personalizado con información detallada.</p>
                <Link to="/dashboard" className="btn btn-success">Ir al Dashboard</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">🚪 Logout</h5>
                <p className="card-text">Cierra tu sesión de forma segura cuando hayas terminado.</p>
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;