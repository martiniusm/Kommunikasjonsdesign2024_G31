var map = L.map("map", { zoomControl: false }).setView([59.1258, 11.3883], 12);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  interactive: false,
}).addTo(map);
L.control
  .scale({
    position: "topleft",
    metric: true,
    imperial: false,
  })
  .addTo(map);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
if (map.tap) map.tap.disable();

const section_2 = document.getElementById("section_2");
let circleTwo;
document.addEventListener("scroll", () => {
  if (isInViewPort(section_2) && !circleTwo) {
    var circle = L.circle([59.1245, 11.3877], {
      color: "grey",
      fillColor: "red",
      fillOpacity: 0.2,
      radius: 2390,
    }).addTo(map);
    circleTwo = true;
  }
  {
  }
});

function isInViewPort(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
function changeBackground() {
  document.querySelectorAll("p").forEach((p) => {
    p.style.backgroundColor = "red";
  });
}

//GeoJson

var circle = L.circle([59.1245, 11.3877], {
  color: "grey",
  fillColor: "green",
  fillOpacity: 0.5,
  radius: 400,
}).addTo(map);
