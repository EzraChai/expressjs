const express = require('express');
const ArticleController = require('../controller/article');

const router = express.Router();

/**
 * Get Articles
 */
 router.get('/', ArticleController.getArticles)

/**
 * Feed Articles
 */
 router.get('/feed', ArticleController.getFeedsArticles)

/**
 * Get Article
 */
 router.get('/:slug', ArticleController.getArticle)

/**
 * Create Article
 */
 router.post('/', ArticleController.createArticle)

/**
 * Update Article
 */
 router.put('/:slug', ArticleController.updateArticle)

/**
 * Delete Article
 */
 router.put('/:slug', ArticleController.deleteArticle)

/**
 * Add Comments to an Article
 */
 router.post('/:slug/comments', ArticleController.addComments)

/**
 * Get Comments from an Article
 */
 router.get('/:slug/comments', ArticleController.deleteComment)

/**
 * Delete Comment
 */
 router.delete('/:slug/comments/:id', ArticleController.deleteComment)

/**
 * Favorite Article
 */
 router.post('/:slug/favorite', ArticleController.addFavoriteArticle)

/**
 * Unfavorite Article
 */
 router.delete('/:slug/favorite', ArticleController.unfavoriteArticle)


module.exports = router