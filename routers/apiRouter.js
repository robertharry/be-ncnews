const apiRouter = require("express").Router();
const topicRouter = require('../routers/topicRouter')

apiRouter.use('/topics', topicRouter);


module.exports = apiRouter;