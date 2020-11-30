const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();




const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});



//const flightsRouter = require("./Routes/flights");
const profileRouter = require("./Routes/profile-routes");
const hotelsRouter = require("./Routes/hotel-route")
const amadeusRouter = require("./Routes/amadeus-routes")


//app.use('/flights', flightsRouter)
app.use('/profile', profileRouter)
app.use('/amadeus', hotelsRouter)
app.use('/amadeus', amadeusRouter)

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
 