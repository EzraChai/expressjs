const express = require('express');

const router = express.Router();

/**
 * Get Profile
 */
router.get('/:username', async (req, res, next) => {
    try {
        res.send('GET PROFILE')
    } catch (error) {
        next(error);
    }
})

/**
 * Follow User
 */
router.post('/:username/follow', async (req, res, next) => {
    try {
        res.send('Follow User'.toUpperCase)
    } catch (error) {
        next(error);
    }
})

/**
 * Unfollow User
 */
router.delete('/:username/follow', async (req, res, next) => {
    try {
        res.send('Unfollow User'.toUpperCase)
    } catch (error) {
        next(error);
    }
})



module.exports = router