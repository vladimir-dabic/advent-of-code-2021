const findTheConsumption = (arr) => {
  const obj = arr[0].split('').reduce((acc, curr, index) => {
    acc[index] = 0;
    return acc;
  }, {});

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element.length; j++) {
      obj[j] += Number(element[j]);
    }
  }

  const { gamma, epsilon } = Object.values(obj).reduce(
    (acc, curr) => {
      const threshold = arr.length / 2;
      if (curr > threshold) {
        acc.gamma += '1';
        acc.epsilon += '0';
      } else {
        acc.epsilon += '1';
        acc.gamma += '0';
      }
      return acc;
    },
    { gamma: '', epsilon: '' },
  );
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

/* part 2 */

const calulateOxygen = (arr) => {};

module.exports = { findTheConsumption };
