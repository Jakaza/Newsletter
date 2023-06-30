const mongoose = require('mongoose');

var subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    preferences: {
        type: String,
        required: true,
        default: '4h'
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    count: {
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model('Subscription', subscriptionSchema);





