const id = (pokeData, id) => {
    if (pokeData.find(element => element.id === id)) {
        return pokeData.find(element => element.id === id);
      } else {
        return {};
      }
}
module.exports = id;