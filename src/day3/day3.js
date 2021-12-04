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

const makeTheObj = (arr) => {
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
  return obj;
};

const calculateOxygen = (arr) => {
  const findTheOne = (data = [], index = 0, props) => {
    if (data.length === 1) {
      return data[0];
    }
    const obj = makeTheObj(data);
    const threshold = data.length / 2;
    const value = obj[index] >= threshold ? props.a : props.b;

    const newData = data.filter((item) => item[index] === value);
    index++;
    return findTheOne(newData, index, props);
  };
  const x = findTheOne(arr, 0, { a: '1', b: '0' });
  const y = findTheOne(arr, 0, { a: '0', b: '1' });
  return parseInt(x, 2) * parseInt(y, 2);
};

module.exports = { findTheConsumption, calculateOxygen };
