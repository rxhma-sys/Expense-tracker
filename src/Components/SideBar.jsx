import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>  Rahma's Tracker</h2>
      <ul>
        <li> Dashboard</li>
        <li> Expenses</li>
        <li> Reports</li>
        <li> Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
