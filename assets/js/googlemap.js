// # Harvard Referencing (HR5)
function initMap() {
    var location = {lat:52.629780, lng:-1.139370};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 14,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map

    });
}
