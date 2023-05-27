
//* =================================== Creating the Schema for reloads ===================================
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reloadSchema = new Schema({
    user_email:{ type: String, required: false},
    user_title: { type: String,required: false },

    bullet_head_make: {type: String,required: false },
    bullet_head_type: { type: String, required: false },
    bullet_weight: { type: String,required: false },
    
    powder_make: { type: String,required: false },
    powder_type: { type: String, required: false },
    powder_weight: { type: String,required: false },

    casing_make: { type: String,required: false },
    primer_make: { type: String,required: false },

    user_id:{ type: String,required: true}

}, {timestamps: true})

module.exports = mongoose.model("Reload",reloadSchema )