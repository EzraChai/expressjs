const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/config.default');
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)

// //生成 jwt
// jwt.sign({ foo: 'bar' },secretKey,{ algorithm: 'HS512' },(err,token) => {
//     if (err) {
//         return console.log("Failed to generate JWT Token",err)
        
//     }
//     console.log(token)
// })

// //验证 jwt
// const ret = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MjkyNjAyNTh9.tzeRjfk49VIQajR4DWnds6W4BpXta7wVDF3c7OAGcSg',secretKey,(err,ret)=>{
//     if (err) {
//         return console.log("Failed to verify JWT Token") 
//     }
//     console.log(ret)
// })