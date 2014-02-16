var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    mongoose = require('mongoose'),
    // get a sale model from mongoose 'sale' schema
    // to use in all controller methods
    saleModel = mongoose.model('Sale');

// create new controller for sales
var salesController = new Controller();

/**
 * create a sale in mongo db with mongoose
 * @returns json { status: "success, fail" error: "message" }
 */
salesController.create = function() {

    var context = this;

    try {

        var saleReq = context.req.body;

        // create a new sale mongoose model
        var sale = new saleModel({
            agentName: salesReq.agent,
            amount: salesReq.amount,
            units: salesReq.units,
            data: new Date(salesReq.date)
        });

        // save the new sale, callback for sucess and error
        sale.save(function(err) {
            if (err) {
                context.res.json({
                    status: "fail",
                    error: err.message
                });
                return;
            } else {

                // return json result using "this.res"
                context.res.json({
                    status: "success"
                });
            }
        });
    } catch (error) {
        context.res.json({
            status: "fail",
            error: error.message
        });
    }
}

/**
 * Lists all the sales in the mongoDB
 * @returns json list of sales
 */
salesController.list = function() {
    var context = this;

    try {

        var results = [];

        // return all sales, pass callback to handle results and error
        saleModel.find({},
            function(err, items) {

                if (err) {
                    context.res.json({
                        status: "fail",
                        error: err.message
                    });
                    return;
                }

                // add each result to to the result list
                items.forEach(function(item) {

                    results.push({
                        agent: item.agentName,
                        amount: item.amount,
                        units: item.units,
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
}

/**
 * create demo metric data for 7 days
 */
salesController.createDemoData = function() {

    var context = this;


    try {

        var saleList = [];

        //create metrics
        for (var i = 1; i < 8; i++) {

            var vol = Math.floor((Math.random() * 100) + 1);
            var units = Math.floor((Math.random() * 100) + 1);
            var amount = Math.floor((Math.random() * 100) + 1);
            var metricDate = new Date();
            metricDate.setDate(metricDate.getDate() - i);

            saleList.push({
                agentName: 'agent_' + i,
                date: metricDate,
                units: units,
                amount: amount
            });

        }

        saleModel.create(saleList, function(err) {
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

// expose sales controller to nodejs globally (exports is really more like "expose ")
module.exports = salesController;