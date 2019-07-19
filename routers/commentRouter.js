const commentRouter = require("express").Router();
const { addCommentVotes, removeComment } = require('../controllers/commentController')

commentRouter.route('/:comment_id').patch(addCommentVotes).delete(removeComment)

module.exports = commentRouter;