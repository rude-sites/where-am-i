import Ember from 'ember';

var MapController = Ember.Controller.extend({

  needs: ['maxmind', 'geolocation'],

  loading: Ember.computed.alias('controllers.maxmind.isPending'),

  maxmind: Ember.computed.alias('controllers.maxmind.model').readOnly(),

  latitude:  Ember.computed.alias('maxmind.location.latitude').readOnly(),
  longitude: Ember.computed.alias('maxmind.location.longitude').readOnly()

});

export default MapController;