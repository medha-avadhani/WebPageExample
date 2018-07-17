$(document).ready(function(){
	$("#submitBtn").click(function(event){
		
		event.preventDefault();
		// console.log("hi!");
		// console.log($('#pForm').serialize());
		$.ajax({
				type: "POST",
				url: "./php/registerForm1.php",
				data: $('#pForm').serialize(),
				success: function(data){
					alert(data);
					$('#pForm').trigger("reset");
				}
		});
		
		return false;
	});
		
});

