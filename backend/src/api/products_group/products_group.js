const restful = require('node-restful')
const mongoose = restful.mongoose

const productGroupSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    imgPath: {type: String, required: true},
    groupId: {type: Number, required: true},
    type: {type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
})

module.exports = {
    Model: restful.model('ProductGroup', productGroupSchema),
    Schema: productGroupSchema
}