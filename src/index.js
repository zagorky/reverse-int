module.exports = function reverse(n) {
    n = Math.abs(n);
    n = n.toString().split("").reverse().splice(",").join("");
    return +n;
};
