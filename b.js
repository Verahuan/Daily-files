console.log("i am b.js");
var foo = "foostring";
exports.foo = foo;
exports.add = function (x, y) {
    return (x + y);
};