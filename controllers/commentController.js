const patchCommentVotes = require('../models/commentModels')

const addcommentVotes = (req, res, next) => {
    const { comment_id } = req.params
    const vote_count = req.body
    patchCommentVotes(vote_count, comment_id)
        .then((comment) => {
            //console.log(comment)
            res.status(200).send({ comment })
        })
        .catch(next)
}

module.exports = addcommentVotes