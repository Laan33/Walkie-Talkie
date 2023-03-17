

var map; //Will contain map object.
//Map options.
var options = {
    center: centerOfMap, //Set center.
    zoom: 7 //The zoom value.
};

//The center location of our map.
var centerOfMap = new google.maps.LatLng(52.357971, -6.516758);

//Create the map object.
map = new google.maps.Map(document.getElementById('mapholder'), options);






function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function showPosition(position) {
    //Create the map object.
    map = new google.maps.Map(document.getElementById('map'), options);


    let latlon = position.coords.latitude + "," + position.coords.longitude;

    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}