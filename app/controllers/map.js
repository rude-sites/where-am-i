import Ember from 'ember';

var MapController = Ember.Controller.extend({

  needs: ['maxmind', 'geolocation'],

  // state
  loaded: Ember.computed.alias('controllers.maxmind.isSettled').readOnly(),
  succeeded: Ember.computed.alias('controllers.maxmind.isFulfilled').readOnly(),

  // data
  maxmind: Ember.computed.alias('controllers.maxmind.model').readOnly(),
  latitude:  Ember.computed.alias('maxmind.location.latitude').readOnly(),
  longitude: Ember.computed.alias('maxmind.location.longitude').readOnly(),
  city: Ember.computed.alias('maxmind.city.names.en').readOnly(),
  country: Ember.computed.alias('maxmind.country.names.en').readOnly()
});

export default MapController;
