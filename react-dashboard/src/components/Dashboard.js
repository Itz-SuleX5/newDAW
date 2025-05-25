import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Dashboard() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Cargando...</div>;
  }

  const dashboardStyles = {
    body: { background: '#f8f9fb' },
    dashboardCard: { borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
    statNumber: { fontSize: '2rem', fontWeight: 'bold' },
    statCard: { minHeight: '110px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    mainContent: { marginTop: '32px' },
    welcomeSection: { marginBottom: '24px' },
    statsGrid: { display: 'flex', gap: '16px', marginBottom: '24px' },
    dashboardContainer: { background: '#fff', borderRadius: '12px', padding: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
    navbar: { background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
    navbarBrand: { fontWeight: 'bold', color: '#2563eb' }
  };

  return (
    <div style={dashboardStyles.body}>
      <nav className="navbar navbar-expand-lg navbar-light" style={dashboardStyles.navbar}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={dashboardStyles.navbarBrand}>Whiskers Wallet</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" to="/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Transacciones</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Presupuestos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Metas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Cuentas</Link></li>
          </ul>
          <span className="me-3">{user?.name || 'Usuario'}</span>
          <LogoutButton className="btn btn-outline-secondary btn-sm" />
        </div>
      </nav>
      
      <div className="container" style={dashboardStyles.mainContent}>
        <div style={dashboardStyles.statsGrid} className="mb-4">
          <div className="dashboard-card stat-card bg-light border" style={{...dashboardStyles.dashboardCard, ...dashboardStyles.statCard, flex: 1, padding: '20px'}}>
            <div>Balance Total</div>
            <div style={dashboardStyles.statNumber}>$4,580.75</div>
          </div>
          <div className="dashboard-card stat-card bg-success bg-gradient" style={{...dashboardStyles.dashboardCard, ...dashboardStyles.statCard, flex: 1, padding: '20px', color: 'white'}}>
            <div>Ingresos</div>
            <div style={dashboardStyles.statNumber}>$3,200.00</div>
          </div>
          <div className="dashboard-card stat-card bg-danger bg-gradient" style={{...dashboardStyles.dashboardCard, ...dashboardStyles.statCard, flex: 1, padding: '20px', color: 'white'}}>
            <div>Gastos</div>
            <div style={dashboardStyles.statNumber}>$2,600.00</div>
          </div>
          <div className="dashboard-card stat-card bg-info bg-gradient" style={{...dashboardStyles.dashboardCard, ...dashboardStyles.statCard, flex: 1, padding: '20px', color: 'white'}}>
            <div>Ahorros</div>
            <div style={dashboardStyles.statNumber}>$1,980.75</div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="dashboard-card p-3 mb-3" style={dashboardStyles.dashboardCard}>
              <h6>Distribución de Gastos</h6>
              <div className="mt-2 small">
                <span className="me-2" style={{color:'#ff9800'}}>■ Alimentación</span>
                <span className="me-2" style={{color:'#4caf50'}}>■ Transporte</span>
                <span className="me-2" style={{color:'#2196f3'}}>■ Servicios</span>
                <span className="me-2" style={{color:'#e91e63'}}>■ Entretenimiento</span>
                <span style={{color:'#00bcd4'}}>■ Otros</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dashboard-card p-3 mb-3" style={dashboardStyles.dashboardCard}>
              <h6>Ingresos y Gastos Mensuales</h6>
              <div className="mt-2 small">
                <span className="me-2" style={{color:'#4caf50'}}>■ Ingresos</span>
                <span style={{color:'#f44336'}}>■ Gastos</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card p-4 mb-4" style={dashboardStyles.dashboardCard}>
          <h6>Transacciones Recientes</h6>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Fecha</th>
                  <th>Categoría</th>
                  <th>Descripción</th>
                  <th>Monto</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Feb 2024</td>
                  <td>Alimentación</td>
                  <td>Supermercado Local</td>
                  <td className="text-danger">$20.50</td>
                  <td><span className="badge bg-danger">Gasto</span></td>
                </tr>
                <tr>
                  <td>14 Feb 2024</td>
                  <td>Salario</td>
                  <td>Pago Mensual</td>
                  <td className="text-success">$3000.00</td>
                  <td><span className="badge bg-success">Ingreso</span></td>
                </tr>
                <tr>
                  <td>14 Feb 2024</td>
                  <td>Transporte</td>
                  <td>Gasolina</td>
                  <td className="text-danger">$45.00</td>
                  <td><span className="badge bg-danger">Gasto</span></td>
                </tr>
                <tr>
                  <td>13 Feb 2024</td>
                  <td>Servicios</td>
                  <td>Internet</td>
                  <td className="text-danger">$60.00</td>
                  <td><span className="badge bg-danger">Gasto</span></td>
                </tr>
                <tr>
                  <td>13 Feb 2024</td>
                  <td>Freelance</td>
                  <td>Proyecto Diseño</td>
                  <td className="text-success">$500.00</td>
                  <td><span className="badge bg-success">Ingreso</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary">+ Nueva Transacción</button>
            <button className="btn btn-success">+ Añadir Presupuesto</button>
            <button className="btn btn-info">+ Nueva Meta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;