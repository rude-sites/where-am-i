import Ember from 'ember';

var MapController = Ember.Controller.extend({

  latitude:  Ember.computed.alias('model.location.latitude').readOnly(),
  longitude: Ember.computed.alias('model.location.longitude').readOnly()

});

export default MapController;
