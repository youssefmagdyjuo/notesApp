// Imports
require('dotenv').config();
const express = require('express')
const app = express()
const router =require('./routes/noteRoutes')
const mongoose = require('mongoose')

//Middelwere
app.use(express.json())
app.use('/api/notes',router)
const cors = require('cors')
app.use(cors())

//connect with database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected');
        //Run server
        app.listen(5000, () => {
            console.log('server running on port 5000....');
        })
    })
    .catch((err) => {
        console.log(err);
    })
