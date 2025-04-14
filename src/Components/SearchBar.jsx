import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by name or category..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
