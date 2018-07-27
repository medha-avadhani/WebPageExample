$(document).ready(function(){
	var RR_no = $("#searchBox").val();   
	$("#searchBtn").click(function(event){
		event.preventDefault();
		getData();
	});
	function getData(){
		$.ajax({
			method: "POST",
			url: "./php/Search.php",
			data: $("#searchForm").serialize(),
			dataType: "json",
			async:true,
			success:function(data){
				initMap(data);
				$("#searchForm").trigger("reset");
			},
			error:function(data){
				$("#response").html("<b>No such node!</b>");
        $("#searchForm").trigger("reset");
			}
		});
	}
	function initMap(data){
		var map = new google.maps.Map(document.getElementById('map'), {
                	center: new google.maps.LatLng(11.9716,76.2946),
                	zoom: 8
  			});
		var infoWindow = new google.maps.InfoWindow;
		for (var i = 0, length = data.length; i < length; i++) {
          	var jsonData = data[i],
			latLng = new google.maps.LatLng(jsonData.Latitude, jsonData.Longitude);
			var dt = jsonData.DateTime;
          	var DateTime = new Date(dt);
          	timeAgo = showTime(DateTime);
			if(jsonData.state == 0){
				var iconClr = "red-dot";
				var state = "Dead";
			} else{
				iconClr = "green-dot";
				state = "Active";
			}
      if(jsonData.Comment != null){
      var comment = "Comment:" + jsonData.Comment; 
    }else{
      comment = "";
    }
   	var marker = new google.maps.Marker({
         		   		    position: latLng,
                			map: map,
               				title: jsonData.RR_no + "\n" + state + "\n" + timeAgo + "\n" + Comment,
 	              			icon:"http://maps.google.com/mapfiles/ms/icons/"+ iconClr +".png",
   			});
    		marker.addListener('click', function() {
    			  infoWindow.open(map,marker);
    		});
		}
	}
	function showTime(DateTime){
      var today = new Date();
      var currentHour = today.getHours();
      var currentMinute = today.getMinutes();
      var currentSecond = today.getSeconds();
      var currentYear = today.getFullYear();
      var currentMonth = today.getMonth();
      var currentDay = today.getDate();
      var year = DateTime.getFullYear();
      var month = DateTime.getMonth();
      var day = DateTime.getDate();
      var hour = DateTime.getHours();
      var minute = DateTime.getMinutes();
      var second = DateTime.getSeconds();
      if(currentYear == year){
        if(currentMonth == month){
          if(currentDay == day){
            if(currentHour == hour){
              if(currentMinute == minute){
                var timeAgo = "Just now";
              }else{
                var minutesAgo = currentMinute - minute;
                if (minutesAgo == 1){
                  timeAgo = "1 minute ago";
                }else{
                  timeAgo = minutesAgo + " minutes ago";
                } 
              }
            }else{
              var hoursAgo = currentHour - hour;
              if (hoursAgo == 1){
                timeAgo = "1 hour ago";
              }else{
                timeAgo = hoursAgo + " hours ago";
              } 
            }
          }else{
            var daysAgo = currentDay - day;
            if (daysAgo == 1){
              timeAgo = "1 day ago";
            }else{
              timeAgo = daysAgo + " days ago";
            }    
          }
        }else{
          var monthsAgo = currentMonth - month;
          if (monthsAgo == 1){
            timeAgo = "1 month ago";
          }else{
            timeAgo = monthsAgo + " months ago ";
          } 
        }
      }else{
        var yearsAgo = currentYear - year;
        if (yearsAgo == 1){
          timeAgo = "1 year ago";
        }else{
          timeAgo = yearsAgo +" years ago";
        }
      }
      return timeAgo;
    }
});