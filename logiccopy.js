L.mapbox.accessToken = 'pk.eyJ1IjoicHFtdXJwaHkiLCJhIjoiY2szdGY4YTFtMDI5MzNkbDdkM3U5dzJjMiJ9.Vu8FS4DCrXwhSzfHNkWCxQ';
var map = L.mapbox.map("map", 'mapbox.streets');
var afhous = "Assets/Data/points.csv";
var neighbounds = "Assets/Data/Neighborhoods.kml";
var resultPoints;
var csvFeatures;
var polyFeatures;

function filterPoints(csv, poly) {
    resultPoints = L.geoJson(turf.within(csv, poly));
    resultPoints.addTo(map);
}

// function coloritems(hoods, csv){

// }

// function getColor(d) {
//     return d > 1000 ? '#800026' :
//            d > 500  ? '#BD0026' :
//            d > 200  ? '#E31A1C' :
//            d > 100  ? '#FC4E2A' :
//            d > 50   ? '#FD8D3C' :
//            d > 20   ? '#FEB24C' :
//            d > 10   ? '#FED976' :
//                       '#FFEDA0';
// }

function omnivorize (csv, kml) {
    
    // Colouring the map
    var poly = omnivore.kml(kml)
    // .on('ready', function() {
    //     polyFeatures = poly.toGeoJSON();
    // })
    // .on('ready', function() {
    //     this.setStyle({color: "#FF0000"});
    // })
    .addTo(map);
    
    var pts = omnivore.csv(csv)
    .on('ready', function() {
        map.fitBounds(pts.getBounds());
        csvFeatures = pts.toGeoJSON();
    })
    .addTo(map);
    
    // use this to
    document.getElementById('button').onclick=function(){
       map.removeLayer(pts);
       filterPoints(csvFeatures, polyFeatures);
    }

    console.log(poly)
    console.log(map)

}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}



omnivorize(afhous,neighbounds);