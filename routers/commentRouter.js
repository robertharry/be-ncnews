const commentRouter = require("express").Router();
const addCommentVotes = require('../controllers/commentController')

commentRouter.route('/:comment_id').patch(addCommentVotes)

module.exports = commentRouter;