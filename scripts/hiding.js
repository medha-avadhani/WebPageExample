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
