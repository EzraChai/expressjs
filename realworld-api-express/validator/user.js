const { body } = require('express-validator');
const validate = require('../middleware/validate')
const { User } = require('../model')



exports.register = validate([
    body('user.username').notEmpty().withMessage("Username cannot be null").custom(async username => {
        const user = await User.findOne({
            username
        })
        if (user) {
            return Promise.reject('Username already existed')
        }
    }),
    body('user.password').notEmpty().withMessage("Password cannot be null"),
    body('user.password').isLength({
        min: 6
    }).withMessage("Password length less than 6 characters"),
    body('user.email').notEmpty().withMessage("Email cannot be null"),
    body('user.email').isEmail().withMessage("Invalid Email").bail().custom(async email => {
        const user = await User.findOne({
            email
        })
        if (user) {
            return Promise.reject('Email already existed')
        }
    }),
])