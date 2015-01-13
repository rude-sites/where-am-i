/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'where-am-i',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  var remoteSources = " maps.googleapis.com maps.gstatic.com fonts.googleapis.com fonts.gstatic.com mts.googleapis.com"

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' js.maxmind.com maps.googleapis.com maps.gstatic.com mts0.googleapis.com mts1.googleapis.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' js.maxmind.com",
    'img-src': "'self' maps.googleapis.com maps.gstatic.com mts.googleapis.com mts0.googleapis.com mts1.googleapis.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
    'media-src': "'self'"
  };

  return ENV;
};
