const express = require('express');

const router = express.Router();

/**
 * Get Articles
 */
 router.get('/', async (req, res, next) => {
    try {
        res.send('GET ARTICLES')
    } catch (error) {
        next(error);
    }
})

/**
 * Feed Articles
 */
 router.get('/feed', async (req, res, next) => {
    try {
        res.send('FEED ARTICLES')
    } catch (error) {
        next(error);
    }
})

/**
 * Get Article
 */
 router.get('/:slug', async (req, res, next) => {
    try {
        res.send('GET ARTICLE')
    } catch (error) {
        next(error);
    }
})

/**
 * Create Article
 */
 router.post('/', async (req, res, next) => {
    try {
        res.send('CREATE ARTICLE')
    } catch (error) {
        next(error);
    }
})

/**
 * Update Article
 */
 router.put('/:slug', async (req, res, next) => {
    try {
        res.send('UPDATE ARTICLE')
    } catch (error) {
        next(error);
    }
})

/**
 * Delete Article
 */
 router.put('/:slug', async (req, res, next) => {
    try {
        res.send('DELETE ARTICLE')
    } catch (error) {
        next(error);
    }
})

/**
 * Add Comments to an Article
 */
 router.post('/:slug/comments', async (req, res, next) => {
    try {
        res.send('Add Comments to an Article'.toUpperCase)
    } catch (error) {
        next(error);
    }
})

/**
 * Get Comments from an Article
 */
 router.get('/:slug/comments', async (req, res, next) => {
    try {
        res.send('Get Comments from an Article'.toUpperCase)
    } catch (error) {
        next(error);
    }
})

/**
 * Delete Comment
 */
 router.delete('/:slug/comments/:id', async (req, res, next) => {
    try {
        res.send('Delete Comment'.toUpperCase)
    } catch (error) {
        next(error);
    }
})

/**
 * Favorite Article
 */
 router.post('/:slug/favorite', async (req, res, next) => {
    try {
        res.send('Add Comments to an Article'.toUpperCase)
    } catch (error) {
        next(error);
    }
})

/**
 * Unfavorite Article
 */
 router.delete('/:slug/favorite', async (req, res, next) => {
    try {
        res.send('Delete Comment'.toUpperCase)
    } catch (error) {
        next(error);
    }
})



module.exports = router