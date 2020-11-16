const express = require('express');
const authRoutes = require('./Routes/auth-routes');
const passportSetup = require('./Config/passport-setup');
const mongoose = require('mongoose');
require("dotenv").config();
//const keys = require('./config/keys');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// connect to mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(5000, () => {
    console.log('app now listening for requests on port 5000');
});