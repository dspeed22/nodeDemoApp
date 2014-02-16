// Main ember app routes

// index route, loads initial chart data
App.IndexRoute = Ember.Route.extend({
    model: function() {
        return App.ChartData.LoadChartData();
    }
});

// map router directly to template and View (controller created automatically)
App.Router.map(function() {

    // map the activechart route to the "ActiveChartView"
    this.route("activechart", {
        path: "/activechart"
    });

    // route directly to about page, loads about template automatically
    this.route("about");

    // add route to users list and create
    // users list will be "/users"
    // create will be "users/create"
    this.resource('users', function() {
        this.route('create');
    });
});