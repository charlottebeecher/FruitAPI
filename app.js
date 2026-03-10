const express = require('express')
const cors = require('cors')
const fruitsApp = express()
const fruitRoutes = require('./routes/fruitRoutes')

fruitsApp.use(express.json()) //use = do this for any http method
fruitsApp.use('/fruits', fruitRoutes)

app.use(cors())
app.use(express.json())
app.use('/fruits',fruits)

module.exports = fruitsApp