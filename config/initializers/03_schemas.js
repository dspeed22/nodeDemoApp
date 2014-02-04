// schemas for MongoDB and mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){

	this.schemas = {
		UserSchema: new Schema({
			name: String,
			isActive: Boolean
		}),

		PostSchema: new Schema({
			externalid: String,
			author: String,
			Body: String,
			Url: String
		}),

		VolumeMetricSchema: new Schema({
			volume: Number,
			date: { type: Date, default: Date.now },
		})
	};
}