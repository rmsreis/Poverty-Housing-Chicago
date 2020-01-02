L.mapbox.accessToken = 'pk.eyJ1IjoicHFtdXJwaHkiLCJhIjoiY2szdGY4YTFtMDI5MzNkbDdkM3U5dzJjMiJ9.Vu8FS4DCrXwhSzfHNkWCxQ';
var map = L.mapbox.map("map", 'mapbox.streets');
var afhous = "Assets/Data/points.csv";
var zoomed = 0;
console.log(zoomed+' i started zoomed out')
// KML DATA
var neighbounds = "Assets/Data/Boundaries - Community Areas (current).kml";

/// FUNCTION TO COLOUR EACH NEIGHBOURHOOD ///
function getColor(id) {

    var d;

    // Go Through indexdat JSON object to grab hardship index of neighbourhood
    indexdat.forEach(function(data) {
        if (data.AreaNumber == id) {

            d = data.HARDSHIPINDEX

        }
    })


    return d > 90 ? '#800026' :
           d > 80  ? '#BD0026' :
           d > 70  ? '#E31A1C' :
           d > 60  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 40   ? '#FEB24C' :
           d > 30   ? '#FED976' :
           d > 20   ? '#FFEDA0' :
                      '#fff9e2' ;
}

// Styling and Hover Interaction
function style(feature) {
    return {
        fillColor: getColor(feature.properties.area_num_1),
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
    if (zoomed == 0) {
        // "hood" variable is used to indicate what the spider plot should draw //
        var hood = e.target.feature.properties.area_num_1;
        zoomed = 1;
        map.fitBounds(e.target.getBounds());
        /// PLACE REDRAW FUNCTION HERE ///
        /// Redraw to neighbourhood ID ///
        /// PLACE REDRAW FUNCTION HERE ///
    }
    else {
        // "hood" variable is used to indicate what the spider plot should draw //
        var hood = 0;
        zoomed = 0;
        map.fitBounds(pts.getBounds());
        /// PLACE REDRAW FUNCTION HERE ///
        /// Redraw to entire city HERE ///
        /// PLACE REDRAW FUNCTION HERE ///
    }
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