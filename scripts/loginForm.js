$(document).ready(function(){
	$("#loginBtn").click(function(event){
		
		event.preventDefault();
		console.log("hi!");
		// console.log($('#pForm').serialize());
		$.ajax({
				type: "POST",
				url: "./php/loginValidation.php",
				data: $('#lForm').serialize(),
				success: function(data){
					if(data == 1){
						window.location.href="http://localhost:8082/Internship/htmls/Welcome.html";
					}
					alert(data);
					$('#lForm').trigger("reset");
				}
		});
		
		return false;
	});
		
});

