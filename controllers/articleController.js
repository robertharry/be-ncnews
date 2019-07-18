const { fetchArticlesById, fetchArticleComments, patchArticleVotes } = require('../models/articleModels')


const getArticlesById = (req, res, next) => {
    const { article_id } = req.params
    fetchArticlesById(article_id)
        .then((article) => {
            // console.log(article)
            res.status(200).send({ article })
        })
        .catch(next)
}

const getArticleComments = (req, res, next) => {
    const { article_id } = req.params
    const { sort_by } = req.query
    fetchArticleComments(article_id, sort_by)
        .then((article) => {
            res.status(200).send({ article })
        })
        .catch(next)
}

const addVotes = (req, res, next) => {
    const { article_id } = req.params
    const { vote_count } = req.body
    patchArticleVotes(vote_count, article_id)
        .then((article) => {
            console.log(article)
            res.status(200).send({ article })
        })
        .catch(next)
}


module.exports = { getArticlesById, getArticleComments, addVotes };