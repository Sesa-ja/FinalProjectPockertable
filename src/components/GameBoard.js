import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { CardDeck } from '../classes/CardDeck';
import { PokerHandManager } from '../classes/PokerHandManager';
import Sidebar from './Sidebar';


const revealSeq = [0, 3, 4, 5]

const GameBoard = () => {
    const deck = useRef(new CardDeck());
    const [playerCards, setPlayerCards] = useState([]);
    const [communityCards, setCommunityCards] = useState(new Array(5).fill(null));
    const [revealCount, setRevealCount] = useState(0);
    // const pokerHandManager = new PokerHandManager();

    useEffect(() => {
        setPlayerCards(deck.current.getCards(2))
    }, [])

    if (playerCards.length === 0) {
        // restartGame();
    }


    const checkCards = () => {
        if (revealCount <= 3) {
            const updatedCommunityCards = [...communityCards];
            for (let i = revealSeq[revealCount]; i < revealSeq[revealCount + 1]; i++) {
                updatedCommunityCards[i] = deck.current.getCards(1)[0];
            }
            setCommunityCards(updatedCommunityCards);
            setRevealCount(revealCount + 1);
        }
    };

    if (playerCards.length === 0) {
        // restartGame();
    }
    const restartGame = () => {
        deck.current.updateNewDeck()
        setCommunityCards(new Array(5).fill(null))
        setPlayerCards(deck.current.getCards(2))
        setRevealCount(0)
    }

    return (
        <>
            <Sidebar onRestart={restartGame} onCheck={checkCards} />
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
        </>
    );
};

export default GameBoard;
