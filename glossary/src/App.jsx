import React, { useState, useEffect } from 'react';
import termsData from './data/terms.json';
import commandsData from './data/commands.json';
import NavigationTabs from './components/NavigationTabs';
import SearchBar from './components/SearchBar';
import TagFilters from './components/TagFilters';
import TermCard from './components/TermCard';
import CommandCard from './components/CommandCard';

export default function App() {
  const [activeTab, setActiveTab] = useState('glossary');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCat, setCurrentCat] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [starredIds, setStarredIds] = useState(() => {
    const saved = localStorage.getItem('starred_terms');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('starred_terms', JSON.stringify(Array.from(starredIds)));
  }, [starredIds]);

  const toggleStar = (id) => {
    setStarredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filter glossary terms
  const filteredTerms = termsData.filter((term) => {
    if (currentCat === 'starred' && !starredIds.has(term.id)) return false;
    if (currentCat !== 'all' && currentCat !== 'starred' && term.category !== currentCat) return false;

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      return (
        term.name.toLowerCase().includes(q) ||
        term.abbr.toLowerCase().includes(q) ||
        term.definition.toLowerCase().includes(q) ||
        term.details.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Filter commands
  const filteredCommands = commandsData.filter((cmd) => {
    if (currentCat !== 'all' && cmd.category !== currentCat) return false;

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      return (
        cmd.name.toLowerCase().includes(q) ||
        cmd.command.toLowerCase().includes(q) ||
        cmd.description.toLowerCase().includes(q) ||
        cmd.example.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      <header className="app-header">
        <div className="badge">🧬 Protein Fold Lab</div>
        <h1>{activeTab === 'glossary' ? 'Interactive Concept Glossary' : 'Command & Execution Cheatsheet'}</h1>
        <p>
          {activeTab === 'glossary'
            ? 'Explore biological concepts, computational metrics, hardware specs, and wet-lab synergy.'
            : 'Quick-reference CLI commands for PyMOL, ChimeraX, Micromamba, OpenMM, GROMACS, and CUDA.'}
        </p>

        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>

      <div className="controls-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {activeTab === 'glossary' && (
          <TagFilters
            currentCat={currentCat}
            setCurrentCat={setCurrentCat}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        )}
      </div>

      <div className={`cards-grid ${viewMode === 'compact' ? 'compact-view' : ''}`}>
        {activeTab === 'glossary' ? (
          filteredTerms.length > 0 ? (
            filteredTerms.map((term) => (
              <TermCard
                key={term.id}
                term={term}
                isStarred={starredIds.has(term.id)}
                toggleStar={toggleStar}
              />
            ))
          ) : (
            <div className="no-results">
              <h3>No matching terms found</h3>
              <p style={{ marginTop: '8px' }}>Try searching for another keyword or tag.</p>
            </div>
          )
        ) : (
          filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <CommandCard key={cmd.id} cmd={cmd} />
            ))
          ) : (
            <div className="no-results">
              <h3>No matching commands found</h3>
              <p style={{ marginTop: '8px' }}>Try searching for a tool name (e.g. PyMOL, GROMACS, OpenMM, Micromamba).</p>
            </div>
          )
        )}
      </div>

      <footer>
        <p>Protein Folding & Molecular Dynamics Reference Hub • Standalone React App</p>
      </footer>
    </div>
  );
}
