const weakness = require("../find-by/weakness/index");
const types = require("../find-by/type/index");

const typeStats = (pokeArray, type) => {
  const countWeakness = weakness(pokeArray, type).length;
  const countType = types(pokeArray, type).length;
  return {
    typeCount: countType,
    typeName: type,
    weaknessCount: countWeakness
  };
};

module.exports = typeStats;


