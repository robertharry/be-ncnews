const connection = require('../connection');

const fetchUsersById = (input) => {

    return connection
        .select('*')
        .from('users')
        .where({ username: input })
        .then()

}

module.exports = fetchUsersById;