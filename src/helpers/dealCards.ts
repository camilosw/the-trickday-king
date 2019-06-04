import { Card } from '../types';

export default (from: Card[], to: Card[], number: number) => {
  to.push(...from.splice(0, number));
};
