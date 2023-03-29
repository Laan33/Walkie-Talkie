<template>
  <div>
    <div id="map"></div>
    <p>Test: {{ map1 }} {{ map2 }}</p>
  </div>
</template>

<script>
export default {
  name: "MyMapComponent",
  props: {
    map1: String,
    map2: String
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Create the Google Map
        const map = createMap({ lat: latitude, lng: longitude });

        // Create the Marker for the current location
        const marker = createMarker({ map, position: { lat: latitude, lng: longitude } });
      }, (error) => {
        console.log(error);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
};

// Define the createMap function
const createMap = ({ lat, lng }) => {
  return new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 15,
  });
};

// Define the createMarker function
const createMarker = ({ map, position }) => {
  return new google.maps.Marker({ map, position });
};

// Define the showPosition function
function showPosition(position) {
  const latlon = position.coords.latitude + "," + position.coords.longitude;

  const img_url =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      latlon +
      "&zoom=14&size=400x300&sensor=false&key=AIzaSyC4wP_vdl9QWCzaQi5y4SfjRHpBJcKuYHM";

  document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
}
</script>