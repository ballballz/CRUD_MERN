const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User',userSchema)

