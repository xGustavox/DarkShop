const restful = require('node-restful')
const mongoose = restful.mongoose
const userSchema = require('./../user/user').Schema

const ui_flowSchema = new mongoose.Schema({
    user: userSchema,
    screen_id: { type: Number, require: true },
    enter_screen: { type: Date, require: true },
    leave_screen: { type: Date, require: true },
    buttons_cllicked : [],
    createdAt: { type: Date, default: Date.now },
})

module.exports = restful.model('Ui_flow', ui_flowSchema)