module.exports = function reverse(n) {
    n = n.toString().split("").reverse().splice(",").join("");
    return +n;
};
