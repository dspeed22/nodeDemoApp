// ember component wrapping highcharts object



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
            plotOptions: {
                series: {
                    cursor: 'pointer'
                }
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
});