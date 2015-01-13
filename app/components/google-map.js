import Ember from 'ember';

var google = window.google;

var GoogleMapsComponent = Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var latLong = new google.maps.LatLng(this.get("latitude"),
this.get("longitude"));

    var options = {
      center: latLong,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(container[0], options);

    new google.maps.Marker({
      position: latLong,
      map: map,
      title: 'Your reported location'
    });
  }.on('didInsertElement')
});

export default GoogleMapsComponent;
