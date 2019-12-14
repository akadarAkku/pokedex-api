// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {
  if (value === "null") {
    value = JSON.parse(value);
  }
  let expectedArray = [];
  let result = pokeArray.filter(
    item =>
      Object.values(item).includes(value) ||
      Object.values(item).includes(Number(value))
  );

  if (result.length === 0) {
    return expectedArray;
  } else {
    result.map(element => {
      let pokeObj = {};
      pokeObj.name = element.name;
      pokeObj.num = element.num;
      expectedArray.push(pokeObj);
    });
    return expectedArray;
  }
};

module.exports = value;
