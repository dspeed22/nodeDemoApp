var mongoose = require('mongoose');

module.exports = function() {

    // intialize mongoose connections to mongo db
    switch (this.env) {
        case 'development':
            mongoose.connect('mongodb://localhost/devDemo');
            break;
        case 'production':
            mongoose.connect('mongodb://localhost/prodDemo');
            break;
    }

    // loaded in 03_schemas init file
    var schemas = this.schemas;

    // creating mongo db schemas in mongoose for models
    // these are cached with mongoose and can be referenced like
    // var model = mongoose.model('Model')
    mongoose.model('User', schemas.UserSchema);
    mongoose.model('Post', schemas.PostSchema);
    mongoose.model('VolumeMetric', schemas.VolumeMetricSchema);
}