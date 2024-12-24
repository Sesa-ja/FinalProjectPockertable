import React from 'react';

function Card({ rank, suit, hidden }) {
  if (hidden) {
    return <div className="card hidden">🂠</div>;
  }
  return (
    <div className={`card ${(suit === '♥' || suit === '♦') && 'red'}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suit}</span>
    </div>  );
}

export default Card;