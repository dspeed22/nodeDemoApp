// user creation form route
// Loads an empter model when users/create is called
// returns the user.create template and binds the usersCreateController to the template


App.UsersCreateRoute = Em.Route.extend({
    model: function() {
        // the model for this route is a new empty Ember.Object
        return Em.Object.create({});
    },

    // in this case (the create route) the user/create template
    // associated with the usersCreateController
    renderTemplate: function() {
        this.render('user.create', {
            controller: 'usersCreate'
        });
    }
});