const fixture = require('./day2.fixture.json');
const { findDepth, findDepthWithAim } = require('./day2.js');
const example = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
];

describe('day 2-1', () => {
  it('should find depth', () => {
    const result = findDepth(fixture);
    console.log({ result });
  });
});

describe('day 2-2', () => {
  it.only('should find depth with aim', () => {
    const result = findDepthWithAim(example);
    console.log({ result });
  });
});
