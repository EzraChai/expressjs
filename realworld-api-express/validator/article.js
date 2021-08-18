const { body,param } = require('express-validator');
const validate = require('../middleware/validate');
const {Article} = require('../model')


exports.createArticle = validate([
    body('article.title').notEmpty().withMessage("Article's title cannot be empty"),
    body('article.description').notEmpty().withMessage("Article's description cannot be empty"),
    body('article.body').notEmpty().withMessage("Article's body cannot be empty"),
])

exports.getArticle = validate([
    validate.isValidObjectId(['params'],'articleId')
    // param('articleId').custom(async value => {
    //     if(!mongoose.isValidObjectId(value)){
    //         //同步失败
    //         return Promise.reject("Article ID is not Found")
    //     };
    //     //同步成功
    //     // return true;
    // })
])

exports.updateArticle = [validate([
    validate.isValidObjectId(['params'],'articleId'),
    body('article').notEmpty().withMessage("Request body cannot be empty")
]),
    //Make sure that the article's ID is real
    async(req,res, next) => {
        const articleId = req.params.articleId
        const article = await Article.findById(articleId)
        if (!article) {
            res.status(404).end();
        }
        req.article = article;
        next();
    },
    //Find out the author
    async(req,res, next) => {
        if(req.user.id.toString() !== req.article.author.toString()){
            res.status(403).end()
        }
        next();
    }
]
