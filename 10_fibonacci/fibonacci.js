const fibonacci = function (n) {

    n = parseInt(n);

    if (n < 0) {
        return "OOPS";
    }
    else if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }

    let a = 1;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = b;
        b += a;
        a = temp;

    }
    return a;

};

// Do not edit below this line
module.exports = fibonacci;
