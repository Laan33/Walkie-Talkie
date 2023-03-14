let radius = 30;



// JavaScript program to calculate Distance Between
// Two Points on Earth

function distance(lat1, lat2, lon1, lon2)
{

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return(c * r);
}

// Driver code

let lat1 = 52.2697672869753;
let lat2 = 53.26509985622571;
let lon1 = -9.057480695385957;
let lon2 = -9.084413181417599;


document.write(distance(lat1, lat2, lon1, lon2) + " K.M");
let calc = distance(lat1, lat2, lon1, lon2) + " K.M";



document.getElementById('distance').textContent = distance();

