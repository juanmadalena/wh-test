const mongoose = require('mongoose')
const TestSchema = require('./schema')

const model = mongoose.model('Test',TestSchema , 'test')

module.exports = model