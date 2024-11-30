var map = L.map('map').setView([ 7.11861, -73.1161], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([ 7.11861, -73.1161]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    var popup = L.popup();

    var coord;

    var colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow'];
    var colorIndex = 0;

    function onMapClick(e) {
        lat=e.latlng.lat
        lng=e.latlng.lng
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);

            coord=[e.latlng.lat, e.latlng.lng]
            console.log(coord)

            var currentColor = colors[colorIndex];

            var circle = L.circle([e.latlng.lat, e.latlng.lng], {
                color: 'black',
                fillColor: currentColor,
                fillOpacity: 0.5,
                radius: 500
            }).addTo(map);

            colorIndex = (colorIndex + 1) % colors.length;
    }
    
    map.on('click', onMapClick);

    