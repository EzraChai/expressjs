//Router module
const express = require('express');

//1.路由实例其实相当于一个 mini Express 实例
const router = new express.Router();

//2.配置路由
router.get('/', function(req, res) {
    res.send("Hello World!")
})

//3.导出路由实例
module.exports = router;

//4.将路由集成到 Express 实例应用中