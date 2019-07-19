const fetchUsersById = require('../models/userModels')

const getUsersById = (req, res, next) => {
    const { username } = req.params

    fetchUsersById(username)

        .then((user) => {
            // console.log(user)
            res.status(200).send({ user })
        })
        .catch(next)
}

module.exports = getUsersById;