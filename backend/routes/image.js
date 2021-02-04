const express = require('express')
const router = express.Router()

const Image = require('../models/Image')

router.get('/', async (req, res) => {
    const images = await Image.find()
    res.json(images)
})
router.post('/addImages', (req, res) => {
    if (req.body.imageData === null) {
        return res.status(400).json({
            success: false,
            msg: 'No image found'
        })
    } else {
        Image.findOne({
            userName: req.body.userName
        }).then(imageData => {
            if (imageData !== null) {
                imageData.images.push({
                    title: req.body.title,
                    image: JSON.stringify(req.body.imageData)
                })
                imageData.save().then( data => {
                    return res.status(201).json({
                        success: true,
                        msg: 'New image inserted',
                        imageData: data
                    })
                })
            } else {
                const newImage = new Image({
                    userName: req.body.userName,
                    images: []
                })
                newImage.images.push({
                    title: req.body.title,
                    image: JSON.stringify(req.body.imageData)
                })
                newImage.save().then( data => {
                    return res.status(201).json({
                        success: true,
                        msg: 'New image inserted',
                        imageData: data
                    })
                })
            }
        })
    }
})
router.put('/editUserName', (req, res) => {
    Image.findOne({
        userName: req.body.oldUserName
    }).then(imageData => {
        if (imageData !== null) {
            Image.findOne({
                userName: req.body.newUserName
            }).then(existUserName => {
                if (existUserName === null) {
                    imageData.userName = req.body.newUserName
                    imageData.save().then((profile) => {
                        return res.status(201).json({
                            success: true,
                            msg: 'Profile userName changed!!',
                            imageData: imageData
                        })
                    })
                } else {
                    return res.status(201).json({
                        success: false,
                        msg: 'this userName is not valid'
                    })
                }
            })
        } else {
            return res.status(201).json({
                success: false,
                msg: 'this userName is not valid'
            })
        }
    })
})
router.post('/getImages', (req, res) => {
    Image.findOne({
        userName: req.body.profileUserName
    }).then(image => {
        if (image !== null) {
            return res.status(201).json({
                success: true,
                imageData: image,
                msg: 'Loaded profile'
            })
        } else {
            return res.status(201).json({
                success: true,
                imageData: null,
                msg: 'Loaded profile'
            })
        }
    }).catch( error => {
        console.error(error)
        return res.status(400).json({
            success: false,
            msg: 'there was an error'
        })
    })
})

module.exports = router
