import React from 'react';

function Header({ userName, onLogout }) {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-blue-800">Expense Tracker</h1>
      <p className="text-gray-600 text-lg mt-2">
        Your mindful spending journey starts here. Watch where your money goes gently and wisely.
      </p>
      <p className="mt-4">Welcome, {userName || 'Guest'}!</p>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
}

export default Header;
