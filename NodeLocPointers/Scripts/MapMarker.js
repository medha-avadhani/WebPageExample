function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(11.9716,76.2946),
                zoom: 8
  });
  var infoWindow = new google.maps.InfoWindow;
  downloadUrl('./php/XMLoutput.php', function(data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName('marker');
        Array.prototype.forEach.call(markers, function(markerElem) {
            var id = markerElem.getAttribute('ID');
            var RR_no = markerElem.getAttribute('RR_no');
            var point = new google.maps.LatLng(
                        parseFloat(markerElem.getAttribute('Latitude')),
                        parseFloat(markerElem.getAttribute('Longitude')));
            var state = markerElem.getAttribute('state');
            var infowincontent = document.createElement('div');
            var strong = document.createElement('strong');
            strong.textContent = RR_no
            infowincontent.appendChild(strong);
            infowincontent.appendChild(document.createElement('br'));
            if( state == 1)
              var iconClr="green-dot";
            else 
               iconClr="red-dot";
            var marker = new google.maps.Marker({
                         map: map,
                         position: point,
                         icon:"http://maps.google.com/mapfiles/ms/icons/"+iconClr+".png",
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
    

