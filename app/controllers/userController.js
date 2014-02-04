var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    mongoose = require('mongoose'),
    UserModel = mongoose.model('User');

var userController = new Controller();


userController.create = function() {

    var context = this;

    try {

        var user = new UserModel({
            name: this.param("name"),
            isActive: 1
        });

        user.save(function(err) {
            if (err) {
                context.res.json({
                    status: "fail",
                    error: err.message
                });
                return;
            } else {

                context.res.json({
                    status: "success"
                });
            }
        });
    } catch (error) {
        context.res.json({
            status: "fail",
            error: error.message
        });
    }
}

userController.list = function() {
    var context = this;

    try {

        var results = [];
        var usersResults = UserModel.find({},
            function(err, items) {

                if (err) {
                    context.res.json({
                        status: "fail",
                        error: err.message
                    });
                    return;
                }

                items.forEach(function(item) {

                    results.push({
                        name: item.name,
                        active: item.isActive
                    });
                });

                context.res.json(results);
            });

    } catch (error) {
        context.res.json({
            status: "fail",
            error: error.message
        });
    }
}

module.exports = userController;