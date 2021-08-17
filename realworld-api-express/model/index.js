// getting-started.js
const mongoose = require('mongoose');
// 连接 MongoDB 数据库
mongoose.connect('mongodb+srv://ezrachai:Ysvrp4klglooGOdK@cluster0.nnxre.mongodb.net/realworld?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => {
    console.log("Mongo Database connect failure. ", err)
});
db.once('open', function () {
    // we're connected!
    console.log("Connected to Mongo Database!")
});