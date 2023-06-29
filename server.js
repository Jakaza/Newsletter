const express = require('express')
const path = require("path")
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.sendFile("index.html")
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})

