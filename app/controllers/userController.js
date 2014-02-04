var locomotive = require('locomotive')
  , Controller = locomotive.Controller
  , mongoose = require('mongoose');

var userController = new Controller();
var dbmodels = this.__app.dbmodels;

userController.create = function(){

	 var user = new dbmodels.User({ name: this.param("name"), isActive: 1 });

	 user.save(function (err) {
	  		if (err){
	  			this.render({ status: "fail" });
	  			return;
	  		}

	  		this.render({status: "success"});
		});
}

module.exports = userController;

