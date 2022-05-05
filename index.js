var map = L.map('map').setView([28.563576458057657, 77.24683559260544], 13);

openSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
openSM.addTo(map);
socioMetrik = L.marker([28.563576458057657, 77.24683559260544]).addTo(map);


//google map layer
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map);

// satellite layer

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleSat.addTo(map);

var baseLayers = {
    "OpenStreetMap": openSM,
    "Satellite":googleSat,
    "Google Map":googleStreets,
};

var overlays = {
    "socioMetrik": socioMetrik,
    
};

L.control.layers(baseLayers, overlays).addTo(map);

L.Control.geocoder().addTo(map);

L.control.locate().addTo(map);