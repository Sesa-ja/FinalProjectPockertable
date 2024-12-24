import React from 'react';

function Sidebar({ onRestart, onCheck }) {
  return (
    <div className="sidebar">
      <h3>Actions</h3>
      <button onClick={onRestart} className="action-btn">Restart</button>
      <button onClick={onCheck} className="action-btn">Check</button>
    </div>
  );
}

export default Sidebar;