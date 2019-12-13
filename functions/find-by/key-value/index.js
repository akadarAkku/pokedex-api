// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
    let keyValueObject = pokeArray.find(item => item[key] == value);
    if (!keyValueObject) return[];
    
    const resultArrayFull = pokeArray.filter(item => item[key] == value);

    const resultArrayExpected = [];
    resultArrayFull.forEach(item => {
        resultArrayExpected.push({"num": item.num, "name": item.name})
    });
    return resultArrayExpected;
};
module.exports = keyValue;
