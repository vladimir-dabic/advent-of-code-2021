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
  const newArr = arr.map((item, index) => {
    return item + arr[index + 1] + arr[index + 2];
  });
  console.log({ newArr });
  // for (let i = 0; i < arr.length; i++) {
  // if (arr[i+3] && )
  // }
};

module.exports = { countIncreased };
