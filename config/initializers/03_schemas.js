// schemas for MongoDB and mongoose
// intializer files are loaded in numerical order
// this file needs to load before "nn_mongoose.js" so the schemas exist on "this"
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {

    // caching schemas, temporary, used for initializes
    // "this" context not have schemas outside of initializer files
    this.schemas = {
        // need to use "Schema" to wrap json to register
        // this schema as mongoose model
        UserSchema: new Schema({
            name: String,
            isActive: Boolean
        }),

        SalesSchema: new Schema({
            agentName: String,
            amount: String,
            units: String,
            date: {
                type: Date,
                default: Date.now
            },
        }),

        VolumeMetricSchema: new Schema({
            volume: Number,
            date: {
                type: Date,
                default: Date.now
            },
        })
    };
}