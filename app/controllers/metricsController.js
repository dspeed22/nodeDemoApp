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



};

/**
 * List all volume metric data
 */
metricsController.list = function() {

    var context = this;

    try {

        var results = [];

        // return all users, pass callback to handle results and error
        var metricResults = VolumeMetric.find({},
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

// expose users controller to nodejs globally (exports is really more like "expose ")
module.exports = metricsController;