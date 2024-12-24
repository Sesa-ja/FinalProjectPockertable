import { random } from '../utils/MathFunctions';

export class CardDeck {
  constructor() {
    this.updateNewDeck();
  }

  updateNewDeck() {
    let cards = [];
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (let suit of suits) {
      for (let rank of ranks) {
        cards.push({ rank, suit });
      }
    }
    this.deck = cards;
  }

  getCards(count = 1) {
    const cards = [];
    for (let i = 0; i < count; i++) {
      const card = this.deck.splice(random(this.deck.length), 1)[0];
      cards.push(card);
    }
    return cards;
  }
}
