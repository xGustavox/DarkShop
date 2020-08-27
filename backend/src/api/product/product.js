const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    type: {type: Number, required: true},
    imgPath: {type: String, required: true},
    bestSeller: {type: Boolean, required: false},
    recentViewed: {type: Boolean, required: false},
    stock: {type: Number, required: false},
    createdAt: { type: Date, default: Date.now },
})

module.exports = {
    Model: restful.model('Product', productSchema),
    Schema: productSchema
}