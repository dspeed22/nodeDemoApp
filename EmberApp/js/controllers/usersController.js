// users array controller
// Maintains a list of user models bound to the users template
// Essentially the controller is managing the state of the models

App.UsersController = Em.ArrayController.extend({

    // the way the controller should sort data
    sortProperties: ['name'],
    sortAscending: true, // false = descending

    // Add a property the template can access to get the total count of users
    usersCount: function() {
        return this.get('model.length');
    }.property('@each')
});