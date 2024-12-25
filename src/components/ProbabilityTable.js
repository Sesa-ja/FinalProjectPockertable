import React, { useEffect, useRef, useState } from 'react';
import { c } from "../utils/MathFunctions"
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

const checkOnePair = (cards) => {
    const reps = getReps(cards)
    return !!(reps.find(rep => rep.indexes.length >= 2))
}
const checkTwoPair = (cards) => {
    const reps = getReps(cards)
    const pairs = reps.filter(rep => rep.indexes.length >= 2)
    return pairs.length >= 2
}


const onePairProb = (knownCards) => {
    if (checkOnePair(knownCards))
        return 1;
    if (knownCards.length == 7)
        return 0
    const total = c(52 - knownCards.length, 7 - knownCards.length)
    const pairProbability = 1 - c(13 - knownCards.length, 7 - knownCards.length) * (c(4, 1) ** (7 - knownCards.length)) / total
    // Step 4: Adjust probability for multiple pairs
    return pairProbability;
}

const twoPairProb = (knownCards) => {
    if (checkTwoPair(knownCards))
        return 1
    if (knownCards.length == 7)
        return 0

    const total = c(52 - knownCards.length, 7 - knownCards.length)
    const case1 = c(13 - knownCards.length, 2) * c(4, 2, 2) * c(13 - knownCards.length - 2, 1) * c(4, 1)
    // const case2 = c(12, 1) * c(3, 1) * c(11, 1) * c(4, 2) * c(10, 2) * c(4, 1, 2)
    // const case3 = c(13, 2) * c(3, 1, 2) * c(11, 3) * c(4, 1, 3)
    return (case1) / total
}


const ProbabilityTable = ({ cards }) => {
    const sortedCards = cards.filter(card => !!card)
    return <table>
        <tr>
            <th>
                One pair
            </th>
        </tr>
        <tr>
            {sortedCards?.length && onePairProb(sortedCards)}
        </tr>
    </table>
}

export default ProbabilityTable