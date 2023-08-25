// Actual algorithm implementation O(n) on space and time complexity
function calculateTargetPairs(numberList, targetSum) {
  const mapOfNumbers = {};
  const results = [];

  for (let i = 0; i < numberList.length; i += 1) {
    const number = numberList[i];
    const expectedPair = targetSum - number;

    if (mapOfNumbers[expectedPair]) {
      results.push([number, expectedPair]);
    }

    mapOfNumbers[number] = true;
  }

  return results;
}

module.exports = {
  calculateTargetPairs,
};
