export interface Player {
  type: 'troll' | 'orc' | 'goblin';
  deck: Card[];
  hand: Card[];
  discard: Card[];
  points: number;
}

export interface Card extends Pick<Player, 'type'> {
  value: number;
}
