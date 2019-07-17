const connection = require('../connection');

const fetchArticlesById = (input) => {

    return connection
        .select('articles.*')
        //.count({ comment_count: 'comments.article_id' })
        .from('articles')
        //.leftJoin('comments', 'articles.article_id', 'comments.article_id')
        // .groupBy('articles.article_id')
        .where({ article_id: input })
        .then((result) => result)

}

module.exports = fetchArticlesById;