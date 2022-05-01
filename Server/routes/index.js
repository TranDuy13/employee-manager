const express = require('express')

const authRoute= require('./authRoute')

const scheduleRoute = require('./scheduleRoute')

const Route = express.Router()

Route.use('/auth', authRoute);

Route.use('/schedule', scheduleRoute);

module.exports= Route;