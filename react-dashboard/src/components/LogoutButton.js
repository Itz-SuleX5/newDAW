import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton({ className = "btn btn-outline-danger" }) {
  const { logout } = useAuth0();

  return (
    <button 
      className={className}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Cerrar Sesión
    </button>
  );
}

export default LogoutButton;