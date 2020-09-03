const express = require('express')
const router = express.Router()
const user = require('../models/User')

// Create new user
router.post('/', function (req, res, next) {
    const newUser = new user({
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
        points: 0,
        time: Date.now()
    })
    newUser
    .save()
    .then(result => {
        res.status(201).json({signUp: true})
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

module.exports = router