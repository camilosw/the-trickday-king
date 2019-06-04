export default (cardsPerValue: number[]) => {
  return cardsPerValue.reduce((accum, cardsQuantity, index) => {
    accum.push(Array(cardsQuantity).fill(index));
    return accum;
  }, []);
};
