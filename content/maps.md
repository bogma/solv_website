---
title: "OL Karten in Salzburg"
date: 2017-09-22T21:45:00+02:00
type: "page"
draft: false
disable_rightbar: true

add_scripts: "leaflet"

menu:
  main:
    name: "Karten"
    weight: 110
    identifier: "maps"
    parent: "solv"
---

<div id="map" style="width: 100%; height: 600px;"></div>
<script type="text/javascript">
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Map data © <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener">OpenStreetMap</a> and contributors <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener">CC-BY-SA</a>'
});
var map = L.map('map', { layers: osm, tap: false }).setView([47.5643, 13.1479], 9);
L.control.scale({ imperial: false }).addTo(map);
var geojson;
fetchJSON('/maps/maps.geojson')
  .then(function (data) {
    geojson = L.geoJSON(data, {style: style, onEachFeature: onEachFeature}).addTo(map);
  });
var info = L.control();
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};
// method that we will use to update the control based on feature properties passed
info.update = function (props, area) {
    var size = '';
    if (area) {
      size = ' ~ ' + (area / 1000000).toFixed(1) + ' km²';
    }
    var created = '', updated = '', title = '';
    if (props) {
      if (props.creationDate) {
        created = '<b>erstellt: </b>' + props.creationDate;
        created += buildNameList(props.createdBy);
        created += '<br />';
      }
      if (props.lastUpdate) {
        updated = '<b>aktualisiert: </b>' + props.lastUpdate;
        updated += buildNameList(props.updatedBy);
        updated += '<br />';
      }
      if (props.name) {
        title = '<h4>' + props.name;
        if (props.type) {
          title += ' <i>/' + props.type + '/</i>';
        }
        title += size + '</h4>'
      }
    }
    this._div.innerHTML = (props
      ? title +
        '<b>Verein: </b>' + props.owner + '<br />' +
        '<b>Äquidistanz: </b>' + props.ae + '<br />' +
        created + updated
      : 'Hover over a map');
};
info.addTo(map);
var legend = L.control({ position: "bottomleft" });
legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Legende</h4>";
  div.innerHTML += '<i style="background: ' + getColor('AHD') + '"></i><span>AHD</span><br>';
  div.innerHTML += '<i style="background: ' + getColor('HSW') + '"></i><span>HSW</span><br>';
  div.innerHTML += '<i style="background: ' + getColor('SHN') + '"></i><span>SHN</span><br>';
  div.innerHTML += '<i style="background: ' + getColor('TVZ') + '"></i><span>TVZ</span><br>';
  div.innerHTML += '<i style="background: ' + getColor('x') + '"></i><span>Andere</span><br>';
  return div;
};
legend.addTo(map);
</script>
