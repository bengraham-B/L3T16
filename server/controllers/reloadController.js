//^ All the controller functions are stored in their own file and then import into this file.
//^ These files will be exported to the reloadController.js file

// const {get_all_reloads} = require("./RELOADS/functions/GET_ALL_RELOADS")
// const {get_a_reload} = require("./RELOADS/functions/GET_A_RELOAD")
// const {put_reload} = require("./RELOADS/functions/PUT_RELOAD")
// const {post_reload} = require("./RELOADS/functions/POST_RELOAD")
// const {delete_reload} = require("./RELOADS/functions/DELETE_RELOAD")

const Reload = require("../models/reloadModel") //^ Importing the Reload Model


//* DELTE A Reload
//TODO Frontend

const delete_reload =  async (req, res) => {
    const {id} = req.body
    console.log(id)
    const reload = await Reload.findByIdAndDelete({_id: id})

    res.status(200).json(reload)
}

//* Get A Reload
//TODO frontend

const get_a_reload = async (req, res) => {
    const {id} = req.params
    console.log(id)
    console.log('id')
    const reload = await Reload.findById({_id: id})

    res.status(200).json(reload)
}

//* Get All reloads
//TODO frontend

const get_all_reloads = async (req, res) => {
    const user_id = req.user._id
    //^ Will get the reloads assigned to the user's id
    const reload = await Reload.find({user_id})

    res.status(200).json(reload)
}

//* POST a reload
//TODO frontend

const post_reload =  async (req, res) => {

    const id = req.user._id
   
    const reload_post = await Reload.create({ 
        user_title: req.body.user_title,
        bullet_head_make: req.body.bullet_head_make,
        bullet_head_type: req.body.bullet_head_type,
        bullet_weight: req.body.bullet_weight,
        
        powder_make: req.body.powder_make,
        powder_type: req.body.powder_type,
        powder_weight: req.body.powder_weight,
        
        casing_make: req.body.casing_make,
        primer_make: req.body.primer_make,
        user_id: id
    })
    console.log(reload_post)


    res.status(200).json(reload_post)
}

//* PUT a reload
//TODO frontend

const put_reload =  async (req, res) => {

    try { 
        const {id} = req.params
        console.log(id)
        const reload = await Reload.findOneAndUpdate({_id: id}, {...req.body})
        console.log(req.params)
        res.status(200).json(reload)
        console.log("UPDATE")
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {get_all_reloads, get_a_reload, put_reload, post_reload, delete_reload}
