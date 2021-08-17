const express = require('express');

const router = express.Router();

/**
 * Get Tags
 */
 router.get('/', async (req, res, next) => {
    try {
        // 处理请求
        res.send("GET TAGS")
    } catch (error) {
        next(error);
    }
})

module.exports = router