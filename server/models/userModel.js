//^ This the MongoDB which will be used to handle user in MongoDB
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    //^ when users sign up their admin status is set to default.
    admin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }
})

//? Static Methods to signup users.
userSchema.statics.login = async function(email, password){

    //^ Throws an error if the user has failed to enter an email, password or both when logining
    if(!email || !password){
        //^ If the user did not enter an email or password
        throw Error("Please ensure that all fields are filled.")
    }

    //^ Checks if the user is registered and if not it will throw an error.
    const user = await this.findOne({ email })
    if(!user){
        throw Error("Email not registered")
    }

    //^Matches the user inputted password to the hashed one in the DB
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error("Inncorect Password")
    }

    return user //^ If the user's email is registered it will be returned, which will then be used to authenicate the user with JWT

}




//& Static Method to Log user in.
userSchema.statics.signup = async function(email, password){

     //^ Throws an error if the user has failed to enter an email, password or both when logining
     if(!email || !password){
        //^ If the user did not enter an email
        if(!email){
            throw Error("Please Enter an email address")
        }

        //^ If the user did not enter an password
        else if(!password){
            throw Error("Please Enter a password")
        }

        //^ If the user did not enter an email or password
        else {
            throw Error("Please enter an email and password")
        }
    }

    //^ Checks if the user is registered and will throw an Error
    const exists = await this.findOne({ email })

    if(exists){
        throw Error("Email is already registered")
    }

    //^ Genterates Salt and Hash to encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    //^ Storing the new user in the DB with their email hashed password
    const user = await this.create({ email: email, password: hash})

    return user //^ If the user's email is registered it will be returned, which will then be used to authenicate the user with JWT
}







module.exports = mongoose.model("user", userSchema)