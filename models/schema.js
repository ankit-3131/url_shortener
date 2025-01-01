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
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "users"
    }
}, {timestamps: true})

module.exports = mongoose.model('urlModel', schema);