var userController = require('../controllers/user.controller');

module.exports =function(app){
	app.route('/getUser')
	.get(userController.getUser);

	app.route('/addUser')
	.post(userController.addUser);

	app.route('/deleteUser')
	.post(userController.deleteUser);

	app.route('/updateUser')
	.post(userController.updateUser);

	app.route('/deleteAllUser')
	.get(userController.deleteAllUser);

	app.route('/findUser')
	.post(userController.findUser);




	// ====== new users ============

	app.route('/getWpUsers')
	.get(userController.getWpUsers);

	app.route('/addWpUsers')
	.post(userController.addWpUsers);

	app.route('/deleteWpUsers')
	.post(userController.deleteWpUsers);

	app.route('/updateWpUsers')
	.post(userController.updateWpUsers);

	app.route('/deleteAllWpUsers')
	.get(userController.deleteAllWpUsers);

	app.route('/findWpUsers')
	.post(userController.findWpUsers);
};