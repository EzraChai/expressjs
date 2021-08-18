const express = require('express');
const ProfileController = require('../controller/profile')
const auth = require('../middleware/header')

const router = express.Router();

/**
 * Get Profile
 */
router.get('/:username', ProfileController.getProfile);

/**
 * Follow User
 */
router.post('/:username/follow',auth, ProfileController.followUser);

/**
 * Unfollow User
 */
router.delete('/:username/follow',auth, ProfileController.unfollowUser);



module.exports = router;