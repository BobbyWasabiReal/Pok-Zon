const mongoose = require('mongoose');

require('./categorySchema');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);