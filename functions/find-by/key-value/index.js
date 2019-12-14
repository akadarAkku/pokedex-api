// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
  let pokeArr = [];
  let filteredArr = pokeArray.filter(item => item[key] == value);
  if (filteredArr.length !== 0) {
    filteredArr.map(element => {
      let pokeObj = {};
      pokeObj.num = element.num;
      pokeObj.name = element.name;
      pokeArr.push(pokeObj);
    });
    return pokeArr;
  } else {
    return pokeArr;
  }
};

module.exports = keyValue;

