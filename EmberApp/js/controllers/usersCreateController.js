//User creation controller
// Binds to the userCreate template handles actions

App.UsersCreateController = Em.ObjectController.extend({
    actions: {
        // save action uses EmberData to submit to the rest api
        save: function() {

            // save and commit
            var newUser = App.User.createRecord(this.get('model'));
            newUser.save();

            // redirects back to users grid
            this.transitionToRoute('users');
        }
    }
});