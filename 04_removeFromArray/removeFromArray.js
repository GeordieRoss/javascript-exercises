const removeFromArray = function (array, ...args) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
