$(document).ready(function(){
	$.ajax({
		type: "POST",
		url: "./php/selectOption.php",
		async:false,
		success: function(data){
			$('#select').html(data);
		}
	});
});