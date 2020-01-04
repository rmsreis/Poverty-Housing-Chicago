L.mapbox.accessToken = 'pk.eyJ1IjoicHFtdXJwaHkiLCJhIjoiY2szdGY4YTFtMDI5MzNkbDdkM3U5dzJjMiJ9.Vu8FS4DCrXwhSzfHNkWCxQ';
var map = L.mapbox.map("map", 'mapbox.streets', {
    center: [41.881832, -87.623177],
    zoom: 10.5
});

var zoomed = 0;

// KML DATA
var neighbounds = "static/Boundaries - Community Areas (current).kml"

// Get Hardship
function colorGrade(d) {
    return d > 90 ? '#800026' :
    d > 80  ? '#BD0026' :
    d > 70  ? '#E31A1C' :
    d > 60  ? '#FC4E2A' :
    d > 50   ? '#FD8D3C' :
    d > 40   ? '#FEB24C' :
    d > 30   ? '#FED976' :
    d > 20   ? '#FFEDA0' :
    d > 10   ? '#fff9e2' :
               '#fffdf5' ;
}

/// FUNCTION TO COLOUR EACH NEIGHBOURHOOD ///
function getColor(id) {

    var d;

    // Go Through indexdat JSON object to grab hardship index of neighbourhood
    indexdat.forEach(function(data) {
        if (data.AreaNumber == id) {
            d = data.HARDSHIPINDEX
        }
    })

    return colorGrade(d)
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

    info.update(layer.feature.properties);

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
    info.update();
}

function zoomToFeature(e) {
    if (zoomed == 0) {
        // "hood" variable is used to indicate what the spider plot should draw //
        var hood = e.target.feature.properties.area_num_1;
        zoomed = 1;
        map.fitBounds(e.target.getBounds());
        buildCharts(hood);
    }
    else {
        // "hood" variable is used to indicate what the spider plot should draw //
        var hood = 0;
        zoomed = 0;
        map.setView([41.881832, -87.623177], 10.5)
        buildCharts(hood);
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

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Chicago Hardship Index</h4>' +  'Click within a neighborhood to'+ '<br> compare with citywide data. The' + '<br> points are affordable housing' + '<br> buildings.';
};

info.addTo(map);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colorGrade(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

var URL = "/location";

d3.json(URL).then(data => {

    Object.entries(data).forEach(([key, value]) => {
        var location = [value.Latitude, value.Longitude];
        L.marker(location).addTo(map);
    });
});
