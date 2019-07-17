const connection = require('../connection');

const fetchUsersById = (input) => {

    return connection.select('*').from('users').where({ username: input })
        .then((result) => result)

}

module.exports = fetchUsersById;