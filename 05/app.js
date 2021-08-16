const express = require('express');
const app = express();

function localDate(){
    return new Date().toUTCString() + ": "
}

// //不做任何限定
// app.use(function(req, res, next){
//     console.log(localDate(),`Method-${req.method} URL-${req.url}`);
//     next();
// })

// app.use('/user/:id', function(req, res, next){
//     console.log(localDate(),`Request Type: ${req.method}`)
//     next();
// })

//multiFunction
app.get('/user/:id', function(req, res, next){
    console.log(localDate(),`Request URL: ${req.url}`)
    next();
}, function(req, res, next){
    console.log(localDate(),`Request Type: ${req.method}`)
    next();
})

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/user/:id', (req, res) => {
    res.send(`Hello, USER_ID: ${req.params.id}`)
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})