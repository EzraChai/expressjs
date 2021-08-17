
/**
 * Get Articles
 */
exports.getArticles = async (req, res, next) => {
    try {
        res.send('GET ARTICLES')
    } catch (error) {
        next(error);
    }
}


/**
 * Feed Articles
 */
 exports.getFeedsArticles = async (req, res, next) => {
    try {
        res.send('GET FEEDS ARTICLES')
    } catch (error) {
        next(error);
    }
}


/**   
 * Get Article
 */
 exports.getArticle = async (req, res, next) => {
    try {
        res.send('GET ARTICLE')
    } catch (error) {
        next(error);
    }
}


/**
 * Create Article
 */
 exports.createArticle = async (req, res, next) => {
    try {
        res.send('GET ARTICLE')
    } catch (error) {
        next(error);
    }
}


/**
 * Update Article
 */
 exports.updateArticle = async (req, res, next) => {
    try {
        res.send('UPDATE ARTICLE')
    } catch (error) {
        next(error);
    }
}


/**
 * Delete Article
 */
 exports.deleteArticle = async (req, res, next) => {
    try {
        res.send('DELETE ARTICLE')
    } catch (error) {
        next(error);
    }
}


/**
 * Add Comments to an Article
 */
 exports.addComments = async (req, res, next) => {
    try {
        res.send('ADD COMMENTS TO AN ARTICLE')
    } catch (error) {
        next(error);
    }
}


/**
 * Delete Comment
 */
 exports.deleteComment = async (req, res, next) => {
    try {
        res.send('DELETE COMMENT')
    } catch (error) {
        next(error);
    }
}


/**
 * Favorite Article
 */
 exports.addFavoriteArticle = async (req, res, next) => {
    try {
        res.send('ADD FAVOURITE ARTICLE')
    } catch (error) {
        next(error);
    }
}


/**
 * Unfavorite Article
 */
 exports.unfavoriteArticle = async (req, res, next) => {
    try {
        res.send('UNFAVOURITE ARTICLE')
    } catch (error) {
        next(error);
    }
}