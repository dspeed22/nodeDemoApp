/**
 * Main app file for ember application
 * Application configuration etc
 */

App = window.App = Ember.Application.createWithMixins(Bootstrap);;// ember component wrapping highcharts object



App.ChartHighchartComponent = Ember.Component.extend({
    tagName: 'div',
    chartSeries: null,
    chartType: null,
    attributeBindings: ['width', 'height'],
    width: '380px',
    height: 'auto',
    didInsertElement: function() {

        var container = $('#' + this.get('elementId'));
        var chartSeries = this.get('chartSeries');

        var chartDefaults = {
            chart: {
                renderTo: this.get('elementId'),
                defaultSeriesType: this.get('chartType')
            },
            plotOptions: {
                series: {
                    cursor: 'pointer'
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

});;// Main ember app routes
var tempChartModel = {
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
    }]
};

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.Object.create({
            modelOne: tempChartModel,
            modelTwo: tempChartModel
        });
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
 * fires load events when activechart template inserted
 */

// load default charts when app starts
App.ActivechartView = Ember.View.extend({
    didInsertElement: function() {
        App.graphController.createGraph('graph1', 'line');
        App.graphController.createGraph('graph2', 'column');
        App.graphController.renderCharts();
    }
});