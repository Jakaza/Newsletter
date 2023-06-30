const express = require('express')
const router = express.Router()
const { subscribe,
    updateSubscription,
    deleteSubcription,
    getAllSubcription,
    getAllSubcriptionByPreferencesTemp
} = require('../controller/subscriptionController')


router.post('/subscribe', subscribe)
router.get('/subscription', getAllSubcription)
router.get('/subscription/all', getAllSubcriptionByPreferencesTemp)
router.put('/subscription/:id', updateSubscription)
router.delete('/subscription/:id', deleteSubcription)


module.exports = router 