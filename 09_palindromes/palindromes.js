const palindromes = function (palStr) {
    palStr = palStr.toLowerCase();
    let lhs = -1;
    let rhs = palStr.length;
    let isPalindrome = true;
    while (lhs < rhs) {
        do {
            lhs++;
        } while (!palStr.charAt(lhs).match(/^[0-9a-z]+$/));

        do {
            rhs--;
        } while (!palStr.charAt(rhs).match(/^[0-9a-z]+$/));

        if (lhs < rhs && palStr.charAt(lhs) != palStr.charAt(rhs)) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome
};

// Do not edit below this line
module.exports = palindromes;
