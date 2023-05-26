const Reload = require("../../../models/reloadModel")

//* API
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
app/home/handgun/components/Reload.jsx}

module.exports = {put_reload}