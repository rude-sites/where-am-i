import Ember from "ember";

var GeolocationController = Ember.ObjectController.extend(Ember.PromiseProxyMixin, {
  init: function(){
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    this.set('promise', promise);
  }
});

export default GeolocationController;
