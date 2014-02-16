/**
 * Main app file for ember application
 * Application configuration etc
 */

var rootUrl = "https://localhost:3000"

App = window.App = Ember.Application.createWithMixins(Bootstrap, {
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.LSAdapter;
App.Store = DS.Store.extend();;// ember component wrapping highcharts object



App.ChartHighchartComponent = Ember.Component.extend({
    tagName: 'div',
    chartSeries: null,
    chartType: null,
    attributeBindings: ['width', 'height'],
    width: '380px',
    height: 'auto',
    chartTitle: '',
    yAxisTitle: '',
    didInsertElement: function() {

        var container = $('#' + this.get('elementId'));
        var chartSeries = this.get('chartSeries');

        var chartDefaults = {
            chart: {
                renderTo: this.get('elementId'),
                defaultSeriesType: this.get('chartType')
            },
            title: {
                text: this.get('chartTitle')
            },
            yAxis: {
                title: {
                    text: this.get('yAxisTitle')
                }
            }
        };

        var chartConfig = $.extend({}, chartSeries, chartDefaults);

        var chart = new Highcharts.Chart($.extend({}, chartConfig));
    }
});;App.ChartConfig = Ember.Object.extend({
    chart: null,

    setChart: function() {
        var chart = {
            renderTo: this.get('renderToId'),
            defaultSeriesType: this.get('graphType')
        };
        this.set('chart', chart);
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },

    series: [{
        name: 'Test',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
            216.4, 194.1, 95.6, 54.4
        ]
    }, {
        name: 'Test2',
        data: [30.9, 56.5, 90.4, 160.2, 140.0, 150.0, 190.6, 200.5,
            150.4, 210.1, 100.6, 80.4
        ]
    }],

    plotOptions: {
        series: {
            cursor: 'pointer',
            allowPointSelect: true,
            point: {
                events: {
                    click: function() {
                        App.graphController.switchTypes();
                    }
                }
            }
        }
    },

    renderToId: null,

    graphType: null

});;// from jsfiddle http://jsfiddle.net/qmmvx/2/

//chart config in components/chart/chartConfig.js

App.graphController = Ember.ArrayController.create({
    content: Ember.A([]),

    createGraph: function(renderTo, graphType) {
        var chart = App.ChartConfig.create();
        chart.set('renderToId', renderTo);
        chart.set('graphType', graphType);
        chart.setChart();
        this.pushObject(chart);
    },

    renderCharts: function() {
        this.forEach(this.renderChart, this);
    },

    renderChart: function(config) {
        new Highcharts.Chart($.extend({}, config));
    },

    switchTypes: function() {
        this.forEach(function(chart) {
            var newType = chart.graphType == 'line' ? 'column' : 'line';
            chart.set('graphType', newType);
            chart.setChart();
        });
        this.renderCharts();
    }
});;// users array controller
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
});;//User creation controller
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
});;App.ChartConfig = Ember.Object.extend({
    chart: null,

    setChart: function() {
        var chart = {
            renderTo: this.get('renderToId'),
            defaultSeriesType: this.get('graphType')
        };
        this.set('chart', chart);
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },

    series: [{
        name: 'Test',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
            216.4, 194.1, 95.6, 54.4
        ]
    }, {
        name: 'Test2',
        data: [30.9, 56.5, 90.4, 160.2, 140.0, 150.0, 190.6, 200.5,
            150.4, 210.1, 100.6, 80.4
        ]
    }],

    plotOptions: {
        series: {
            cursor: 'pointer',
            allowPointSelect: true,
            point: {
                events: {
                    click: function() {
                        // fire request to graph controller to update all charts
                        App.graphController.switchTypes();
                    }
                }
            }
        }
    },

    renderToId: null,

    graphType: null

});;// Object to load chart data via ajax for models in ember


// create ember object
App.ChartData = Ember.Object.extend({});

// reopen and append methods to the ember object
App.ChartData.reopenClass({
    LoadChartData: function() {

        var now = new Date();
        var past = new Date();
        past.setDate(past.getDate() - 7);

        var requestData = {
            startDate: past,
            endDate: now
        };

        var clickHandler = function() {
            var datetext = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
            var volume = this.y;

            //alert("clicked " + datetext + " value: " + volume);

            var message = "Clicked sales " + volume + " on date " + datetext;
            Bootstrap.GNM.push('Sales Point Clicked', message, 'info');
        };

        // return ember promise object to make template rendering wait
        // call resolve with result when done to continue excecution
        return new Ember.RSVP.Promise(function(resolve) {

            Ember.$.ajax({
                type: "POST",
                url: "metrics/queryMetrics",
                data: JSON.stringify(requestData),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .then(function(data) {

                    var series = [];
                    $.each(data, function() {
                        var item = this;
                        var itemData = [];
                        itemData.push(new Date(item.date).getTime());
                        itemData.push(item.volume);

                        series.push(itemData);
                    });

                    series.sort(function(a, b) {
                        return (a[0] - b[0]);
                    });

                    var result = {
                        xAxis: {
                            type: 'datetime'
                        },
                        series: [{
                            name: 'Sales Volume',
                            data: series
                        }],
                        plotOptions: {
                            series: {
                                cursor: 'pointer',
                                point: {
                                    events: {
                                        click: clickHandler
                                    }
                                }
                            }
                        },
                    };

                    var result = Ember.Object.create({
                        modelOne: result,
                        modelTwo: result
                    });

                    // return response to promise object
                    resolve(result);
                });
        });
    }
});;// the model for a user
// Extends the ember datastore model
// Model submitted and deserialized the the ember rest adapter

App.User = DS.Model.extend({
    name: DS.attr("string"),
    active: DS.attr("boolean")
});;// Main ember app routes

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
});; // single user route - dynamic segment
 App.UserRoute = Em.Route.extend({
     model: function(params) {
         return this.store.find('user', params.user_id);
     }
 });;// user creation form route
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
});;// users route
// Main users list, loads the list of users from the store
// no controller method for this, the route acts as a traditional controller

App.UsersRoute = Em.Route.extend({
    model: function() {
        return this.store.find('user');
    }
});/**
 * activechart application view extension
 * fires load events when activechart.hbs template inserted
 */

// load default charts when app starts
App.ActivechartView = Ember.View.extend({
    didInsertElement: function() {
        App.graphController.createGraph('graph1', 'line');
        App.graphController.createGraph('graph2', 'column');
        App.graphController.renderCharts();
    }
});