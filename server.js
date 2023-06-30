const express = require('express')
const path = require("path")
const router = require("./route/router")
const dbConnect = require('./config/dbConnection')
const main = require('./utils/email')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

dbConnect()

main()


app.use(express.json())
app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})

