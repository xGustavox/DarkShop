const restful = require('node-restful')
const mongoose = restful.mongoose

const websiteConfigSchema = new mongoose.Schema({
    darkPatterned: {type: Boolean, required: true},
    createdAt: { type: Date, default: Date.now },
})

module.exports = {
    Model: restful.model('websiteConfigSchema', websiteConfigSchema),
    Schema: websiteConfigSchema
}