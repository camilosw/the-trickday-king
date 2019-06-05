import dealCards from '../dealCards';
import setupDeck from '../setupDeck';

test('Deal cards', () => {
  const deck1 = setupDeck('orc', [3]);
  const deck2 = setupDeck('troll', [0]);
  dealCards(deck1, deck2, 2);
  expect(deck1.length).toBe(1);
  expect(deck2.length).toBe(2);
});
