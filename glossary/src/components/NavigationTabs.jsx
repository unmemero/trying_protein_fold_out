import React from 'react';

export default function NavigationTabs({ activeTab, setActiveTab }) {
  return (
    <div className="nav-tabs-container">
      <button
        className={`nav-tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
        onClick={() => setActiveTab('glossary')}
      >
        📖 Glossary of Terms
      </button>
      <button
        className={`nav-tab-btn ${activeTab === 'commands' ? 'active' : ''}`}
        onClick={() => setActiveTab('commands')}
      >
        ⚡ Command Cheatsheet
      </button>
    </div>
  );
}
