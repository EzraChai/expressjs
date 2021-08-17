const express = require('express');
const router = require('./router');
const userRouter = require('./userRoute')

const app = express();

app.use(express.json());

app.use('/demo',router)
app.use('/user',userRouter)

//在所有的中间件之后挂载错误处理中间件
app.use((err,req,res,next) => {
    console.log("Error",err);
    res.status(500).json({"error" : err.message })
})

//通常会在所有的路由之后配置 404 的内容
//请求进来从上到下依次匹配
app.use((req,res,next) => {
    res.status(404).json({"error" : "404 Not Found."})
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})