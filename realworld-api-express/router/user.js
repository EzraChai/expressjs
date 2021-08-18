const express = require('express');
const UserController = require('../controller/user');
const { body } = require('express-validator');
const { User } = require('../model')
const errorValidatorHandler = require('../middleware/error-validator-handler')

const router = express.Router();

/**
 * Login
 */
router.post('/users/login', UserController.login);



/**
 * User Register
 */
router.post('/users', [
    //1. 配置验证规则
    body('user.username').notEmpty().withMessage("Username cannot be null").custom(async username => {
        const user = await User.findOne({ username })
        if(user){
            return Promise.reject('Username already existed')
        }}),
    body('user.password').notEmpty().withMessage("Password cannot be null"),
    body('user.password').isLength({ min: 6 }).withMessage("Password length less than 6 characters"),
    body('user.email').notEmpty().withMessage("Email cannot be null"),
    body('user.email').isEmail().withMessage("Invalid Email").bail().custom(async email => {
        const user = await User.findOne({ email })
        if(user){
            return Promise.reject('Email already existed')
        }
    }),
    ],errorValidatorHandler(), UserController.register)//3. 通过验证，执行具体的控制器处理

/**
 * Get Current User
 */
router.get('/user', UserController.getCurrentUser)

/**
 * Update User
 */
router.put('/user', UserController.updateUser)

module.exports = router;