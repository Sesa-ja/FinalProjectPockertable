import React, { useState } from 'react';
import Card from './Card';
import { CardDeck } from '../classes/CardDeck';
import { PokerHandManager } from '../classes/PokerHandManager';

const GameBoard = () => {
    const [playerCards, setPlayerCards] = useState([]);
    const [communityCards, setCommunityCards] = useState(new Array(5).fill(null));
    const [revealCount, setRevealCount] = useState(0);
    const deck = new CardDeck();
    const pokerHandManager = new PokerHandManager();

    useEffect(() => {
        console.log('Player cards:', playerCards);
        console.log('Community cards:', communityCards);
    }, [playerCards, communityCards]);

    if (playerCards.length === 0) {
        restartGame();
    }
   

    const checkCards = () => {
        if (revealCount < 5) {
            const updatedCommunityCards = [...communityCards];
            for (let i = 0; i < Math.min(3, 5 - revealCount); i++) {
                updatedCommunityCards[revealCount + i] = deck.getCards(1)[0];
            }
            setCommunityCards(updatedCommunityCards);
            setRevealCount(revealCount + Math.min(3, 5 - revealCount));
        }
    };

    if (playerCards.length === 0) {
        restartGame();
    }

    return (
        <div className="game-board">
            <h2>Your Cards:</h2>
            <div className="cards">
                {playerCards.map((card, index) => (
                    <Card key={index} rank={card.rank} suit={card.suit} />
                ))}
            </div>
            <h2>Community Cards:</h2>
            <div className="cards">
                {communityCards.map((card, index) => (
                    <Card key={index} rank={card?.rank} suit={card?.suit} hidden={!card} />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;
