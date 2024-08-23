const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestSchema = new Schema({
    body: { type: String, required: true },
}); 

module.exports = {
    TestSchema
}