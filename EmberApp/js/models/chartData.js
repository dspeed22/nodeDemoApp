// Object to load chart data via ajax for models in ember


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
});