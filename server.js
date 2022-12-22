const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const apiRoutes = require('./routes/api');

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server running, ya better catch it`)
})