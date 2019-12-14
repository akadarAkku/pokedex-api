const assert = require("assert");

// a helper function to test if two data structures are the same
const areTheSame = (first, second) => {
  try {
    assert.deepStrictEqual(first, second);
    return true; // contain the same data
  } catch (err) {
    return false; // do not contain the same data
  }
};

const valuesForKey = (pokeArray, key) => {
  let filteredArr = pokeArray.filter(item => Object.keys(item).includes(key));
  filteredArr = filteredArr.map(element => element[key]);
  for (let i = 0; i < filteredArr.length - 1; i++) {
    for (let j = i + 1; j < filteredArr.length; j++) {
      if (areTheSame(filteredArr[i], filteredArr[j])) {
        filteredArr.splice(j, 1);
      }
    }
  }
  return filteredArr;
};

module.exports = valuesForKey;
