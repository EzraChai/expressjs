const { Article, User } = require('../model')
const ParseIntUtil = require('../util/parseInt')

/**
 * Get Articles
 */
exports.getArticles = async (req, res, next) => {
    try {

        let { limit = 20, offset = 0,tag, author } = req.query;

        const filter = {};

        if(tag){
            filter.tagList = tag
        }
        
        
        if(author){
            const user = await User.findOne({ username: author })
            if(user) filter.author = user._id
        }
        
        console.log(filter)

        limit = ParseIntUtil(limit)
        offset  = ParseIntUtil(offset)

        const articlesCount = await Article.countDocuments();
        const articles = await Article
            .find(filter)
            .skip(offset) //跳过多少条
            .limit(limit) //取多少条
            .sort({
                //-1：Descending 1：Ascending
                createdAt: -1
            })
        
        res.status(200).json({articles, articlesCount })
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
        console.log(req.params)
        const article = await Article.findById(req.params.articleId).populate('author');
        if(!article) {
            return res.status(404).end();
        }
        res.status(200).json({article})
    } catch (error) {
        next(error);
    }
}


/**
 * Create Article
 */
 exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article(req.body.article)
        article.author = req.user.id;
        article.populate('author').execPopulate()
        await article.save()
        res.status(201).json({ article })
    } catch (error) {
        next(error);
    }
}


/**
 * Update Article
 */
 exports.updateArticle = async (req, res, next) => {
    try {
        const article = req.article;
        const body = req.body.article;
        article.title = body.title || article.title;
        article.description = body.description || article.description ;
        article.body = body.body || article.body;
        article.updatedAt = Date.now();
        await article.save();

        res.status(200).json({article})
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