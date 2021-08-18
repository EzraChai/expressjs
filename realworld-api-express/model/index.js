// getting-started.js
const mongoose = require('mongoose');
const { dbURL } = require('../config/config.default')


// 连接 MongoDB 数据库
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//当连接失败
db.on('error', (err) => {
    console.log("Mongo Database connect failure. ", err)
});

//当连接成功
db.once('open', function () {
    // we're connected!
    console.log("Connected to Mongo Database!")
});

//组织导出模块
module.exports = {
    User: mongoose.model('User',require('./user')),
    Article: mongoose.model('Article',require('./article'))
}