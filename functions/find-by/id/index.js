const id = (pokeData, id) => {
  if (pokeData.find(data => data.id === id)) {
    return pokeData.find(data => data.id === id);
  } else {
    return {};
  }
};
module.exports = id;

