const countIncreased = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    const previousElement = arr[i - 1];
    const currentElement = arr[i];
    if (currentElement > previousElement) {
      counter++;
    }
  }
  return counter;
};

const compareWindows = (arr) => {
  const windows = arr.reduce(
    (acc, curr, index) =>
      [...acc, curr + arr[index + 1] + arr[index + 2]].filter(Boolean),
    [],
  );
  return countIncreased(windows);
};

module.exports = { countIncreased, compareWindows };
