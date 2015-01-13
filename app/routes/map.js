import Ember from 'ember';

var geoip2 = window.geoip2;

var MapRoute = Ember.Route.extend({
  model: function(){
    return new Ember.RSVP.Promise(function(resolve, reject) {
      geoip2.city(resolve, reject);
    });
  }
});

export default MapRoute;
