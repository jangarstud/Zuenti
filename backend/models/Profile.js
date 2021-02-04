const mongoose = require('mongoose')
const { Schema } = mongoose

const Profile = new Schema ({ 
    userName: {
        type: String,
        required: [true, "Username not found"]
    },
    profilePresentation: {
        type: String
    },
    profileImage: {
        type: String
    },
    birthday: {
        type: Date
    }
})

module.exports = mongoose.model('Profile',Profile)  