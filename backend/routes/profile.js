const express = require('express')
const router = express.Router()

const Profile = require('../models/Profile')

router.get('/', async (req, res) => {
    const profiles = await Profile.find()
    res.json(profiles)
})
router.post('/editProfile', async (req, res) => {
    Profile.findOne({
        userName: req.body.userName
    }).then(profile => {
        if (profile === null) {
            let newProfile = new Profile({
                birthday: req.body.birthday,
                profileImage: req.body.image,
                userName: req.body.userName,
                profilePresentation: req.body.desc
            })
            newProfile.save().then((profile) => {
                return res.status(201).json({
                    success: true,
                    msg: 'Success!',
                    profile: profile
                })
            })
        } else {
            configureProfile(req.body, profile).save().then((profile) => {
                return res.status(201).json({
                    success: true,
                    msg: 'Profile Changed!!',
                    profile: profile
                })
            })
        }
    })
    .catch((error) => {
        console.error(error)
        return res.status(400).json({
            success: false,
            msg: 'There was an error'
        })
    })
    return
})
router.put('/editUserName', (req, res) => {
    Profile.findOne({
        userName: req.body.oldUserName
    }).then(profile => {
        if (profile !== null) {
            Profile.findOne({
                userName: req.body.newUserName
            }).then(existUserName => {
                if (existUserName === null) {
                    profile.userName = req.body.newUserName
                    profile.save().then((profile) => {
                        return res.status(201).json({
                            success: true,
                            msg: 'Profile userName changed!!',
                            profile: profile
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
router.post('/getProfile', (req, res) => {
    Profile.findOne({
        userName: req.body.profileUserName
    }).then(profile => {
        if (profile !== null) {
            return res.status(201).json({
                success: true,
                profile: profile,
                msg: 'Loaded profile'
            })
        } else {
            const emptyProfile = {
                userName: null,
                birthday: null,
                profileImage: null,
                profilePresentation: null
            }
            return res.status(201).json({
                success: true,
                profile: emptyProfile,
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

function configureProfile(newProfile, oldProfile) {
    if (newProfile.image !== oldProfile.profileImage && newProfile.image !== null) {
        oldProfile.profileImage = newProfile.image
    }
    if (newProfile.desc !== oldProfile.profilePresentation && newProfile.desc !== null) {
        oldProfile.profilePresentation = newProfile.desc
    }
    if (newProfile.birthday !== oldProfile.birthday && newProfile.birthday !== null) {
        oldProfile.birthday = newProfile.birthday
    }
    return oldProfile
}
module.exports = router
