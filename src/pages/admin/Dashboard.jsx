import { useState } from 'react';
import '../../styles/admin.css';

export const Dashboard = () => {
  const [stats] = useState({
    totalEvents: 0,
    totalProducts: 0,
    recentUpdates: []
  });

  return (
    <div className="admin-dashboard">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-number">{stats.totalEvents}</p>
        </div>
        <div className="stat-card">
          <h3>Total Products</h3>
          <p className="stat-number">{stats.totalProducts}</p>
        </div>
      </div>

      <div className="recent-updates">
        <h2>Recent Updates</h2>
        {stats.recentUpdates.length === 0 ? (
          <p>No recent updates</p>
        ) : (
          <ul>
            {stats.recentUpdates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button onClick={() => window.location.href = '/admin/events/new'}>
            Add New Event
          </button>
          <button onClick={() => window.location.href = '/admin/products/new'}>
            Add New Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 