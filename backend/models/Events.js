const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
})

const Events = mongoose.model('Schedules', eventSchema)
Events.createIndexes()
module.exports = Events