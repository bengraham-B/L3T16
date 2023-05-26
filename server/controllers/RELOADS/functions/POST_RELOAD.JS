const Reload = require("../../../models/reloadModel")

//* API
//TODO frontend

const post_reload =  async (req, res) => {
   
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
        user_id: "123456789-TEST"
    })
    console.log(reload_post)


    res.status(200).json(reload_post)
}

module.exports = {post_reload}