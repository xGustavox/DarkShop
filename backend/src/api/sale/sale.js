const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = require('./../user/user').Schema
const productSchema = require('./../product/product').Schema

const saleSchema = new mongoose.Schema({
    user: userSchema,
    products: [productSchema],
    logistic: { type: Number, required: true },
    shipping: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = restful.model('Sale', saleSchema)