const express = require('express')
const router = express.Router()
const fetch = require("node-fetch")
const check = require('../middleware/authorization')
const user = require('../models/User')
const jwt = require('jsonwebtoken')
const { decode } = require('jsonwebtoken')

// Send new question
router.post('/', check, (req, res, next) => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=' + req.query.diff + '&type=boolean')
    .then(data => data.json())
    .then(data => res.status(200).json(data))
})

// Save points
router.post('/push', check, (req, res, next) => {
    if(req.body.token){
        jwt.verify(req.body.token, 'VFkSzgrlMy6IPhI', function(err, decoded) {
            let newPoints
            user.find({ email: decoded.userData.email }, function(err, result) {
                if(err){
                    console.log(err);
                }else{
                    newPoints = 0 + result[0].points + req.body.points
                    user.updateOne({ email: decoded.userData.email }, { points: newPoints }, function(err, updateresult){
                        if(err){
                            res.status(401).send('Auth failed')
                        }else{
                            const newToken = jwt.sign({
                                userData:{
                                    email: result[0].email,
                                    nickname: result[0].nickname,
                                    points: newPoints,
                                    id: result[0]._id
                                }
                            },
                            'VFkSzgrlMy6IPhI',
                            {
                                expiresIn: '10h'
                            })
                            res.status(200).json({ push: 1, newToken: newToken })
                        }
                    })
                }
            })
        })
    }
})

module.exports = router