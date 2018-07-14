var x=document.getElementById("para");
function getLoc(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition,showError);
	}
	else{
		x.innerHTML="Location cannot be shown";
	}
}
function showPosition(position){
	var latlon=position.coords.latitude+","+position.coords.longitude;
	var img="https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBo1sIEIc_4oi-VhfKrVStPbpzLr7RG8X4";
	document.getElementById("map").innerHTML="<img src="+img+">";
	document.getElementById("latlong").innerHTML="Latitude:"+position.coords.latitude+"\n"+"Longitude:"+position.coords.longitude; 
}
function showError(error){
	switch(error.code){
		case error.PERMISSION_DENIED:
			x.innerHTML="Location information unavailable"
			break;
		case error.TIMEOUT:
			x.innerHTML="The request timeout"
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML="Unknow error"
			break;
	}
}