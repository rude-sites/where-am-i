import Ember from "ember";

var geoip2 = window.geoip2;

var MaxmindController = Ember.ObjectController.extend(Ember.PromiseProxyMixin, {
  init: function(){
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      geoip2.city(resolve, reject);
    });

    this.set('promise', promise);
  }
});

export default MaxmindController;
