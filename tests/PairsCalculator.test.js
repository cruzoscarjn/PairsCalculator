const assert = require('assert');

const { calculateTargetPairs } = require('../src/PairsCalculator.js');

describe('calculateTargetPairs', () => {
  it('Should return correct pairs', () => {
    const numberList = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const target = 12;
    const result = calculateTargetPairs(numberList, target);

    assert.deepEqual(result, [[12, 0], [16, -4], [7, 5]]);
  });

  it('Should ignore duplicates and return correctly', () => {
    const numberList = [1, 9, 5, 5, 0, 20, -4, 5, 12, 16, 7];
    const target = 12;
    const result = calculateTargetPairs(numberList, target);

    assert.deepEqual(result, [[12, 0], [16, -4], [7, 5]]);
  });

  it('Should return correct pairs on small arrays', () => {
    const numberList = [12, 0];
    const target = 12;
    const result = calculateTargetPairs(numberList, target);

    assert.deepEqual(result, [[0, 12]]);
  });

  it('Should return empty for arrays of length 1', () => {
    const numberList = [1];
    const target = 12;
    const result = calculateTargetPairs(numberList, target);

    assert.deepEqual(result, []);
  });
});
