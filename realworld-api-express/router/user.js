const express = require('express');
const UserController = require('../controller/user');
const UserValidator = require('../validator/user')

const router = express.Router();

/**
 * Login
 */
router.post('/users/login', UserController.login);

/**
 * User Register
 */
router.post('/users',UserValidator.register, UserController.register)

/**
 * Get Current User
 */
router.get('/user', UserController.getCurrentUser)

/**
 * Update User
 */
router.put('/user', UserController.updateUser)

module.exports = router;