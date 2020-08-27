const Ui_flow = require('./ui_flow')

Ui_flow.methods(['get', 'post', 'put', 'delete'])
Ui_flow.updateOptions({new: true, runValidators: true})

module.exports = Ui_flow