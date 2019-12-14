const type = (pokeArray, type) => {
  let filteredArr = pokeArray.filter(item => item.type.includes(type));
  filteredArr = filteredArr.map(element => ({
    name: element.name,
    num: element.num
  }));
  return filteredArr;
};

module.exports = type;

