var locations = [
    {
        lat: 40.7484444,
        lng: -73.9878441,
        title: 'Empire State Building',
    },
    {
        lat: 40.7516248,
        lng: -73.9776907,
        title: 'Chrysler Building',
    },
    {
        lat: 40.7339877,
        lng: -73.980817,
        title: 'Flatiron Building',
    },
]

function processLocation(location) {
    var marker = new google.maps.Marker({
        position: {
        lat: location.lat,
        lng: location.lng,
        },
        title: location.title,
        map: map,
    })
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 40.7127,
        lng: -74.0059,
    },
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: {lat: 40.7127, lng: -74.0059},
    map: map,
    title: 'New York, NY'
  });

  locations.forEach(processLocation)
}

initMap()
   