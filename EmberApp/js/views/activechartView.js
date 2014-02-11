/**
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