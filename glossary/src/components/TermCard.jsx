import React, { useState } from 'react';

export default function TermCard({ term, isStarred, toggleStar }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`term-card cat-${term.category}`}>
      <div>
        <div className="card-header">
          <div className="term-title-wrap">
            <div className="term-name">{term.name}</div>
            <div className="term-abbr">{term.abbr}</div>
          </div>
          <button
            className={`star-btn ${isStarred ? 'starred' : ''}`}
            onClick={() => toggleStar(term.id)}
            title="Star Term"
          >
            ★
          </button>
        </div>

        <div className="term-cat-tag">{term.categoryName}</div>
        <div className="term-def">{term.definition}</div>
      </div>

      {expanded && (
        <div className="term-details">
          <h4>Beginner Friendly Deep Dive</h4>
          <div
            className="details-content"
            dangerouslySetInnerHTML={{ __html: term.details }}
          />
        </div>
      )}

      <div className="card-footer">
        <button className="toggle-details-btn" onClick={() => setExpanded(!expanded)}>
          <span>{expanded ? 'Hide Details' : 'Deep Dive & Examples'}</span>
          <span>{expanded ? '↑' : '↓'}</span>
        </button>
      </div>
    </div>
  );
}
