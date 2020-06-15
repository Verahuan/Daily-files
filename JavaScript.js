var fs = require("fs");
var http = require("http");
var sever = http.createServer();
sever.on("request", function (req, res) {
    fs.readFile("./index.html", function (err, data) {
        if (err) {
            res.setHeader("Content-Type", "text/plain;charset=utf-8");
            res.end("不好意思，读取失败，请稍后重试");
        } else {
            res.setHeader("Content-Type", "text/html;charset=utf-8");
            res.end(data)
        }
    })

});
sever.listen(80, function () {
    console.log("i am ready");
});

//console.log("i am a start");
//var b = require("./b.js");
//console.log("i am a end");
//console.log(b.add(30, 40));
//var http = require("http");
//var server = http.createServer();
//server.on("request", function (req, res) {
//    console.log("服务器on，正准备开始");

//    //res.setHeader("Content-Type", "text/plain;charset=utf-8");
// res.setHeader("Content-Type", "text/html;charset=utf-8");
//    res.write("我是一只小小的服务器，你好哇~" + req.url);
//    res.end("<a href=''>我是一个p标签</a>");

    
//});
//server.listen(80, function () {
//    console.log("sever开始执行")
//})

//var http = require("http");
//var server = http.createServer();
//server.on("request", function (request, response) {
//    console.log("requested" + request.url);
//    response.write("hello");
//    var url = request.url;
//    switch (url) {
//        case "/":
//            response.end("/");
//            break;
//        case "/index":
//            response.end("index")
//            break;
//        case "/a":
//            response.end("a")
//            break;
//        case "/b":
//            response.end("b")
//            break;
//        default:
//            response.end("尴尬，没有这个网页哦")
//            }
//});
//server.listen(80, function () {
//    console.log("i am ready");
//});