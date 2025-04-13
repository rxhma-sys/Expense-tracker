import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}

export default SearchBar;
