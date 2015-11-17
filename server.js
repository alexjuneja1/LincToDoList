var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose"),
    port = process.env.PORT || 3000

//connect to database
mongoose.connect("mongodb://localhost/todos")
