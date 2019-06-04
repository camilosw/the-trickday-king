import { Card } from '../types';

export default (from: Card[], to: Card[], number: number, type:Card['type']) => {
  const cards = from.filter(card => card.type === type);
  from = from.filter(card => card.type !== type);
  const splicedCards = 
  to.push(...);
};
