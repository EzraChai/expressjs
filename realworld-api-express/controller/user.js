const { User } = require('../model')
const validator = require('validator');
const jwt = require('../util/jwt');
const {jwtSecret} = require('../config/config.default');

/**
 * User Login
 */ 
 exports.login = async (req, res, next) => {
    try {
        //2. 生成 token
        const user = req.user.toJSON();
        console.log("Id",user._id);

        const token = await jwt.sign({
            userId: user._id,
        },jwtSecret,{algorithm: 'HS512'});
        console.log(token);

        delete user.password
        res.status(200).json({
            ...user,
            token
        })
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
        let user = new User(req.body.user)


        //保存到数据库
        await user.save();

        user = user.toJSON();
        delete user.password

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
        res.status(200).json({user: req.user})
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