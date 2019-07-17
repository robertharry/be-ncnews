const articleRouter = require("express").Router();
const getArticlesById = require('../controllers/articleController.js');

articleRouter.route('/:article_id').get(getArticlesById)

module.exports = articleRouter;