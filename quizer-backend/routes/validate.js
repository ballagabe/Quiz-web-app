const express = require('express')
const router = express.Router()
const check = require('../middleware/authorization')
const user = require('../models/User')
const jwt = require('jsonwebtoken')

// Get user's personal data
router.post('/', check, (req, res, next) => {
    res.status(200).json({
        message: 'Auth successful',
        log: 1
    })
})

module.exports = router