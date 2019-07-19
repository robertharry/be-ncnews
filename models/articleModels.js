const connection = require('../connection');

const fetchArticlesById = (article_id) => {

    return connection
        .select('articles.*')
        .from('articles')
        .count({ comment_count: 'comments' })
        .leftJoin('comments', 'articles.article_id', 'comments.article_id')
        .groupBy('articles.article_id')
        .where('articles.article_id', article_id)

}

const fetchArticleComments = (article_id, sort_by) => {
    sort_by = sort_by || 'created_at'
    return connection
        .select('comments.author', 'comments.comment_id', 'comments.votes', 'comments.created_at', 'comments.body')
        .from('comments')
        .where('comments.article_id', article_id)
        .orderBy(sort_by, 'asc')
}

const patchArticleVotes = (vote_count, article_id) => {

    return connection
        .select('articles.*')
        .from('articles')
        .where('articles.article_id', article_id)
        .increment('votes', vote_count.inc_votes)
        .returning('*')
}

const postComment = (article_id, comment_body, comment_username) => {
    
    return connection
        .insert({ article_id: article_id, body: comment_body, author: comment_username })
        .into('comments')
        .returning('*')

}

const fetchArticles = () => {
    console.log('got to fetchArticles model')
}

module.exports = { fetchArticlesById, fetchArticleComments, fetchArticles, patchArticleVotes, postComment };