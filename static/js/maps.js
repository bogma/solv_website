function fetchJSON(url) {
    return fetch(url)
      .then(function (response) {
        return response.json();
      });
  }
function getColor(club) {
    return club == 'AHD' ? '#0B6623' :
           club == 'HSW' ? '#DC143C' :
           club == 'SHN' ? '#FFFF00' :
           club == 'TVZ' ? '#3E424B' :
           club == 'SOLV' ? '#FD8D3C' :
                           '#0000FF';
}
function style(feature) {
    return {
        color: getColor(feature.properties.club),
        weight: 3,
        opacity: 0.8,
        fillColor: getColor(feature.properties.club),
        fillOpacity: 0.2
    };
}
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 4,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
function buildNameList(names){
    var res = '';
    if (names && names.length > 0) {
        res += ' (';
        for (var i = 0; i < names.length; i++) {
            var nSplit = names[i].split(' ');
            if (nSplit.length > 1) {
                res += names[i].replace(nSplit[0], nSplit[0][0] + '.');
            } else {
                res += names[i];
            }
            if (i < names.length - 1) {
                res += ', ';
            }
        }
        res += ')';
    }
    return res;
}