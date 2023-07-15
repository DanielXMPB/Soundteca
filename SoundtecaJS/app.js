var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
var app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(require('./src/routers/routes'))

module.exports = app;