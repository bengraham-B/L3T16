/*
* These routes will handle all the controllers for interactions with the User model
*/
const express = require('express')
const { signupUser, loginUser, getUsers, editUser } = require("../controllers/userController")

const router = express.Router()

router.get('/users', getUsers)

router.put('/:id', editUser)

router.post('/signup', signupUser)

router.post('/login', loginUser)


module.exports = router