import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, ArrowLeft, Mail } from 'lucide-react';
import './Dashboard.css';

const mockClients = [
  { id: 1, name: 'Ananya Sharma', email: 'ananya.s@example.com', service: 'Workplace Stress & Burnout', date: '2026-05-22', status: 'Pending' },
  { id: 2, name: 'Rahul Desai', email: 'rahul.desai99@example.com', service: 'Free 15-Minute Introductory Consultation', date: '2026-05-23', status: 'Confirmed' },
  { id: 3, name: 'Priya & Vikram', email: 'vikram.p@example.com', service: 'Couple Counseling', date: '2026-05-21', status: 'Completed' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header glass-panel">
        <div className="header-content">
          <div>
            <h1 className="dashboard-title">Prathyusha's Dashboard</h1>
            <p className="dashboard-subtitle">Manage your consultations and clients</p>
          </div>
          <Link to="/" className="btn-secondary back-btn">
            <ArrowLeft size={16} /> Back to Website
          </Link>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-stats">
          <div className="stat-card glass-panel">
            <Users size={24} className="stat-icon" />
            <div className="stat-info">
              <h3>Total Inquiries</h3>
              <p className="stat-value">24</p>
            </div>
          </div>
          <div className="stat-card glass-panel">
            <Calendar size={24} className="stat-icon" />
            <div className="stat-info">
              <h3>Upcoming Sessions</h3>
              <p className="stat-value">5</p>
            </div>
          </div>
          <div className="stat-card glass-panel">
            <Mail size={24} className="stat-icon" />
            <div className="stat-info">
              <h3>Unread Messages</h3>
              <p className="stat-value">2</p>
            </div>
          </div>
        </div>

        <div className="dashboard-table-container glass-panel">
          <h2>Recent Client Inquiries</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service Requested</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockClients.map(client => (
                <tr key={client.id}>
                  <td className="font-medium">{client.name}</td>
                  <td>{client.email}</td>
                  <td>
                    <span className="service-badge">{client.service}</span>
                  </td>
                  <td>{client.date}</td>
                  <td>
                    <span className={`status-badge ${client.status.toLowerCase()}`}>
                      {client.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
