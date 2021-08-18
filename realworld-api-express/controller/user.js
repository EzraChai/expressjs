const { User } = require('../model')
const validator = require('validator');

/**
 * User Login
 */ 
 exports.login = async (req, res, next) => {
    try {
        // 处理请求
        res.send("USER LOGIN")
    } catch (error) {
        next(error);
    }
}


/**
 * User Register
 */ 
exports.register = async (req, res, next) => {
    try {
        //1. 获取请求体数据
        console.log(req.body.user)

        //2. 数据验证
        validator

        //3. 验证通过，将数据保存到数据库
        const user = new User(req.body.user)


        //保存到数据库
        await user.save();

        //4. 发送成功响应
        res.status(201).json({
            user 
        })
    } catch (error) {
        next(error);
    }
}


/**
 * Get Current User
 */ 
exports.getCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("GET CURRENT USER")
    } catch (error) {
        next(error);
    }
}


/**
 * User Update
 */ 
 exports.updateUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("USER Update")
    } catch (error) {
        next(error);
    }
}