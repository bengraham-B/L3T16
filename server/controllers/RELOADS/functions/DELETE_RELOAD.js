const Reload = require("../../../models/reloadModel")

//* DELTE API
//TODO Frontend

const delete_reload =  async (req, res) => {
    const {id} = req.body
    console.log(id)
    const reload = await Reload.findByIdAndDelete({_id: id})

    res.status(200).json(reload)
}

module.exports = {delete_reload}