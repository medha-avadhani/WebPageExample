function check(){
	var ip=document.getElementById("id");
	if(!ip.checkValidity()){
		document.getElementById("para").innerHTML=ip.validationMessage;
	}
}