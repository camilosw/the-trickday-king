import setupPlayer from './helpers/setupPlayer';

export default (
  trollCards: number[],
  orcCards: number[],
  goblinCards: number[]
) => {
  return {
    troll: setupPlayer('troll', trollCards),
    orc: setupPlayer('orc', orcCards),
    goblin: setupPlayer('goblin', goblinCards)
  };
};
