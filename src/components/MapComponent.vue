<template>
  <div>
    <div id="map"></div>
    <p>Test: {{ map1 }} {{ map2 }}</p>
  </div>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtsOpEo7dKzmZRSm03WX8K65qFr_GqGu4">
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
        console.log("Lat: " + latitude);
        console.log("Long: " + longitude);

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



//Set up some of our variables.
var map; //Will contain map object.

//Function called to initialize / create the map.
//This is called when the page has loaded.
function initMap() {

  //The center location of our map.
  var centerOfMap = new google.maps.LatLng(52.357971, -6.516758);

  //Map options.
  var options = {
    center: centerOfMap, //Set center.
    zoom: 7 //The zoom value.
  };

  //Create the map object.
  map = new google.maps.Map(document.getElementById('map'), options);


}

//This function will get the marker's current location and then add the lat/long
//values to our textfields so that we can save the location.




/*

// Define the createMap function
const createMap = ({ lat, lng }) => {
  lat = 53.2801369
  lng = -9.0585957
  console.log(lat)
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
} */
</script>