const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user_url: {
        type: String,
        required: true
    },
    shortened_url: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('model', schema);