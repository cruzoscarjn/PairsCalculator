const assert = require('assert');

const Sinon = require('sinon');

const { commandsParser } = require('../src/CommandsParser.js');
const PairsCalculator = require('../src/PairsCalculator.js');

describe('commandsParser', () => {
  const sinonSandbox = Sinon.createSandbox();

  it('Should Fail on wrong arguments number', () => {
    assert.throws(() => commandsParser([]), new Error('Unexpected number of arguments, use node app.js <commaSeparatedListOfNumbers:[]integers> <targetSum:integer>'));
  });

  it('Should Fail on wrong list argument type', () => {
    assert.throws(
      () => commandsParser(['a,1,2,3', '12']),
      new Error('Bad format for comma separated list of positive or negative numbers, use node app.js <commaSeparatedListOfNumbers:[]integers> <targetSum:integer>'),
    );

    assert.throws(
      () => commandsParser(['0.5,1,2,3', '12']),
      new Error('Bad format for comma separated list of positive or negative numbers, use node app.js <commaSeparatedListOfNumbers:[]integers> <targetSum:integer>'),
    );
  });

  it('Should Fail on wrong targetSum argument type', () => {
    assert.throws(
      () => commandsParser(['0,1,2,3', 'a']),
      new Error('Bad format for target sum positive or negative integer, use node app.js <commaSeparatedListOfNumbers:[]integers> <targetSum:integer>'),
    );

    assert.throws(
      () => commandsParser(['0,1,2,3', '12.4']),
      new Error('Bad format for target sum positive or negative integer, use node app.js <commaSeparatedListOfNumbers:[]integers> <targetSum:integer>'),
    );
  });

  it('Should return correct answer for correct arguments', () => {
    sinonSandbox.stub(PairsCalculator, 'calculateTargetPairs').returns([[12, 0], [16, -4], [7, 5]]);

    const result = commandsParser(['0,1,2,3', '12']);

    assert.deepEqual(result, [[12, 0], [16, -4], [7, 5]]);
  });
});
