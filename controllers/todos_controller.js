//require todo model schema
var Todo = require("../models/todo.js")

//show all todos
function index(req,res){
  Todo.find({}, function(err, todos){
    if (err) console.log(err)
    res.json(todos)
  })
}

//add new todo
function create(req,res){
  var todo = new Todo()
  todo.name = req.body.name
  todo.starred = req.body.starred
  todo.checked = false
  todo.save(function(err){
    if (err) console.log(err)
    res.json({success: true, message: "Todo Created!"})
  })
}

//show single todo details
function show(req,res){
  Todo.findById(req.params.id, function(err, todo){
    if (err) console.log(err)
    res.json(todo)
  })
}

//update todo text
function update(req,res){
  Todo.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, starred: req.body.starred}, function (err, todo){
    if (err) console.log(err)
    res.json(todo)
  })
}

//delete todo
function destroy(req,res){
  Todo.remove({_id: req.params.id}, function (err){
    if (err) console.log(err)
    res.json({success: true, message: "Bye felicia!"})
  })
}

//export controller functions
module.exports = {
	index : index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}
