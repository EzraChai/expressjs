const express = require('express');

const router = express.Router();

/**
 * Login
 */
router.post('/users/login', async (req, res, next) => {
    try {
        // 处理请求
        res.send("USERS LOGIN")
    } catch (error) {
        next(error);
    }
})

/**
 * User Register
 */
router.post('/users', async (req, res, next) => {
    try {
        // 处理请求
        res.send("USER REGISTER")
    } catch (error) {
        next(error);
    }
})

/**
 * Get Current User
 */
router.get('/user', async (req, res, next) => {
    try {
        // 处理请求
        res.send("GET CURRENT USER")
    } catch (error) {
        next(error);
    }
})

/**
 * Update User
 */
router.put('/user', async (req, res, next) => {
    try {
        // 处理请求
        res.send("UPDATE USER")
    } catch (error) {
        next(error);
    }
})

module.exports = router;