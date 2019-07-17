const fetchArticlesById = require('../models/articleModels')


const getArticlesById = (req, res, next) => {
    const { article_id } = req.params
    fetchArticlesById(article_id)
        .then((article) => {
            console.log(article)
            res.status(200).send({ article })
        })
        .catch(next)
}


module.exports = getArticlesById;