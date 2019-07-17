const apiRouter = require("express").Router();
const topicRouter = require('../routers/topicRouter')
const userRouter = require('../routers/userRouter')
const articleRouter = require('../routers/articleRouter')

apiRouter.use('/topics', topicRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/articles', articleRouter)


module.exports = apiRouter;