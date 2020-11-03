const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/darkshop', { useNewUrlParser: true, useUnifiedTopology: true })
// module.exports = mongoose.connect('mongodb://darkshop:darkshop1213@mongo_darkshop:27017/darkshop', { useNewUrlParser: true, useUnifiedTopology: true })