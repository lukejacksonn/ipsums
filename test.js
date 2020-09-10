import ipsum from './index.min.js';

const cases = {
  1: ipsum(1).split(' ').length === 1,
  10: ipsum(10).split(' ').length === 10,
};

console.log(ipsum(1));
console.log(ipsum(10));

console.log(cases);
