const express = require('express')

//^ Importing all the Reload controller functions from the reloadController.js file
//^ The router will be exported to the reload.routes.js file.
const {get_all_reloads, get_a_reload, put_reload, post_reload, delete_reload} = require('../controllers/reloadController')

const router = express.Router()

router.get('/', get_all_reloads)

router.get('/:id', get_a_reload)

router.post('/', post_reload)

router.delete('/',delete_reload) //^ The ID property will be used to identify a reload and will be sent in the body of the code.

router.put('/:id', put_reload) //^ The ID property will be used to identify a reload and will be sent in the body of the code.

module.exports = router