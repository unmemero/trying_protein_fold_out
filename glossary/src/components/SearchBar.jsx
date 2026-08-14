import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div class="search-box">
      <svg class="search-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <input
        type="text"
        placeholder="Search by name, abbreviation, concept, or tool (e.g. RMSD, PyMOL, Solvation, CUDA)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
