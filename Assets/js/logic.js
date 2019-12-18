L.mapbox.accessToken = 'pk.eyJ1IjoicHFtdXJwaHkiLCJhIjoiY2szdGY4YTFtMDI5MzNkbDdkM3U5dzJjMiJ9.Vu8FS4DCrXwhSzfHNkWCxQ';
var map = L.mapbox.map("map", 'mapbox.streets');

// THIS NEEDS TO BE DELETED ONCE "pts" VAR         //
// IS REPLACED BY THE DB AFFORDABLE HOUSE LAT LONS //
var afhous = "Assets/Data/points.csv";

// KML DATA
var neighbounds = "Assets/Data/Boundaries - Community Areas (current).kml";

function filterPoints(csv, poly) {
    resultPoints = L.geoJson(turf.within(csv, poly));
    resultPoints.addTo(map);
}

// FUNCTION TO COLOUR EACH NEIGHBOURHOOD ///
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

// Styling and Hover Interaction
function style(feature) {
    return {
        fillColor: 'blue',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
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
    poly.resetStyle(e.target);
}

function zoomToFeature(e) {
    var hood = e.target.feature.properties.area_num_1;
    map.fitBounds(e.target.getBounds());
    /// PLACE REDRAW FUNCTION HERE ///
    /// PLACE REDRAW FUNCTION HERE ///
    /// PLACE REDRAW FUNCTION HERE ///
    /// PLACE REDRAW FUNCTION HERE ///
    /// PLACE REDRAW FUNCTION HERE ///
    /// PLACE REDRAW FUNCTION HERE ///
    /// PLACE REDRAW FUNCTION HERE ///
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}


// Draw the map
// Instantiate initial style //
var customLayer = L.geoJson(null, {
    style: style,
    onEachFeature: onEachFeature
});

// Creates the GeoJSON Layers ///
var poly = omnivore.kml(neighbounds, null, customLayer)
poly.addTo(map);

// Plots the Affordable Housing Points //
var pts = omnivore.csv(afhous);

pts.on('ready', function() {
    map.fitBounds(pts.getBounds());
})
.addTo(map);