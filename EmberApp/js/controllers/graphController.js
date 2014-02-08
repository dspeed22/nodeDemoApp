// from jsfiddle http://jsfiddle.net/qmmvx/2/

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
});