import dealCards from './helpers/dealCards';
import shuffleArray from './helpers/shuffleArray';
import { Player } from './types';

export default ({
  troll,
  orc,
  goblin
}: {
  troll: Player;
  orc: Player;
  goblin: Player;
}) => {
  shuffleArray(goblin.deck);
  shuffleArray(orc.deck);
  shuffleArray(troll.deck);

  // Goblin deals 3 cards to each player
  dealCards(goblin.deck, troll.hand, 3);
  dealCards(goblin.deck, orc.hand, 3);
  dealCards(goblin.deck, goblin.hand, 3);
  // Orc deals 2 cards to each player
  dealCards(orc.deck, troll.hand, 2);
  dealCards(orc.deck, orc.hand, 2);
  dealCards(orc.deck, goblin.hand, 2);
  // Troll deals 1 card to each player
  dealCards(troll.deck, troll.hand, 1);
  dealCards(troll.deck, orc.hand, 1);
  dealCards(troll.deck, goblin.hand, 1);

  // Goblin gives the troll card to Troll
  // Goblin gives one orc card to the Orc and discard one orc card
  // Goblin discards one goblin card, keeps one goblin card and play one goblin card
};
