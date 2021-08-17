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

app.listen(4000 , ()=>{
    console.log("Server running at http://localhost:4000")
})