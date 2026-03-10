const express = require('express')
const cors = require('cors')
const fruitsApp = express()
const fruitRoutes = require('./routes/fruitRoutes')

fruitsApp.use(express.json()) //use = do this for any http method
fruitsApp.use('/fruits', fruitRoutes)

fruitsApp.use(cors())
fruitsApp.use(express.json())

module.exports = fruitsApp