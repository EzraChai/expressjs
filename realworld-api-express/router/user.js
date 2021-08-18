const express = require('express');
const UserController = require('../controller/user');
const UserValidator = require('../validator/user');
const auth = require('../middleware/header');


const router = express.Router();

/**
 * Login
 */
router.post('/users/login',UserValidator.login, UserController.login);

/**
 * User Register
 */
router.post('/users',UserValidator.register, UserController.register)

/**
 * Get Current User
 */
router.get('/user', UserValidator.token,auth, UserController.getCurrentUser)

/**
 * Update User
 */
router.put('/user',auth, UserController.updateUser)

module.exports = router;