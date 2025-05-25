import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar';

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Navbar />
      
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header profile-header text-center py-4" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}>
                <h2>Perfil de Usuario</h2>
              </div>
              <div className="card-body">
                {isAuthenticated && (
                  <div>
                    <div className="row">
                      <div className="col-md-4 text-center">
                        {user?.picture ? (
                          <img 
                            src={user.picture} 
                            alt="Profile Picture" 
                            className="rounded-circle mb-3" 
                            width="150" 
                            height="150" 
                          />
                        ) : (
                          <div 
                            className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center" 
                            style={{ width: '150px', height: '150px' }}
                          >
                            <i className="fas fa-user fa-4x text-white"></i>
                          </div>
                        )}
                      </div>
                      <div className="col-md-8">
                        <h3 className="mb-3">{user?.name || 'Nombre del Usuario'}</h3>
                        
                        <div className="row mb-3">
                          <div className="col-sm-4"><strong>Email:</strong></div>
                          <div className="col-sm-8">{user?.email || 'email@example.com'}</div>
                        </div>
                        
                        {user?.nickname && (
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Nickname:</strong></div>
                            <div className="col-sm-8">{user.nickname}</div>
                          </div>
                        )}
                        
                        {user?.locale && (
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Idioma:</strong></div>
                            <div className="col-sm-8">{user.locale}</div>
                          </div>
                        )}
                        
                        {user?.updated_at && (
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Última actualización:</strong></div>
                            <div className="col-sm-8">{user.updated_at}</div>
                          </div>
                        )}
                        
                        <div className="row mb-3">
                          <div className="col-sm-4"><strong>ID de Usuario:</strong></div>
                          <div className="col-sm-8">{user?.sub || 'user-id'}</div>
                        </div>
                      </div>
                    </div>
                    
                    <hr className="my-4" />
                    
                    <h4>Información Completa del Usuario</h4>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Atributo</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          {user && Object.entries(user).map(([key, value]) => (
                            <tr key={key}>
                              <td>{key}</td>
                              <td>{typeof value === 'object' ? JSON.stringify(value) : String(value)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;