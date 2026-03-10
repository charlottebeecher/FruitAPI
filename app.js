const express = require('express')
const fruitsApp = express()
const fruitRoutes = require('./routes/fruitRoutes')

fruitsApp.use(express.json()) //use = do this for any http method
fruitsApp.use('/fruits', fruitRoutes)

module.exports = fruitsApp