import { Player } from '../../types';
import setupPlayer from '../setupPlayer';

test('Setup player', () => {
  const expectedPlayer: Player = {
    type: 'troll',
    deck: [
      {
        type: 'troll',
        value: 1
      },
      {
        type: 'troll',
        value: 2
      },
      {
        type: 'troll',
        value: 2
      }
    ],
    discard: [],
    hand: [],
    points: 0
  };
  const player = setupPlayer('troll', [0, 1, 2]);
  expect(player).toEqual(expectedPlayer);
});
