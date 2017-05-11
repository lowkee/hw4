

  // initialize the map
var map = L.map('map')
  // load a tile layer
 L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxzoom: 19
    } ).addTo( map );
map.setView([40.730610, -73.935242], 10);

var locations = [
	{
		"name": "Brooklyn",
		"lat": 40.650002,
		"lng": -73.949997,
		"zoom": 15
	},
	{
		"name": "Bronx",
		"lat": 40.837048, 
		"lng": -73.865433,
		"zoom": 15
	}, 
	{
		"name": "Manhattan",
		"lat": 40.758896, 
		"lng": -73.985130,
		"zoom": 15
	},
	{
		"name": "Queens",
		"lat": 40.742054, 
		"lng": -73.769417,
		"zoom": 15
    },
    {
        "name": "Staten Island",
		"lat": 40.579021, 
		"lng": -74.151535,
		"zoom": 15
    
	}];
//need to put some sort of function in so that upon select the marker appears
//L.locations = function () {
//    return new L.marker();
//};

L.marker([40.650002, -73.949997], 
{locations:name }).addTo(map).bindPopup();
L.marker([40.837048, -73.865433], {locations:name}).addTo(map).bindPopup();
L.marker([40.758896, -73.985130], {locations:name}).addTo(map).bindPopup();
L.marker([40.742054, -73.769417], {locations:name}).addTo(map).bindPopup();
L.marker([40.579021, -74.151535], {locations:name}).addTo(map).bindPopup();
  
  