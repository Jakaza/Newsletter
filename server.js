const express = require('express')
const path = require("path")
const ejs = require('ejs');
const bodyParser = require('body-parser')
const router = require("./route/router")
const page = require("./route/page")
const dbConnect = require('./config/dbConnection')
const sendSubcriptionFeedback = require('./utils/email')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

dbConnect()
app.use(express.json())
app.use(bodyParser.json())

// sendSubcriptionFeedback('goodnessjakazac@gmail.com', 1015)

app.use(express.static('assets'))



app.set('view engine', 'ejs')
app.set('views', path.join('views'))

app.use(page)
app.use('/api/v1', router)


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})

