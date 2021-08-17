const express = require('express');
const ProfileController = require('../controller/profile')

const router = express.Router();

/**
 * Get Profile
 */
router.get('/:username', ProfileController.getProfile)

/**
 * Follow User
 */
router.post('/:username/follow', ProfileController.followUser)

/**
 * Unfollow User
 */
router.delete('/:username/follow', ProfileController.unfollowUser)



module.exports = router