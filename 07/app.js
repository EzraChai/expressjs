const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.send("Hello World!")
})

app.get(/.*fly$/,function(req,res){
    res.send('/.*fly$/')
})

app.get('/user/:id/edit',(req,res) => {
    res.status(200).json({Id : req.params.id})
})

// - .
app.get('/flights/:from-:to',(req,res) => {
    res.status(200).json({from : req.params.from , to : req.params.to})
})

app.get('/user/:userId(\\d+)',(req,res) => {
    res.status(200).json({userId : req.params.userId})
})

app.use(function(req, res,next){
    res.status(400).json({error: "Page Not Found."})
})

app.listen(4000 , ()=>{
    console.log("Server running at http://localhost:4000")
})