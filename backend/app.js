const express = require("express");
const authRoutes = require("./Routes/auth-routes");
const profileRoutes = require("./Routes/profile-routes");
const passportSetup = require("./Config/passport-setup");
const mongoose = require("mongoose");
require("dotenv").config();
const keys = require("./Config/keys");
const cookieSession = require("cookie-session");
const passport = require('passport')



const app = express();

// set view engine
app.set("view engine", "ejs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

//initialize passport
app.use(passport.initialize())
app.use(passport.session())



// connect to mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// set up routes
app.use("/auth", authRoutes);

app.use("/profile", profileRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home", {user: req.user});
});

app.listen(5000, () => {
  console.log("app now listening for requests on port 5000");
});
