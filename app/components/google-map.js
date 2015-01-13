import Ember from 'ember';

var google = window.google;

var GoogleMapsComponent = Ember.Component.extend({
  latitude: null,
  longitude: null,

  _map: null,
  _marker: null,

  insertMap: function() {
    var container = this.$(".google-map-canvas");

    var latLong = new google.maps.LatLng(this.get("latitude"),
this.get("longitude"));

    var options = {
      center: latLong,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(container[0], options);

    this.set('_map', map);

    var marker = new google.maps.Marker({
      position: latLong,
      map: map,
      title: 'Your reported location'
    });

    this.set('_marker', marker);

  }.on('didInsertElement'),

  reposition: function(){
    var map = this.get('_map');
    var marker = this.get('_marker');

    var latLong = new google.maps.LatLng(this.get("latitude"),
this.get("longitude"));

    map.setCenter(latLong);
    marker.setPosition(latLong);

  }.observes('latitude', 'longitude')
});

export default GoogleMapsComponent;
