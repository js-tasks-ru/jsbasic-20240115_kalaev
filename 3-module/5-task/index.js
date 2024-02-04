let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let numbers = str.split(' ').filter(num => +num);
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return{ min, max};
}

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
