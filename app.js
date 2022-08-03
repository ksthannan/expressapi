const express = require('express')
const router = require('./src/routes/api')
const app = new express()
const mongoose = require('mongoose');

const cors = require('cors')
const hpp = require('hpp');
const helmet = require("helmet")
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
const bodyParser = require('body-parser');

const rateLimit = require('express-rate-limit')

app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

// parse application/json
app.use(bodyParser.json())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)


app.use('/api/v1', router)

// Undefined Route
app.use('*', (req, res) =>{
    res.status(404).json({
        status: "Failed",
        data: "Not Found"
    })
})



let URI = 'mongodb://127.0.0.1:27017/School';
let OPTION = {user: '', pass: ''}

mongoose.connect(URI, OPTION, (error)=>{
    console.log("Connection Success");
    console.log(error);
});









module.exports = app