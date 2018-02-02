var Models = require(appRoot + '/app/models/modelbootstrap');
const Sequelize = require('sequelize');

var UsersController = {};

UsersController.signup = function(req, res) {
    console.log("You are at signup page! via Users controller");
    res.send("This is the signup page renders");
};

UsersController.create = function(req, res) {
	Models.users.create({
		first_name: 'Asmat',
    	last_name: 'Ullah virk',
    	email: 'mreverak@gmail.com',
    	mobile: '+923338989937'
	}).then((result) => {
		console.log("Successfully ");
	});
	//console.log(Models);
	
    res.send("User has been created");
};

UsersController.update = function(req, res) {
	Models.users.update({
		first_name: 'Ch',
    	last_name: 'Ahmad',
    	
	},
	 { where: {id: 1} 
	}).then((result) => {
		console.log("Successfully ");
	});
	//console.log(Models);
	
    res.send("User has been updated");
};

module.exports = UsersController;

