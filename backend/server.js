const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const usermodel = require('./models/Users');
const eventmodel = require('./models/Events');


const app = express();


app.use(express.json());


console.log(`${process.env.MONGO_URL}`)
mongoose.connect(`${process.env.MONGO_URL}`).catch((err) => {
    console.log(err);
})



const addEvent = async (req, res) => {
    try {
        const { name, date, description } = req.body;
        let newEvent = new eventmodel({ name, date, description });
        await newEvent.save();
        return res.status(200).send("event added");

    } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
}

const validateUser = async (req, res) => {
    try {
        const { username, password } = req.body;


    }

    catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }

}
app.post('/api/eventDetails', addEvent);

app.post('/api/userdetails', validateUser);




