const { Router } = require('express')

const ProductsGroup = require('./products_group').Model

ProductsGroup.methods(['get', 'post', 'put', 'delete'])
ProductsGroup.updateOptions({new: true, runValidators: true})

module.exports = ProductsGroup