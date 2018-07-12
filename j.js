$(document).ready(function(){
	
	$("#bone").click(function(){
		$("#one").hide();
	});
	 $("#btwo").click(function(){ 
		$("#two").hide(); 
	}); 
	$("#t").click(function(){
		alert("username:"+ $("#usr").val());
	});
});
function check(){
	var i=document.getElementById("usr").vlaue;
	if(isNaN(i)){
		return true;
	}else{
		alert("Invalid input");
		return false;
	}
}
