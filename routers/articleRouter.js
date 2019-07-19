const articleRouter = require("express").Router();
const { getArticlesById, getArticleComments, addVotes, addCommentToArticle, getAllArticles } = require('../controllers/articleController.js');

articleRouter.route('/:article_id/comments').get(getArticleComments).post(addCommentToArticle)
articleRouter.route('/:article_id').get(getArticlesById).patch(addVotes)
articleRouter.route('/').get(getAllArticles)

module.exports = articleRouter;