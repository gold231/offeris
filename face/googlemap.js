function initialize(canvas, lat1, lat2, title) {
  var map = new google.maps.Map(document.getElementById(canvas), {
    center: {lat: lat1, lng: lat2},
    zoom: 16
  });
  var marker = new google.maps.Marker({
    position: {lat: lat1, lng: lat2},
    map
  });
  const infoWindow = new google.maps.InfoWindow();
  marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent(title);
    infoWindow.open(marker.getMap(), marker);
  });


}
