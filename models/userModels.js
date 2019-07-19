const connection = require('../connection');

const fetchUsersById = (input) => {

    return connection
        .select('*')
        .from('users')
        .where({ username: input })
        .then(user => {
            if (user.length === 0) {
                return Promise.reject(user)
            } else return user
        })

}

module.exports = fetchUsersById;