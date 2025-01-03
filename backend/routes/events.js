const express = require('express');
const Events = require('../models/Events');
const router = express.Router()

// ROUTE 1: new event Data
router.post('/newevent', async (req, res) => {
    try {
        console.log(req.body)
        const { user, name, description, date } = req.body;
        const event = new Events({
            user, name, description, date
        })
        const savedData = await event.save();
        res.json(savedData)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error Occured");
    }
})

// ROUTE 2: fetch events
router.post('/events', async (req, res) => {
    try {
        const events = await Events.find({ user: req.body.user });
        res.json(events);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error Occured");
    }
})

module.exports = router