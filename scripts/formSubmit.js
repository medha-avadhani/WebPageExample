$(document).ready(function(){
	$('#form').submit(function(event){
		var formData={'firstName':$('#firstname').val(),
					'lastName':$('#lastname').val(),
					'gender':$('input[name=gender]').val(),
					'userName':$('#username').val(),
					'password':$('#password').val()};
		$.ajax({
			type:'POST',
			url:'../php/registerForm.php',
			data:formData,
			dataType:'json',
			encode:true
		})
		.done(function(data){
			console.log(data);
			if(!data.success){
				if(data.errors){
					console.log('Error!');
				}
			}
			else{
					$(.popUpForm).append('<div class="alert alert-success">' + data.message + '</div>');
			}
		})
		.fail(function(data){
			console.log(data);
		});
		event.preventDefault();
	});
});

