var mongoose = require('mongoose');

module.exports = function() {
  switch (this.env) {
    case 'development':
      mongoose.connect('mongodb://localhost');
      break;
    case 'production':
      mongoose.connect('mongodb://localhost');
      break;
  }

  // loaded in 03_schemas init file
  var schemas = this.schemas;

  // creating mongo db schemas in mongoose for models, caching globally
  this.dbmodels = {
    User: mongoose.model('User', schemas.UserSchema),
    Post: mongoose.model('Post', schemas.PostSchema),
    VolumeMetric: mongoose.model('VolumeMetric', schemas.VolumeMetricSchema)
  };
}