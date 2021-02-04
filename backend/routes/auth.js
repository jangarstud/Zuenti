const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const key = 'mysecret'

const Auth = require('../models/Auth')

router.get('/', async (req, res) => {
  const auths = await Auth.find()
  res.json(auths)
})

router.post('/register', async (req, res) => {
  var tmp = false
  var tmp2 = false
  var tmp3 = false
  let { userName, fullName, email, password, repeatPassword } = req.body

  if (password !== repeatPassword) {
    return res.status(400).json({
      success: false,
      msg: 'Password do not match.'
    })
  } else tmp = true
  // Check for the unique Username
  Auth.findOne({
    userName: userName
  })
    .then(auth => {
      if (auth) {
        return res.json(400, {
          success: false,
          msg: 'Username is already taken.'
        })
      } else {
        tmp2 = true
      }
    })
    .catch(error => {
      console.error(error)
      return res.status(400).json({
        success: false,
        msg: 'There was an error '
      })
    })
  // Check for the Unique Email
  Auth.findOne({
    email: email
  })
    .then(auth => {
      if (auth) {
        return res.status(400).json({
          success: false,
          msg: 'Email is already registred. Did you forgot your password.'
        })
      } else {
        tmp3 = true
        isReady(tmp, tmp2, tmp3, newUser, res)
      }
    })
    .catch(error => {
      console.error(error)
      return res.status(400).json({
        success: false,
        msg: 'There was an error '
      })
    })
  let newUser = new Auth({
    userName,
    fullName,
    email,
    password
  })
})

function isReady(tmp, tmp2, tmp3, newUser, res) {
  if (tmp && tmp2 && tmp3) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser
          .save()
          .then(auth => {
            return res.status(201).json({
              success: true,
              msg: 'Success!'
            })
          })
          .catch(error => {
            console.error(error)
            return res.status(400).json({
              success: false,
              msg: 'There was an error '
            })
          })
      })
    })
  }
}

router.post('/login', (req, res) => {
  Auth.findOne({
    userName: req.body.userName
  }).then(auth => {
    //existe el usuario
    if (!auth) {
      return res.status(404).json({
        msg: 'Username is not found',
        success: false
      })
    } 
    bcrypt.compare(req.body.password, auth.password).then(isMatch => {
      //este usuario ha escrito bien la contraseña
      if (isMatch) {
        const payload = {
          _id: auth._id,
          userName: auth.userName,
          email: auth.email
        }
        jwt.sign(
          payload,
          key,
          {
            expiresIn: 604800
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
              auth: auth,
              msg: 'You are logged in'
            })
          }
        )
      } else {
        return res.status(404).json({
          msg: 'Incorrect password',
          success: false
        })
      }
    })
  })
})
router.put('/modifyUserName', (req, res) => {
  Auth.findOne({
    userName: req.body.newUserName
  })
    .then(newUser => {
      if (newUser !== null) {
      } else {
        if (req.body.userName !== null && req.body.userName !== '') {
          if (req.body.newFullName !== null && req.body.newFullName !== '') {
            editFullUserName(req.body, res)
          } else {
            editUserName(req.body, res)
          }
        } else if (
          req.body.newFullName !== null &&
          req.body.newFullName !== ''
        ) {
          editFullName(req.body, res)
        }
      }
    })
    .catch(err => {
      console.error(error)
    })
})
function editFullName(req, res) {
  const id = { _id: req.userId }
  Auth.findById(id, function(err, doc) {
    if (err) console.error(err)
    doc.fullName = req.newFullName
    doc
      .save()
      .then(auth => {
        return res.status(201).json({
          success: true,
          msg: 'Full Name updated',
          auth: auth
        })
      })
      .catch(err => {
        console.error(error)
      })
  })
}
function editFullUserName(req, res) {
  const id = { _id: req.userId }
  Auth.findById(id, function(err, doc) {
    if (err) console.error(err)
    doc.fullName = req.newFullName
    doc.userName = req.userName
    doc
      .save()
      .then(auth => {
        return res.status(201).json({
          success: true,
          msg: 'Full Name and User Name updated',
          auth: auth
        })
      })
      .catch(err => {
        console.error(error)
      })
  })
}
function editUserName(req, res) {
  const id = { _id: req.userId }
  Auth.findById(id, function(err, doc) {
    if (err) console.error(err)
    doc.userName = req.userName
    doc
      .save()
      .then(auth => {
        return res.status(201).json({
          success: true,
          msg: 'User Name updated',
          auth: auth
        })
      })
      .catch(err => {
        console.error(error)
      })
  })
}
module.exports = router
