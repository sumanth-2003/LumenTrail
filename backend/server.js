const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
<<<<<<< Updated upstream
const usermodel = require('./models/Users');
const eventmodel = require('./models/Events');
=======
const app = express();
const PORT = 8080 | process.env.BACKEND_PORT
>>>>>>> Stashed changes

app.use(express.json())
app.use("/api/event", require('./routes/events'))

const app = express();


app.use(express.json());


console.log(`${process.env.MONGO_URL}`)
mongoose.connect(`${process.env.MONGO_URL}`).catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.send("Home Page")
})

<<<<<<< Updated upstream

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




=======
app.listen(8080, () => {
    console.log("App running in port", PORT);
})
>>>>>>> Stashed changes
