const createMap = ({ lat, lng }) => {
    return new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng },
        zoom: 15
    });
};

const createMarker = ({ map, position }) => {
    return new google.maps.Marker({ map, position });
};


