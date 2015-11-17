var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose"),
    port = process.env.PORT || 3000

//connect to database
mongoose.connect("mongodb://localhost/todos")

//log requests made to the app
app.use(logger("dev"))

//make json objects available in all requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//route all requests through api
app.use("/api")

//set port for server
app.listen(port, function(){
  console.log("server started on " + port)
})
