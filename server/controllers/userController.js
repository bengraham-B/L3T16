const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

//^ Function to create a JWT token
const createToken = (_id) => {
    return jwt.sign({_id: _id, admin: false, permissions: true}, process.env.SECRET, {expiresIn: "3d"})
}

//^ Controller function to handle loging in the user.
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)

        
        //^ Creates the JWT Token
        const token = createToken(user._id)

        //^ Getting the admin and permissions from the user object, which will be stored in the JWT.
        const admin = user.admin
        const permissions = user.permissions

        res.status(200).json({email, token, admin, permissions})
    }

    catch(error){
        res.status(400).json({error: error.message})

    }
}

const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        //^ Getting the admin and permissions from the user object, which will be stored in the JWT.
        const admin = user.admin
        const permissions = user.permissions

        //^ Creates the JWT Token
        const token = createToken(user._id)



        res.status(200).json({email, token, admin, permissions})
    }

    catch(error){
        res.status(400).json({error: error.message})

    }
}

//^ Controller which will GET all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

}
//^ Controller which will Edit all users
const editUser = async (req, res) => {
    console.log("PUT")

    const {id} = req.params
    const test = mongoose.Types.ObjectId.isValid(id)
    console.log(test)
    
    try {
        const updateUser = await User.findOneAndUpdate({_id: id}, { ...req.body})
        res.status(200).json(updateUser)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
        
    }

}


module.exports = { signupUser, loginUser, getUsers, editUser }