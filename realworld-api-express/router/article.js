const express = require('express');
const ArticleController = require('../controller/article');
const auth = require('../middleware/header');
const articleValidator = require('../validator/article');

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
router.get('/:articleId',articleValidator.getArticle, ArticleController.getArticle)

/**
 * Create Article
 */
router.post('/', auth, articleValidator.createArticle, ArticleController.createArticle)

/**
 * Update Article
 */
router.put('/:articleId', auth,articleValidator.updateArticle, ArticleController.updateArticle)

/**
 * Delete Article
 */
router.put('/:articleId', auth,articleValidator.getArticle, ArticleController.deleteArticle)

/**
 * Add Comments to an Article
 */
router.post('/:articleId/comments', auth,articleValidator.getArticle, ArticleController.addComments)

/**
 * Get Comments from an Article
 */
router.get('/:articleId/comments',articleValidator.getArticle, ArticleController.deleteComment)

/**
 * Delete Comment
 */
router.delete('/:articleId/comments/:id', auth,articleValidator.getArticle, ArticleController.deleteComment)

/**
 * Favorite Article
 */
router.post('/:articleId/favorite', auth,articleValidator.getArticle, ArticleController.addFavoriteArticle)

/**
 * Unfavorite Article
 */
router.delete('/:articleId/favorite', auth,articleValidator.getArticle, ArticleController.unfavoriteArticle)


module.exports = router