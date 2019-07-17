const userRouter = require("express").Router();
const getUsersById = require('../controllers/userController')

userRouter.route('/:username').get(getUsersById)

module.exports = userRouter