const mongoose = require('mongoose')
const { Schema } = mongoose

const Auth = new Schema ({ 
    userName: {
     type: String,
     required: [true, "Please include your user name"]
    },
    fullName: {
        type: String,
        required: [true, "Please include your full name"]
    },
    email: {
        type: String,
        required: [true, "please include your email"]
    },
    password: { 
        type: String,
        required: [true, "please include your password"]
    }
})

module.exports = mongoose.model('Auth',Auth)  