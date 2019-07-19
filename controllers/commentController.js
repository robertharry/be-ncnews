const { patchCommentVotes, deleteCommentById } = require('../models/commentModels')

const addCommentVotes = (req, res, next) => {
    const { comment_id } = req.params
    const vote_count = req.body
    patchCommentVotes(vote_count, comment_id)
        .then((comment) => {
            //console.log(comment)
            res.status(200).send({ comment })
        })
        .catch(next)
}

const removeComment = (req, res, next) => {
    console.log('remove comment controller')
    const { comment_id } = req.params
    deleteCommentById(comment_id)
        .then((comment) => {

            res.status(204).send({ comment })
        })
}

module.exports = { addCommentVotes, removeComment }