// the model for a user
// Extends the ember datastore model
// Model submitted and deserialized the the ember rest adapter

App.User = DS.Model.extend({
    name: DS.attr("string"),
    active: DS.attr("boolean")
});