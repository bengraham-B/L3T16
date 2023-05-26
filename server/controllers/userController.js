const User = require("../models/userModel")
const jwt = require('jsonwebtoken')

//^ Function to create a JWT token
const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: "3d"})
}

//^ Controller function to handle loging in the user.
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)

        //^ Creates the JWT Token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }

    catch(error){
        res.status(400).json({error: error.message})

    }
}

const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        //^ Creates the JWT Token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }

    catch(error){
        res.status(400).json({error: error.message})

    }
}

module.exports = { signupUser, loginUser }