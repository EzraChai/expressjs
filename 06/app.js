const express = require('express');
const router = require('./router');
const userRouter = require('./userRoute')

const app = express();

app.use(express.json());

app.use('/demo',router)
app.use('/user',userRouter)

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})