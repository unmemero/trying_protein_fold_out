import React, { useState } from 'react';

export default function CommandCard({ cmd }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`term-card cat-${cmd.category}`}>
      <div>
        <div className="card-header">
          <div className="term-title-wrap">
            <div className="term-name">{cmd.name}</div>
          </div>
          <button className="copy-btn" onClick={handleCopy} title="Copy Command">
            {copied ? '✓ Copied' : '📋 Copy'}
          </button>
        </div>

        <div className="term-cat-tag">{cmd.categoryName}</div>
        
        <div className="command-code-box">
          <code>{cmd.command}</code>
        </div>

        <div className="term-def">{cmd.description}</div>
      </div>

      <div className="term-details" style={{ display: 'block', marginTop: '12px' }}>
        <h4>Usage Example</h4>
        <div className="example-code-box">
          <code>{cmd.example}</code>
        </div>
      </div>
    </div>
  );
}
