const connection = require('../connection');

const fetchTopics = () => {
    return connection
        .select('*').from('topics')
}

module.exports = fetchTopics;