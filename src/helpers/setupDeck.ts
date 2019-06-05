import { Card } from '../types';

export default (type: Card['type'], cardsPerValue: number[]): Card[] => {
  return cardsPerValue.reduce((accum, cardsQuantity, index) => {
    accum.push(...Array(cardsQuantity).fill({ type, value: index }));
    return accum;
  }, []);
};
