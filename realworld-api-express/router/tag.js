const express = require('express');
const TagController = require('../controller/tag');

const router = express.Router();

/**
 * Get Tags
 */
 router.get('/', TagController.getTags)

module.exports = router