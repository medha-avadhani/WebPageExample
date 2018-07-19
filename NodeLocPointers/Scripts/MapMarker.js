function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(20.5937,78.9629),
                zoom: 4
  });
  var infoWindow = new google.maps.InfoWindow;
  downloadUrl('./php/XMLoutput.php', function(data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName('marker');
        Array.prototype.forEach.call(markers, function(markerElem) {
            var id = markerElem.getAttribute('ID');
            var name = markerElem.getAttribute('Name');
            var point = new google.maps.LatLng(
                        parseFloat(markerElem.getAttribute('Latitude')),
                        parseFloat(markerElem.getAttribute('Longitude')));
            var infowincontent = document.createElement('div');
            var strong = document.createElement('strong');
            strong.textContent = name
            infowincontent.appendChild(strong);
            infowincontent.appendChild(document.createElement('br'));
            var marker = new google.maps.Marker({
                         map: map,
                         position: point,
               });
            marker.addListener('click', function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
            });
        });
  });
}
function downloadUrl(url, callback) {
    var request = window.ActiveXObject ?
    new ActiveXObject('Microsoft.XMLHTTP') :
    new XMLHttpRequest;

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
        }
    };
    request.open('GET', url, true);
    request.send(null);
}
function doNothing() {}
    