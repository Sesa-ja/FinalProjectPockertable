import React, { useEffect, useRef, useState } from 'react';
import { combination } from "../utils/MathFunctions"
const getReps = (cards) => {
    const ranks = cards.map(card => card.rank);
    const result = [];
    ranks.forEach((rank, index) => {
        let indexes = [];
        ranks.forEach((newRank, newIndex) => {
            if (newRank === rank && !(ranks.slice(index + 1).indexOf(rank) + 1)) {
                indexes.push(newIndex);
            }
        });
        if (indexes.length) { result.push({ rank, indexes }); }
    });
    return result.sort((a, b) => b.indexes.length - a.indexes.length);
}

const checkPairs = (cards) => {
    const reps = getReps(cards)
    return !!(reps.find(rep => rep.indexes.length >= 2))
}

const totalCards = 52
const onePairProb = (knownCards) => {
    if (checkPairs(knownCards))
        return 1;
    if (knownCards.length == 7)
        return 0
    // Step 1: Determine unknown cards
    const unknownCards = totalCards - knownCards.length;
    const remainingCardsPerRank = 4; // 4 cards of each rank in the deck
    let pairs = 0;

    // Step 2: Count occurrences of each rank in known cards
    const rankCounts = {};
    knownCards.forEach(card => {
        const rank = card.rank;
        rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    });

    // Step 3: Calculate pair probabilities based on known ranks
    let pairProbability = 0;
    Object.keys(rankCounts).forEach(rank => {
        const count = rankCounts[rank];
        const remainingOfThisRank = remainingCardsPerRank - count;

        if (count === 1) {
            // Probability of hitting a pair with 1 known card
            pairProbability += (remainingOfThisRank / unknownCards);
        } else if (count > 1) {
            // Pair already exists
            pairs++;
        }
    });

    // Step 4: Adjust probability for multiple pairs
    return pairProbability;
}


const ProbabilityTable = ({ cards }) => {
    const sortedCards = cards.filter(card => !!card)
    console.log(sortedCards);
    return <table>
        <tr>
            <th>
                One pair
            </th>
            <th>
                Two pair
            </th>
        </tr>
        <tr>
            {sortedCards?.length && onePairProb(sortedCards)}
        </tr>
    </table>
}

export default ProbabilityTable