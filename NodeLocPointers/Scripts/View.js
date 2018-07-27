$(document).ready(function(){
	$('#view').click(function(){
		$.ajax({
				type: "POST",
				url: "./php/View.php",
				async:false,
				success: function(data){
					$('#Display').html(data);
				}
		});
	});
	$.ajax({
		type:"POST",
		url: "./php/activeDeadNodesCount.php",
		async:false,
		success: function(data){
			$('#nodeInfo').html(data);
		}
	});
});