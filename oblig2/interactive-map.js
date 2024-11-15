var interactive_map = L.map("interactive-map").setView([59.1258, 11.3883], 12);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(interactive_map);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(interactive_map);
  var popupElement = document.querySelector(".leaflet-popup");
  if (popupElement) {
    popupElement.style.zIndex = 1000;
  }
}

interactive_map.on("click", onMapClick);

var circle = L.circle([59.117829, 11.343599], {
  color: "grey",
  fillColor: "blue",
  fillOpacity: 0.3,
  radius: 400,
}).addTo(interactive_map);
var marker = L.marker([59.117829, 11.343599]).addTo(interactive_map);
marker.bindPopup(
  "Dette området ligger nær industri, og er nogenlunde nær sentrum. Her er det i tillegg god tilgang for både skip og tog. Utfordringene her er både terreng og natur. Det finnes ingen tidligere infrastruktur å belage seg på heller."
);

var circle = L.circle([59.108202, 11.294629], {
  color: "grey",
  fillColor: "blue",
  fillOpacity: 0.3,
  radius: 400,
}).addTo(interactive_map);
var marker2 = L.marker([59.108202, 11.294629]).addTo(interactive_map);
marker2.bindPopup(
  "Her er det også god tilgang for skip, men ikke tog. Området er et relativt godt stykke unna industri og boligområder. I tillegg til dette er det utfordrende terreng og natur, og lite infrastruktur."
);

var circle = L.circle([59.145311, 11.475218], {
  color: "grey",
  fillColor: "blue",
  fillOpacity: 0.3,
  radius: 400,
}).addTo(interactive_map);
var marker3 = L.marker([59.145311, 11.475218]).addTo(interactive_map);
marker3.bindPopup(
  "Dette området er et stykke unna industrien og boligene, men det har god tilgang på vann. Terrenget kan gjøre det vanskelig å bygge her, i tillegg må masse naturområder forkastes."
);
