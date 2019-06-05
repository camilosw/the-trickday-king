import { Card } from '../../types';
import setupDeck from '../setupDeck';

test('Setup deck', () => {
  const expectedDeck: Card[] = [
    {
      type: 'orc',
      value: 1
    },
    {
      type: 'orc',
      value: 2
    },
    {
      type: 'orc',
      value: 2
    }
  ];
  const deck = setupDeck('orc', [0, 1, 2]);
  expect(deck.length).toBe(3);
  expect(deck).toEqual(expectedDeck);
});
