import { Player } from '../types';
import setupDeck from './setupDeck';

export default (type: Player['type'], cardsPerValue: number[]): Player => {
  return {
    type,
    deck: setupDeck(type, cardsPerValue),
    discard: [],
    hand: [],
    points: 0
  };
};
