const connection = require('../connection')

const patchCommentVotes = (vote_count, comment_id) => {

    return connection
        .select('comments.*')
        .from('comments')
        .where('comments.comment_id', comment_id)
        .increment('votes', vote_count.inc_votes)
        .returning('*')

}

const deleteCommentById = (comment_id) => {
    console.log('into delete comment model')

    return connection
        .select('comments.*')
        .from('comments')
        .where
        .del()
}
//^^^^^^^^ incomplete

module.exports = { patchCommentVotes, deleteCommentById };