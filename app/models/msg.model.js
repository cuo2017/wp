var mongoose = require('mongoose');

var msgSchema = mongoose.Schema({
	num: String,
	title: String,
	type: String,
	content: String,
});

var msg = mongoose.model("msg",msgSchema);