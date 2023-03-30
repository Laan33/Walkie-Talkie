<template>
  <div ref="mapContainer" style="height: 250px;"></div>
  </template>
<script>
export default {
  props: {
    map1: String,
    map2: String
  },
  data() {
    return {
      markers: [
        {
          position: { lat: 53.2738365684154, lng: -9.047927856445314 },
          title: 'Origin Marker',
          map: null,
        },
        {
          position: { lat: 53.2738365684154, lng: -9.047927856445314 },
          title: 'Dest Marker',
          map: null,
        },
      ],
      activeMarkerIndex: null,
    };
  },
  mounted() {
    const script = document.createElement('script');
    script.src =
"https://maps.googleapis.com/maps/api/js?key=REPLACE_ME_APIKEY&callback=initMap";
    script.defer = true;
    script.async = true;

    window.initMap = () => this.initMapHandler();
    document.head.appendChild(script);

    // Import blue dot image URL from Google Maps API
    const blueDotImageUrl =
        'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    const markerIcon = document.createElement('link');
    markerIcon.setAttribute('rel', 'icon');
    markerIcon.setAttribute('type', 'image/png');
    markerIcon.setAttribute('href', blueDotImageUrl);
    document.head.appendChild(markerIcon);
  },
  watch: {
    map1: function (newVal) {
      this.updateMarker(0);
    },
    map2: function (newVal) {
      this.updateMarker(1);
    },
  },
  methods: {
    initMapHandler() {
      const map = new google.maps.Map(this.$refs.mapContainer, {
        center: { lat: this.markers[0].position.lat, lng: this.markers[0].position.lng },
        zoom: 10,
      });

      this.markers.forEach((marker, index) => {
        marker.map = map;
        marker.markerInstance = new google.maps.Marker({
          position: marker.position,
          map: marker.map,
          title: marker.title,
          icon: index === 1 ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' : null,
        });
      });

      this.activeMarkerIndex = 0;
    },

    updateMarker(index) {
      let localLat, localLong;

      if (index === 0) {
        if (this.map1 === 'ES') {
          localLat = 53.27437545;
          localLong = -9.049219672355648;
        } else if (this.map1 === 'UG') {
          localLat = 53.2936337;
          localLong = -9.075059919448318;
        } else if (this.map1 === 'WS') {
          localLat = 53.2768746;
          localLong = -9.07729349573337;
        } else if (this.map1 === 'KC') {
          localLat = 53.2687291;
          localLong = -9.1090937;
        } else if (this.map1 === 'CG') {
          localLat = 53.35113375;
          localLong = -8.94472521513481;
        } else if (this.map1 === 'SH') {
          localLat = 53.2620258;
          localLong = -9.0746256;
        } else {
          localLat = 53.2738365684154;
          localLong = -9.047927856445314;
        }
      } else if (index === 1) {
        if (this.map2 === 'ES') {
          localLat = 53.27437545;
          localLong = -9.049219672355648;
        } else if (this.map2 === 'UG') {
          localLat = 53.2936337;
          localLong = -9.075059919448318;
        } else if (this.map2 === 'WS') {
          localLat = 53.2768746;
          localLong = -9.07729349573337;
        } else if (this.map2 === 'KC') {
          localLat = 53.2687291;
          localLong = -9.1090937;
        } else if (this.map2 === 'CG') {
          localLat = 53.35113375;
          localLong = -8.94472521513481;
        } else if (this.map2 === 'SH') {
          localLat = 53.2620258;
          localLong = -9.0746256;
        } else {
          localLat = 53.2738365684154;
          localLong = -9.047927856445314;
        }
      }

      if (this.markers[index].markerInstance) {
        this.markers[index].markerInstance.setPosition({
          lat: localLat,
          lng: localLong,
        });
      }
    },
  },
};
</script>