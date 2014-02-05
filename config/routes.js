// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
    this.root('pages#main');

    //routes are matched in the order specified

    // route userController/list
    this.match('user/list', 'user#list');

    // route to user/create/{name}
    this.match('user/:name', 'user#create');


    // MetricsController Routes
    this.match('metrics/queryMetrics', 'metrics#queryMetrics', {
        via: 'POST'
    });

    this.match('metrics/list', 'metrics#list');

    this.match('metrics/create', 'metrics#create');

    this.match('metrics/createDemoData', 'metrics#createDemoData');
}