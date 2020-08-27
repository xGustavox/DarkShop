const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    nickname: { type: String, required: false },
    email: { type: String, required: false },
    anonymous: { type: Boolean, required: true, default: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = {
    Model: restful.model('User', userSchema),
    Schema: userSchema
}