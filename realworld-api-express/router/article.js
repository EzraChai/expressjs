const express = require('express');
const ArticleController = require('../controller/article');
const auth = require('../middleware/header')

const router = express.Router();

/**
 * Get Articles
 */
router.get('/', ArticleController.getArticles)

/**
 * Feed Articles
 */
router.get('/feed', auth, ArticleController.getFeedsArticles)

/**
 * Get Article
 */
router.get('/:slug', ArticleController.getArticle)

/**
 * Create Article
 */
router.post('/', auth, ArticleController.createArticle)

/**
 * Update Article
 */
router.put('/:slug', auth, ArticleController.updateArticle)

/**
 * Delete Article
 */
router.put('/:slug', auth, ArticleController.deleteArticle)

/**
 * Add Comments to an Article
 */
router.post('/:slug/comments', auth, ArticleController.addComments)

/**
 * Get Comments from an Article
 */
router.get('/:slug/comments', ArticleController.deleteComment)

/**
 * Delete Comment
 */
router.delete('/:slug/comments/:id', auth, ArticleController.deleteComment)

/**
 * Favorite Article
 */
router.post('/:slug/favorite', auth, ArticleController.addFavoriteArticle)

/**
 * Unfavorite Article
 */
router.delete('/:slug/favorite', auth, ArticleController.unfavoriteArticle)


module.exports = router