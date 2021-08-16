const express = require('express');

const app = express();

app.get('/',(req,res) => {
    console.log("METHOD",req.method);
    console.log("URL",req.url);
    console.log("HEADERS",req.headers);
    console.log("QUERY",req.query);

    res.statusCode = 200;

    // const word = 'abc';
    // for(let i =0; i < word.length; i++) {
    //     res.write(word[i]);
    // }

    //res.end('Hello World!')
    // res.send("Hello World!")

    res.cookie('name','Chloe Gan')
    res.cookie('a',123)
    res.status(200).send({
        name: "Chloe Gan"
    })
})

app.listen(3000 , ()=>{
    console.log("Server running at http://localhost:3000")
})