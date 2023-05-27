//^ This middile ware will check if the user is authenticated
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

//^ This function will be responsible for verifiing the JWT used throughout the application and allow them to preform CRUD operations.
const requireAuth = async (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization){
        res.status(401).json({error: "Auth token required"})
    }
    
    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({ _id })
        next()
    }

    catch(error){
        res.status(401).json({error: "request not authorised"})
    }
}

module.exports = requireAuth