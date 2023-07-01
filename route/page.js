const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index')
})

router.get("/update/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    res.render('preference')
})


module.exports = router 