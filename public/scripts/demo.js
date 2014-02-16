/**
 * Main app file for ember application
 * Application configuration etc
 */

var rootUrl = "https://localhost:3000"

App = window.App = Ember.Application.createWithMixins(Bootstrap, {
    LOG_TRANSITIONS: true
});;// ember component wrapping highcharts object



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
});;/*
 * Controller using Boot strap for ember to show growl notifications
 */

App.NotifyController = Ember.Controller.extend({
    actions: {
        pushInfo: function(message) {
            Bootstrap.GNM.push('INFO', message, 'info');
        },
        pushSuccess: function(message) {
            Bootstrap.GNM.push('SUCCESS', message, 'success');
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
});;// Main ember app routes

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
});;/**
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