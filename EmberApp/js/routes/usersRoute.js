// users route
// Main users list, loads the list of users from the store
// no controller method for this, the route acts as a traditional controller

App.UsersRoute = Em.Route.extend({
    model: function() {
        return this.store.find('user');
    }
})