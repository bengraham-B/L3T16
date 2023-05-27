require('dotenv').config() //^ Setting up enviroment variables
const express = require('express')
const {cl, dateString} = require('goosefuncs') //^ npm package, the cl() is a function for console.log and dateString() prints the current dtae and time.
const cors = require('cors') //^ This module will allow for Cross Origin Resource Sharing
const mongoose = require('mongoose')

//^ Importing Routes
const reloadRoutes = require('./routes/reload.routes') //^ Routes to handle CRUD operations
const authRoutes = require('./routes/user.routes') //^ Routes to handle user AUTH
 
const app = express()

//^ Setting up middileware
app.use(cors()) //^ This module will allow for Cross Origin Resource Sharing
app.use(express.json())

//^ Setting up Routes
app.use('/api/reload', reloadRoutes)
app.use('/api/user', authRoutes)

//* Connect to MongoDB
//* Once the connection to MongoDB has been successfully established, only the will the server run.
mongoose.connect(process.env.URI, { dbName: process.env.DATABASE_NAME})
    .then(() => {
        cl("Connect to MongoDB - " + `DATABASE: ${process.env.DATABASE_NAME}`)
        app.listen(process.env.PORT, () => {
            cl(`Server running on PORT:${process.env.PORT} - ${dateString()}`)
        })
    })
