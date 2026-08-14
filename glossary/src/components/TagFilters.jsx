import React from 'react';

export default function TagFilters({ currentCat, setCurrentCat, viewMode, setViewMode }) {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'concept', label: 'Scientific Concepts' },
    { id: 'software', label: 'Software & Tools' },
    { id: 'metrics', label: 'Metrics & Formats' },
    { id: 'hardware', label: 'Hardware & CUDA' },
    { id: 'wetlab', label: 'Wet-Lab Synergy' },
    { id: 'starred', label: '⭐ Starred Only' }
  ];

  return (
    <div className="filters-wrapper">
      <div className="tag-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${currentCat === cat.id ? 'active' : ''}`}
            onClick={() => setCurrentCat(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="view-options">
        <button
          className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          Grid
        </button>
        <button
          className={`view-btn ${viewMode === 'compact' ? 'active' : ''}`}
          onClick={() => setViewMode('compact')}
        >
          Compact
        </button>
      </div>
    </div>
  );
}
