const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR"
    }
    var stringToPrint = ""
    while (num > 0) {
        stringToPrint += string;
        num--;
    }
    return (stringToPrint)
};

// Do not edit below this line
module.exports = repeatString;