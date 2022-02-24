const express = require('express')
const temperatureRouter = require('../../main/routes')

const routes = express.Router();

routes.use('/temperature', temperatureRouter)

module.exports = routes