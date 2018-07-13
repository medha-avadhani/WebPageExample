$(document).ready(function(){
	$("#btn1").click(function(){
		console.log('Hello!');
		var cityName=$('#city').val();
		console.log(cityName);
		if(cityName != ''){
			var key='ea663da3cfd491eaabb18c92ab866709';
			$.ajax({
				url:"https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&APPID=ea663da3cfd491eaabb18c92ab866709&units=metric",
				type:"GET",
				dataType:"jsonp",
				// data:{q:cityName, APPID:key, units:'metric'},
			
				success:function(data){
					 console.log('success',data);
					//alert(data);
					var d='';
					$.each(data.weather,function(index,val){
						d+='<p><b>'+data.name+"</b><img src=http://openweathermap.org/img/w/"+val.icon+".png></p>"+data.main.temp + '&deg;C ' + '|' + val.main + "," + val.description
					});
					$("#WeatherResponse").html(d);

				},
				error: function(data,textStatus,errorThrown){
					alert(errorThrown);
					
				}
			});
		}
		else{
			alert("Field cannot be empty");
		}
	});
});