const fixture = require('./day1.fixture.json');
const { countIncreased, compareWindows } = require('./day1.js');
const example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe('day 1', () => {
  it('should find increased', () => {
    const result = countIncreased(fixture);
    console.log('day 1-1 result', result);
  });
});

describe('day 1-2', () => {
  it('should find windows', () => {
    const result = compareWindows(fixture);
    console.log('day 1-2 result', result);
  });
});
