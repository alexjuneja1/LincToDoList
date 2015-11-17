var Todo = require("../models/todo.js")

function index(req,res){
  Todo.find({}, function(err, todos){
    if (err) console.log(err)
    res.json(todos)
  })
}

function create(req,res){
  var todo = new Todo()
  todo.
}
