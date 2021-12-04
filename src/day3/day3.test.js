const fixture = require('./day3.fixture.json');
const { findTheConsumption, calculateOxygen } = require('./day3.js');
const example = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

describe('day 3', () => {
  it('should work', () => {
    const result = findTheConsumption(example);
    console.log({ result });
  });
});
describe('day 3-2', () => {
  it('should work', () => {
    const result = calculateOxygen(fixture);
    console.log({ result });
  });
});
