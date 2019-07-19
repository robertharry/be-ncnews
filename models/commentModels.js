const connection = require('../connection')

const patchCommentVotes = (vote_count, comment_id) => {
    console.log('inot the patch comment model')
    return connection
        .select('comments.*')
        .from('comments')
        .where('comments.comment_id', comment_id)
        .increment('votes', vote_count.inc_votes)
        .returning('*')

}

module.exports = patchCommentVotes;