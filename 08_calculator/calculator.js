const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  return arr.reduce((accumulator, number) => accumulator + number, 0)
};

const multiply = function (arr) {
  return arr.reduce((accumulator, number) => accumulator * number, 0)
};

const power = function (a , b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let val = 1;
  while (a > 0){
    val *= a;
    a--;
  }
  return val;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
