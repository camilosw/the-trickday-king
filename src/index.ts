import playGame from './playGame';
import setupGame from './setupGame';

// array index represent the card value
// Each value in the array represent the quantity of cards per value
const trollCards = [0, 0, 0, 0, 0, 1, 2, 2, 3, 4, 3, 2, 1];
const orcCards = [0, 0, 0, 8, 8, 4, 4, 4, 3, 3, 2];
const goblinCards = [0, 14, 10, 9, 8, 7, 6, 5, 1];

const players = setupGame(trollCards, orcCards, goblinCards);
playGame(players);
