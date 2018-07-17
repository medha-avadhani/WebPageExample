$(document).ready(function(){ 
	$("#submitBtn").click(function(){
		var password=$("#password").val();
		var confirmPassword=$("#confirmPassword").val();
		if(password != confirmPassword){
			alert("Password doesnot match");
			return false;
		}
		return true;
	});
	
});

