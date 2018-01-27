var mongoose = require('mongoose');

var Msg = mongoose.model('msg');
var Data = mongoose.model('data');

module.exports = {
	addMsg:function(req,res,next){
		var msg = new Msg(req.body);
		msg.save(function(err,docs){
			console.log("添加资讯成功");
			return res.json(docs);
		});
	},
	getMsg:function(req,res,next){
		Msg.find().exec(function(err,docs){
			return res.json(docs);
		});
	},
	deleteAllMsg:function(req,res,next){
		Msg.remove(function(err,docs){
			console.log('已删除所有资讯');
			return res.json(docs);
		});
	},

}