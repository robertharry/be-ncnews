const articleRouter = require("express").Router();
const {getArticlesById, getArticleComments, addVotes} = require('../controllers/articleController.js');

articleRouter.route('/:article_id/comments').get(getArticleComments)
articleRouter.route('/:article_id').get(getArticlesById).patch(addVotes)

module.exports = articleRouter;