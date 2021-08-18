const { body, header } = require('express-validator');
const validate = require('../middleware/validate')
const { User } = require('../model')
const MD5 = require('../util/md5')


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

exports.login = [
    validate([
        body('user.email').notEmpty().withMessage("Email cannot be null"),
        body('user.password').notEmpty().withMessage("Password cannot be null"),
    ]),
    validate([
        body('user.email').custom( async (email, {req}) => {
            const user = await User.findOne({email}).select(['email','password','username','bio','image']);
            if( !user ){
                return Promise.reject("User does not exist");
            }
            //将数据挂载在请求对象中，后续的中间件也可以使用
            req.user = user;
        })
    ]),
    validate([
        body('user.password').custom( async (password, {req}) => {
            console.log(req.user)
            console.log(MD5(password))
            if(MD5(password) !== req.user.password){
                return Promise.reject("Wrong password");
            }
        })
    ])
]

exports.token = validate([
    header('Authorization').notEmpty().withMessage("Authorization cannot be null")
])
