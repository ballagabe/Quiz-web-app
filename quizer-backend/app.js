const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

// Database connection(MongoDB)
const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/quizer'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.json())
app.use(cors())

// Define routes
const signup = require('./routes/signup')
app.use('/signup', signup)

const question = require('./routes/question')
app.use('/question', question)

const signin = require('./routes/signin')
app.use('/signin', signin)

const userinfo = require('./routes/getuserinfo')
app.use('/info', userinfo)

const tokenvalidate = require('./routes/validate')
app.use('/validate', tokenvalidate)

app.listen(port, () => console.log(`127.0.0.1:${port}-on fut a webszerver!`))