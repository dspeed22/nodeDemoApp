/**
 * Main app file for ember application
 * Application configuration etc
 */

var rootUrl = "https://localhost:3000"

App = window.App = Ember.Application.createWithMixins(Bootstrap, {
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.LSAdapter;
App.Store = DS.Store.extend();