const express = require('express')

module.exports = (server) => {
    const router = express.Router()
    server.use('/api', router)

    const userService = require('./../api/user/userService')
    userService.register(router, '/user')

    const productService = require('./../api/product/productService')
    productService.register(router, '/product')

    const productsGroupService = require('./../api/products_group/productsGroupService')
    productsGroupService.register(router, '/products_group')

    const saleService = require('./../api/sale/saleService')
    saleService.register(router, '/sale')

    const ui_flowService = require('./../api/ui_flow/ui_flowService')
    ui_flowService.register(router, '/ui_flow')
}
