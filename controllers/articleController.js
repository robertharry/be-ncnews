const { fetchArticlesById, fetchArticleComments, fetchArticles, patchArticleVotes, postComment } = require('../models/articleModels')


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
    const vote_count = req.body
    patchArticleVotes(vote_count, article_id)
        .then((article) => {
            // console.log(article)
            res.status(200).send({ article })
        })
        .catch(next)
}

const addCommentToArticle = (req, res, next) => {
    const { article_id } = req.params
    const comment_body = req.body.body
    const comment_username = req.body.username
    postComment(article_id, comment_body, comment_username)
        .then((comment) => {
            //console.log(comment)
            res.status(201).send({ comment })
        })
        .catch(next)
}

const getAllArticles = (req, res, next) => {
    const { sort_by, author, topic } = req.query
    //console.log(req.query)
    fetchArticles(sort_by, author, topic)
        .then((articles) => {
            console.log(articles)
            res.status(200).send({ articles })
        })
}


module.exports = { getArticlesById, getArticleComments, addVotes, addCommentToArticle, getAllArticles };