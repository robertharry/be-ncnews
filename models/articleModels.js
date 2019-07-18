const connection = require('../connection');

const fetchArticlesById = (input) => {

    return connection
        .select('articles.*')
        .from('articles')
        .count({ comment_count: 'comments' })
        .leftJoin('comments', 'articles.article_id', 'comments.article_id')
        .groupBy('articles.article_id')
        .where('articles.article_id', input)

}

module.exports = fetchArticlesById;