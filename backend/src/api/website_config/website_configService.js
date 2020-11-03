const { Router } = require('express')

const websiteConfig = require('./website_config').Model

websiteConfig.methods(['get', 'post', 'put', 'delete'])
websiteConfig.updateOptions({new: true, runValidators: true})

module.exports = websiteConfig