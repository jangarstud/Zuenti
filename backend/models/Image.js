const mongoose = require('mongoose')
const { Schema } = mongoose

const Image = new Schema ({ 
    userName: {
        type: String,
        required: [true, "Username not found"]
    },
    images: [{
        title: {
            type: String,
        },
        image: {
            type: String
        }
    }]
})

module.exports = mongoose.model('Image', Image)