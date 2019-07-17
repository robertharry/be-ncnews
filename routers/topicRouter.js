const topicRouter = require("express").Router();
const getTopics = require('../controllers/topicController.js')

topicRouter.route('/').get(getTopics)

module.exports = topicRouter;