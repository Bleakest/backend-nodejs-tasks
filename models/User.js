const mongoose = require('mongoose')

const UserSchema = {
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    problem: {
        type: String,
        required: true,
    }
}

const User = mongoose.model('User', UserSchema)

module.exports = User