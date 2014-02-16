var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    mongoose = require('mongoose'),
    // get a user model from mongoose 'User' schema
    // to use in all controller methods
    UserModel = mongoose.model('User');

// create new controller for users
var userController = new Controller();

/**
 * create a user in mongo db with mongoose
 * response is formated for ember data rest adapter
 * @returns json { user: { name: '', active: '' }} { fail" error: "message" }
 */
userController.create = function() {

    var context = this;

    try {
        var userReq = context.req.body;

        // create a new user mongoose model
        var user = new UserModel({
            name: userReq.user.name,
            isActive: 1
        });

        // save the new user, callback for sucess and error
        user.save(function(err) {
            if (err) {
                context.res.json({
                    status: "fail",
                    error: err.message
                });
                return;
            } else {

                // return json result using "this.res"
                context.res.json({
                    user: {
                        name: user.name,
                        active: user.isActive
                    }
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

/**
 * Lists all the users in the mongoDB
 * request is formated for ember data adapter. Expects Users: []
 * @returns json list of users
 */
userController.list = function() {
    var context = this;

    try {

        var results = [];

        // return all users, pass callback to handle results and error
        UserModel.find({},
            function(err, items) {

                if (err) {
                    context.res.json({
                        status: "fail",
                        error: err.message
                    });
                    return;
                }

                // add each result to to the result list
                items.forEach(function(item) {

                    results.push({
                        name: item.name,
                        active: item.isActive
                    });
                });

                // return results as json array
                context.res.json({
                    users: results
                });
            });

    } catch (error) {
        context.res.json({
            status: "fail",
            error: error.message
        });
    }
}

// expose users controller to nodejs globally (exports is really more like "expose ")
module.exports = userController;