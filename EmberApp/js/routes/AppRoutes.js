// Main ember app routes

// index route, loads initial chart data
App.IndexRoute = Ember.Route.extend({
    model: function() {
        return App.ChartData.LoadChartData();
    }
});

// map router directly to template and View (controller created automatically)
App.Router.map(function() {
    this.route("activechart", {
        path: "/activechart"
    });
    this.route("about");
});