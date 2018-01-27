var msgController = require('../controllers/msg.controller');

module.exports =function(app){
	//添加MSG
	app.route('/addMsg')
	.post(msgController.addMsg);

	app.route('/getMsg')
	.get(msgController.getMsg);

	app.route('/deleteAllMsg')
	.get(msgController.deleteAllMsg);
};
