const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user_url: {
        type: String,
        required: true
    },
    short_id: {
        type: String,
        required: true
    },
    visitHistory: {
        type: [{timestamps: {type:Number}}]
    }
}, {timestamps: true})

module.exports = mongoose.model('urlModel', schema);