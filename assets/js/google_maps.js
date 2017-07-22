/**
 * Google Maps
 */

var map;
function initMap() {
  var myLatLng = {lat: -41.129102, lng:  -71.355525};
  
  var styleArray = [
    {
        "featureType": "all",
        "stylers": [
            {
                "saturation": 0
            },
            {
                "hue": "#e7ecf0"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    }
]

  var mapOptions = {
    zoom: 15,
    center: myLatLng,
    styles: styleArray,
    scrollwheel: false
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  var image = 'assets/img/map_marker.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'Hosteria Le Charme'
  });
  
};