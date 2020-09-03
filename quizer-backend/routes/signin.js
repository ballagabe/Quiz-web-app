const express = require('express')
const router = express.Router()
const user = require('../models/User')
const jwt = require('jsonwebtoken')
                
// Login
router.post('/', function (req, res, next) {
    user.find({email: req.body.email})
    .exec()
    .then(result => {
        if(result){
            if(result[0].password == req.body.password){
                const token = jwt.sign(
                    {
                        userData:{
                            email: result[0].email,
                            nickname: result[0].nickname,
                            points: result[0].points,
                            id: result[0]._id
                        }
                    },
                    'VFkSzgrlMy6IPhI',
                    {
                        expiresIn: '10h'
                    })
                res.status(200).json({
                    message: "Auth successful",
                    token: token,
                    log: 1
                  })
            }else{
                res.status(401).json({
                    message: "Auth failed",
                    log: 0
                })
            }
        }else{
            res.status(401).json({
                message: "Auth failed",
                log: 0
            })
        }
    })
    .catch(err =>{
        res.status(401).json({
            message: "Auth failed",
            log: 0
        })
    })
})

// Logout


module.exports = router