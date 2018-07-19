$(document).ready(function(){
	$("#save").click(function(event){
		event.preventDefault();
		$.ajax({
			method:"POST",
			url:"./php/Save.php",
			data:$("#markerForm").serialize(),
			success: function(data){
				alert(data);
				$("#markerForm").trigger("reset");
			}
		});
		return false;
	});
});