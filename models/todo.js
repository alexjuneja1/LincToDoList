var mongoose = require('mongoose')

//create a user schema
var todoSchema =  new mongoose.Schema({
	name: {type: String, required: true},
	starred: Boolean,
	checked: Boolean
})

//custom methods available to each new user
todoSchema.methods.info = function(){
	console.log("I want to buy" + this.name + "from the store")
}

//create a model using mongoose.model first argument 'User' points to collection, name of model must match name of collection
var Todo = mongoose.model("To do", todoSchema)

//make this model accessible to app
module.exports = Todo
