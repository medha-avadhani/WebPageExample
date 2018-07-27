$(document).ready(function(){
	$("#commentSubmit").click(function(event){
		console.log("hi");
		event.preventDefault();
		$.ajax({
			method:"POST",
			url:"./php/Comment.php",
			data:$("#commentNode").serialize(),
			success: function(data){
				console.log(data);
				$("#commentNode").trigger("reset");
			},
			error:function(data){
				console.log(data);
			}
		});
	});
});