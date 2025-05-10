const sumAll = function (int1, int2) {

    if (!(int1 === Number(int1) && int2 === Number(int2)
        && int1 > 0 && int2 > 0
        && int1 === Math.floor(int1) && int2 === Math.floor(int2))) {
        return "ERROR"
    }

    if (int1 > int2) {
        const temp = int1;
        int1 = int2;
        int2 = temp;
    }
    var sum = 0;
    for (var i = int1; i <= int2; i++) {
        sum += i;
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
