const express = require("express");
const app = new express();
const cors = require("cors");//communication
const logger = require("morgan");//to view api call on terminal


// to pass data from frontend to backend.  use => while starting the app, use is executed
app.use(express.json());//json pair
app.use(express.urlencoded({ extended: true }));//json pair
app.use(cors());
app.use(logger("dev"));//morgan

// for env file
require ('dotenv').config();  

// mongodb
require("./middleWare/mongodb.js");


// for api calls
const api = require("./routes/api.js");
app.use("/api", api);
// BackEnd/routes/api.js
app.use('/uploads', express.static('uploads'))

// set port 
// const port = "api";
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`........port is now connected at ${port} ........`);
});