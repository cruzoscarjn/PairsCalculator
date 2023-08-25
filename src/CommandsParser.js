const PairsCalculator = require('./PairsCalculator.js');

const helpString = 'use node app.js <commaSeparatedListOfNumbers:[]integers> <targetSum:integer>';

function validateList(listOfNumbers) {
  const isMatch = (/^(-?\d+(,-?\d+)+)?$/g).test(listOfNumbers);

  if (!isMatch) {
    throw new Error(`Bad format for comma separated list of positive or negative numbers, ${helpString}`);
  }
}

function validateTarget(targetNumber) {
  const isMatch = (/^-?\d+$/g).test(targetNumber);

  if (!isMatch) {
    throw new Error(`Bad format for target sum positive or negative integer, ${helpString}`);
  }
}

// Edge cases are evaluated on the input data pre-processing
function commandsParser(args) {
  if (args.length !== 2) {
    throw new Error(`Unexpected number of arguments, ${helpString}`);
  }

  const [stringNumberList, stringTargetSum] = args;

  validateList(stringNumberList);
  validateTarget(stringTargetSum);

  const numbersList = args[0].split(',').map((number) => Number.parseInt(number, 10));

  const targetSum = Number.parseInt(args[1], 10);

  const result = PairsCalculator.calculateTargetPairs(numbersList, targetSum);

  return result;
}

module.exports = {
  commandsParser,
};
