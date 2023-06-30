const Subscription = require('../model/subscriptionModel')

const subscribe = async (req, res) => {
    const email = req.body.email
    try {
        const subscription = await Subscription.create({
            "email": email
        })
        res.json(subscription)
    } catch (error) {
        res.json(error)
    }
    console.log(email);
}
const updateSubscription = async (req, res) => {
    const id = req.params.id
    const preferences = req.body.preferences
    try {
        const subscription = await Subscription.findOne({ _id: id });
        subscription.preferences = preferences
        await subscription.save()
        res.json(subscription)
    } catch (error) {
        res.json(error)
    }
}
const deleteSubcription = async (req, res) => {
    const id = req.params.id
    try {
        const subscription = await Subscription.findByIdAndDelete(id);
        res.json(subscription)
    } catch (error) {
        res.json(error)
    }
}
const getAllSubcription = async (req, res) => {
    try {
        const subscription = await Subscription.find();
        res.json(subscription)
    } catch (error) {
        res.json(error)
    }
}
const getAllSubcriptionByPreferencesTemp = async (req, res) => {
    const p_preferences = '4h'
    try {
        const query = {
            preferences: p_preferences
        }
        const subscription = await Subscription.find(query)
        res.json(subscription)

    } catch (error) {
        return new Error()
    }
    return []
}
// NONE HTTP CONTROLLER
const getAllSubcriptionByPreferences = async (p_preferences) => {
    try {
        const query = {
            preferences: p_preferences
        }
        const subscription = await Subscription.find(query)
        return subscription

    } catch (error) {
        return new Error()
    }
    return []
}



module.exports = {
    subscribe,
    updateSubscription,
    deleteSubcription,
    getAllSubcription,
    getAllSubcriptionByPreferences,
    getAllSubcriptionByPreferencesTemp
}




