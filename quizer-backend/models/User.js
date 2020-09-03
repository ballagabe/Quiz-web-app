const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  email: {
    type: String,
    require: true
  },
  nickname: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  points: {
    type: Number
  },
  time: {
    type: Date
  }
})

const User = mongoose.model('User', schema)
module.exports = User