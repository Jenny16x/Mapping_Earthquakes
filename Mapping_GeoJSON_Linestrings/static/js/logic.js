// // Add console.log to check to see if our code is working.
// // console.log("working");

// // // Create the map object with a center and zoom level.
// // // //better to use the bottom method because will add more layers later
// // // Create the map object with a center and zoom level.
// // // let map = L.map("mapid").setView( [36.1733, -120.1794],
// // //   );
// //   // Create the map object with center at the San Francisco airport.
// // // let map = L.map('mapid').setView([37.6213, -122.3790], 5);
  
// // // // We create the tile layer that will be the background of our map.
// // // // We create the tile layer that will be the background of our map.
// // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// // attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// //     maxZoom: 18,
// //     accessToken: API_KEY
// // });

// // // Then we add our 'graymap' tile layer to the map.
// // streets.addTo(map);

// // Coordinates for each point to be used in the line.
// // Coordinates for each point to be used in the polyline.
// // let line = [
// //     [33.9416, -118.4085],
// //     [37.6213, -122.3790],
// //     [40.7899, -111.9791],
// //     [47.4502, -122.3088]
// //   ];

// // let line = [
// //     [33.9416, -118.4085],
// //     [38.6951, -121.5901],
// //     [30.1975, -97.6664],
// //     [43.6777, -79.6248],
// //     [40.6413, -73.7781],
// //   ];

// // // Create a polyline using the line coordinates and make the line yellow.
// // L.polyline(line, {
// //     color: "blue",
// //     weight: 4,
// //     dashArray: "8,6",
// //     fillOpacity: 0.5,
// //  }).addTo(map);

// // // Create the map object with center at the San Francisco airport.
// // let map = L.map('mapid').setView([37.5, -122.5], 10);

// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);



// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng).bindPopup( "<h3>Airport code:" + feature.properties.faa + "<br>" + feature.properties.name + "</h2> ");
//     }

//   }).addTo(map);


//   L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//       console.log(layer)
//       layer.bindPopup();
//      }
// });
  


// let map = L.map('mapid').setView([30, 30], 2);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/Jenny16x/Mapping_Earthquakes/Simple_Leaflet_Map/majorAirports.json";

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//       onEachFeature: function(feature, layer) {
//           console.log(layer);
//           layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3> <hr><h3> Airport name: "
//                + feature.properties.name + "</h3>");
//       }
//   }).addTo(map);
// });

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let airportData = "https://raw.githubusercontent.com/Jenny16x/Mapping_Earthquakes/Simple_Leaflet_Map/majorAirports.json";

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });

d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
      onEachFeature: function(feature, layer) {
          console.log(layer);
          layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3> <hr><h3> Airport name: "
               + feature.properties.name + "</h3>");
      }
  }).addTo(map);
});
