const Reload = require("../../../models/reloadModel")

//* API
//TODO frontend

const get_all_reloads = async (req, res) => {
    const reload = await Reload.find({})

    res.status(200).json(reload)
}

module.exports = { get_all_reloads }
