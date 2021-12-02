const findDepth = (arr) => {
  const obj = { depth: 0, horizontal: 0 };
  const { depth, horizontal } = arr.reduce((acc, curr) => {
    const [dir, value] = curr.split(' ');
    if (dir === 'forward') {
      acc.horizontal += Number(value);
    }
    if (dir === 'down') {
      acc.depth += Number(value);
    }
    if (dir === 'up') {
      acc.depth -= Number(value);
    }
    return acc;
  }, obj);

  return depth * horizontal;
};

/* part 2 */

const findDepthWithAim = (arr) => {
  const { depth, horizontal } = arr.reduce(
    (acc, curr) => {
      const [dir, value] = curr.split(' ');
      const numValue = Number(value);
      const lookup = {
        forward: () => {
          acc.horizontal += numValue;
          acc.depth += acc.aim * numValue;
        },
        down: () => {
          acc.aim += numValue;
        },
        up: () => {
          acc.aim -= numValue;
        },
      };
      lookup[dir]();
      return acc;
    },
    { depth: 0, horizontal: 0, aim: 0 },
  );

  return depth * horizontal;
};

module.exports = { findDepth, findDepthWithAim };
