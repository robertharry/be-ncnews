const apiRouter = require("express").Router();
const topicRouter = require('../routers/topicRouter')
const userRouter = require('../routers/userRouter')
const articleRouter = require('../routers/articleRouter')
const commentRouter = require('../routers/commentRouter')

apiRouter.use('/topics', topicRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/articles', articleRouter);
apiRouter.use('/comments', commentRouter)


module.exports = apiRouter;