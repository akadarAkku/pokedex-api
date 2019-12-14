const weakness = (pokeArray, type) => {
  let filteredArr = pokeArray.filter(item => item.weaknesses.includes(type));
  if (filteredArr.length === 0) {
    return [];
  } else {
    filteredArr = filteredArr.map(element => ({
      name: element.name,
      num: element.num
    }));
    return filteredArr;
  }
};

module.exports = weakness;
