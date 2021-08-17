const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ErrorHandler = require('./middleware/error-handler')
require('./model')

const router = require('./router/router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//Access-Control-Allow-Origin: *
app.use(cors());

const PORT = process.env.PORT || 3000

// 挂载路由
app.use('/api/v1',router)

//挂载统一处理服务端错误中间件
app.use(ErrorHandler())

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`)
})