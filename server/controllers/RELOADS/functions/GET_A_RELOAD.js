const Reload = require("../../../models/reloadModel")

//* API
//TODO frontend

const get_a_reload = async (req, res) => {
    const {id} = req.params
    console.log(id)
    console.log('id')
    const reload = await Reload.findById({_id: id})

    res.status(200).json(reload)
}

module.exports = {get_a_reload}