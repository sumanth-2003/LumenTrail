const express = require('express')
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.5f4pmwb.mongodb.net/lumentrail?retryWrites=true&w=majority').catch((err) => {
    console.log(err);
})





app.post('/api/eventDetails', addEvent);





const addEvent = async (req, res) => {
    try {
        const { name, date, description } = req.body;
        let newEvent = new Schedule({ name, date, description });
        await newEvent.save();
        return res.status(200).send("event added");

    } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
}