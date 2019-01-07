---
title: "OL Karten in Salzburger"
date: 2017-09-22T21:45:00+02:00
tpye: "page"

disable_rightbar: true

menu:
  main:
    name: "Karten"
    weight: 110
    identifier: "maps"
    parent: "solv"
---

<div id="map" style="width: 500px; height: 400px;"></div>
<script type="text/javascript">
{{< mapdata >}}
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: new google.maps.LatLng(47.565352, 13.170064),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
{{</ mapdata >}}
</script>
