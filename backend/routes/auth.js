const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const key = 'mysecret'

const Auth = require('../models/Auth');

router.get('/', async (req, res) => {
    const auths = await Auth.find()
    res.json(auths)
})

router.post('/register', async (req, res) => {
    var tmp = false
    var tmp2 = false
    var tmp3 = false
    let {
        userName,
        fullName,
        email,
        password,
        repeatPassword
    } = req.body

    console.log('hola')
    if (password !== repeatPassword) {
        console.log('contraseña igual')
        return res.status(400).json({
            msg: "Password do not match."
        })
    } else tmp = true
    // Check for the unique Username
    Auth.findOne({
        userName: userName
    }).then(auth => {
        if (auth) {
            console.log('usuario en la base de datos')
            return res.status(400).json({
                msg: "Username is already taken."
            });
        } else {
            tmp2 = true
        }
    })
    // Check for the Unique Email
    Auth.findOne({
        email: email
    }).then(auth => {
        if (auth) {
            return res.status(400).json({
                msg: "Email is already registred. Did you forgot your password."
            });
        } else {
            tmp3 = true
            isReady(tmp,tmp2,tmp3,newUser,res)
        }
    });
    // The data is valid and new we can register the auth
    let newUser = new Auth({
        userName,
        fullName,
        email,
        password
    });
    // Hash the password
});

function isReady(tmp, tmp2, tmp3, newUser,res) {
    console.log(tmp,tmp2,tmp3)
    if (tmp && tmp2 && tmp3) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save().then(auth => {
                    return res.status(201).json({
                        success: true,
                        msg: "Hurry! Auth is now registered."
                    });
                });
            });
        });
    }
}

router.post('/login', (req,res) => {
    console.log('hola hemos llegado al backend')
    console.log(req.body)
    Auth.findOne({
        userName: req.body.userName
    }).then(auth => {             //existe el usuario 
        console.log(auth)
        if (!auth) {
            return res.status(404).json({
                msg: "Username is not found",
                success: false
            })
        } else console.log('everything is working')    
        bcrypt.compare(req.body.password, auth.password).then(isMatch => { //este usuario ha escrito bien la contraseña
            if (isMatch) {
                console.log('todo correcto')
                const payload = {
                    _id: auth._id,
                    userName: auth.userName,
                    email: auth.email
                }
                jwt.sign(payload,key, {
                    expiresIn: 604800
                }, (err, token) => {
                    console.log(`Soy token pibe ${token} y yo soy el auth ${auth}`)
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        auth: auth,
                        msg: "You are logged in"
                    })
                })
                console.log(payload)
            } else {
                return res.status(404).json({
                    msg: "Incorrect password",
                    success: false
                })
            }
        })
    })
}) 

module.exports = router