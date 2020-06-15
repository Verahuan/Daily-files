//alert("我是index.js")
//求菲波那切数列的前20个数字, 并且放在数组中.
//菲波那切数列数列第一个数字是1, 第二个数字也是1, 第三项是前两项的和
var fb = new Array();
fb[0] = 1;
fb[1] = 1;
for (var i = 2; i < 20; i++) {
    fb[i] = fb[i - 1] + fb[i - 2];
};
console.log(fb);
for (let j = fb.length; j > 0; j--) {
    fb[j] = fb[j - 1];
};
fb[0] = 0;
console.log(fb);
for (let j = 0; j < fb.length; j++) {
    fb[j] = fb[j + 1];
}
fb.splice(5, 3);
//;
//;s
//fb.unshift(-1, -2);
//fb.push(56789, 123456);
//fb.shift();
//fb.pop();
console.log(fb);
var fa = ["a", "bf", "f", "g", { name: "em",age:265}];
var fc = fa+ fb;
console.log(fa[4].name);