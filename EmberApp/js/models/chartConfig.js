App.ChartConfig = Ember.Object.extend({
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

});