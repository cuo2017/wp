var mongoose = require('mongoose');


var wpusersSchema = mongoose.Schema({
	number : String,
	name : String,
	phone : String,
	password : String,
	auth: String,
	location : String,
	lng: String,
	lat: String,
		
	pepperNumber: String,
	pepperAcer: String,

	co_op: String,
	area: String,

	img: String,
	date: String,
});



var wpusers = mongoose.model("wpusers",wpusersSchema);