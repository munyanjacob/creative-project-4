const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb://localhost:27017/cookies', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const cookies = require("./cookies.js");
app.use("/api/cookies", cookies.routes);

app.listen(3002, () => console.log('Server listening on port 3002!'));