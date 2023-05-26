//^ All the controller functions are stored in their own file and then import into this file.
//^ These files will be exported to the reloadController.js file

const {get_all_reloads} = require("./RELOADS/functions/GET_ALL_RELOADS")
const {get_a_reload} = require("./RELOADS/functions/GET_A_RELOAD")
const {put_reload} = require("./RELOADS/functions/PUT_RELOAD")
const {post_reload} = require("./RELOADS/functions/POST_RELOAD")
const {delete_reload} = require("./RELOADS/functions/DELETE_RELOAD")

module.exports = {get_all_reloads, get_a_reload, put_reload, post_reload, delete_reload}
