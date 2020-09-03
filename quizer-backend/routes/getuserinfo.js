const express = require('express')
const router = express.Router()
const check = require('../middleware/authorization')
const user = require('../models/User')
const jwt = require('jsonwebtoken')

// Get user's personal data
router.post('/', check, (req, res, next) => {
    if(req.body.token){
        jwt.verify(req.body.token, 'VFkSzgrlMy6IPhI', function(err, decoded) {
            user.find({}, function(err, result) {
                if(err){
                    console.log(err);
                }else{
                    let pointArray = []
                    for(re of result){
                        let obj = {name: re.nickname, points: re.points}
                        pointArray.push(obj)
                    }
                    res.status(200).json({
                        nickname: decoded.userData.nickname,
                        points: decoded.userData.points,
                        ranklist: pointArray
                    })
                }
            })
        })
    }
})

module.exports = router