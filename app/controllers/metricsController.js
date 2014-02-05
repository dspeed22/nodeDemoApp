var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    mongoose = require('mongoose'),
    // get a VolumeMetric model from mongoose 'VolumeMetric' schema
    // to use in all controller methods
    VolumeMetric = mongoose.model('VolumeMetric');


var metricsController = new Controller();

/**
 * query metric data vai post
 */
metricsController.queryMetrics = function() {

    var context = this;


    try {
        // { startDate: "", endDate: "" }
        var query = context.req.body;

        console.log(query);

        var startDt = new Date(query.startDate);
        var endDt = new Date(query.endDate);

        VolumeMetric.aggregate([{
                // filter documents by start and end date
                $match: {
                    date: {
                        $gt: startDt,
                        $lte: endDt
                    }
                }
            }, {
                $group: {
                    // make the group key the day of the year, we don't care about time
                    _id: {
                        $add: [{
                            $dayOfYear: "$date"
                        }]
                    },
                    // sum the volume field
                    volume: {
                        $sum: "$volume"
                    },
                    // get the min date of the goup
                    first: {
                        $min: "$date"
                    }
                }
            }, {
                // renamed and exlude fields from the document stream from the group clause (like select as in sql)
                $project: {
                    date: "$first",
                    volume: 1,
                    _id: 0
                }

            }],
            function(err, metrics) {

                if (err) {
                    context.res.json({
                        status: "fail query",
                        error: err.message
                    });
                    return;
                }

                var results = [];

                metrics.forEach(function(item) {

                    results.push({
                        volume: item.volume,
                        date: item.date
                    })
                });

                // return results as json array
                context.res.json(results);
            });

    } catch (error) {
        context.res.json({
            status: "fail",
            error: error.message
        });
    }

};

/**
 * List all volume metric data
 */
metricsController.list = function() {

    var context = this;

    try {

        var results = [];

        // return all users, pass callback to handle results and error
        VolumeMetric.find({},
            function(err, items) {

                if (err) {
                    context.res.json({
                        status: "fail query",
                        error: err.message
                    });
                    return;
                }

                // add each result to to the result list
                items.forEach(function(item) {

                    results.push({
                        volume: item.volume,
                        date: item.date
                    });
                });

                // return results as json array
                context.res.json(results);
            });

    } catch (error) {
        context.res.json({
            status: "fail",
            error: error.message
        });
    }
};

/**
 * create metric data for a day
 */
metricsController.create = function() {

    var context = this;

    context.res.json({
        status: "success"
    });
};

/**
 * create demo metric data for 7 days
 */
metricsController.createDemoData = function() {

    var context = this;


    try {

        var metricList = [];

        //create metrics
        for (var i = 1; i < 8; i++) {

            var vol = Math.floor((Math.random() * 100) + 1);
            var metricDate = new Date();
            metricDate.setDate(metricDate.getDate() - i);

            metricList.push({
                volume: vol,
                date: metricDate,
            });

        }

        VolumeMetric.create(metricList, function(err) {
            if (err) {
                context.res.json({
                    status: "fail",
                    error: err.message
                });
                return;
            }

            context.res.json({
                status: "success"
            });

        });

    } catch (error) {
        context.res.json({
            status: "fail",
            error: error.message
        });
    }
};

// expose metrics controller to nodejs globally
module.exports = metricsController;