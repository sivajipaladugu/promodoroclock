
let timerState = 'off';

	// Initialize time variables to HTML values:
	var breakTime = parseInt($("#breakTime").text());
	var sessionTime = parseInt($("#clock").text());
	var clock = parseInt($("#sessionTime").text());

	// Adjust variables based on user input:
	$("#breakIncrease").click(function() {
		breakTime += 1;
		document.getElementById("breakTime").innerHTML = breakTime;
	});

	$("#breakDecrease").click(function() {
		if (breakTime == 1) {
			alert("You need a longer break!");
		}
		else {
		breakTime -= 1;
		document.getElementById("breakTime").innerHTML = ("" + breakTime + "");
		}
	});

	$("#sessionIncrease").click(function() {
		if (sessionTime == 60) {
			alert("You don't need to work that long, give yourself a break!");
		}
		else {
		sessionTime += 1;
		document.getElementById("sessionTime").innerHTML = sessionTime;
		document.getElementById("clock").innerHTML = (sessionTime + ":00");
		}
	});

	$("#sessionDecrease").click(function() {
		if (sessionTime == 15) {
			alert("Don't be lazy, work longer!");
		}
		else {
		sessionTime -= 1;
		document.getElementById("sessionTime").innerHTML = sessionTime;
		document.getElementById("clock").innerHTML = (sessionTime + ":00");
		}
	});

	// Clock Functions:
	$('#startTimer').click(function () {
    
    if (timerState === 'off') {
      
      timerState = 'on';

      duration = sessionTime * 60;

        document.getElementById("breakIncrease").disabled = true;
        document.getElementById("breakDecrease").disabled = true;
        document.getElementById("sessionIncrease").disabled = true;
        document.getElementById("sessionDecrease").disabled = true;
        document.getElementById("restart").disabled = true;
        document.getElementById("preview").disabled = true;   

        startTimer(duration);
      
    }

	});

	$("#preview").click(function() {
		sessionTime = 1/6; 
		breakTime = 5;

		$("#startTimer").trigger("click");
	})

	function startTimer(duration) {

	    var timer = duration, minutes, seconds;
	    
	    var intervalFunction = setInterval(function () {

	        minutes = parseInt(timer / 60, 10)
	        seconds = parseInt(timer % 60, 10);
	      
	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        document.getElementById("clock").innerHTML = ( minutes + ":" + seconds );
        	document.getElementById("sessionTitle").innerHTML = "Focus!";
	        $(".box").css('border', '2px solid rgb(4, 172, 203)');
		    $(".begin").css('color', 'rgba(1,1,1,0)');
	        $('body').css('background', 'rgb(25, 41, 58)');
		    $(".previewBox").fadeOut('slow');
		    $(".break").css({'background': 'rgba(1,1,1,0)', 'border': '2px solid rgba(1,1,1,0)', 'color': 'rgba(1,1,1,0)'});
		    $(".length").css({'background': 'rgba(1,1,1,0)', 'border': '2px solid rgba(1,1,1,0)', 'color': 'rgba(1,1,1,0)'});
		    $(".increase").css({'background': 'rgba(1,1,1,0)', 'border': '2px solid rgba(1,1,1,0)', 'color': 'rgba(1,1,1,0)'});
		    $(".decrease").css({'background': 'rgba(1,1,1,0)', 'border': '2px solid rgba(1,1,1,0)', 'color': 'rgba(1,1,1,0)'});
		    $("#restart").fadeOut('slow');
		    $(".credits").fadeOut('slow');
		    $(".secondCredits").fadeOut('slow');

	        if (--timer == -1) {

	        	time = breakTime;
	        	$('body').css('background', 'rgb(153, 10, 238)');
	        	$("#startTimer").css('background', 'rgb(218, 66, 77)');
	        	$('.title').css('color', 'white');

	        	document.getElementById("sessionTitle").innerHTML = "Break Time!";

	        	startBreak(time);
	        	clearInterval(intervalFunction);
            timerState = 'off';
	        	return;
	        }

	    }, 1000);

	}

	function startBreak(time) {

	    var timer = time, minutes, seconds;
	    
	    var breakFunction = setInterval(function () {

	        minutes = parseInt(timer / 60, 10)
	        seconds = parseInt(timer % 60, 10);
	      
	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        document.getElementById("clock").innerHTML = ( minutes + ":" + seconds );

	        if (--timer == -1) {
	        	
	        	$('body').css('background', 'rgb(4, 172, 203)');
	        	$("#startTimer").css({'color': 'black', 'background': 'rgb(217, 92, 63)'});
	        	$(".title").css('color', 'white');
	        	$(".credits").css('color', 'white');
	        	$(".links").css('color', 'white');
	            $("#startTimer").css('border', '2px solid white');
                document.getElementById("startTimer").innerHTML = "You finished,<br>way to go!";
                
	        
	        }

	    }, 1000);

	}

// Restart Clock button reloads page:
$("#restart").click(function() {
  	document.getElementById("clock").innerHTML = "25:00";
		document.getElementById("sessionTime").innerHTML = "25";
    document.getElementById("breakTime").innerHTML = "5";
 
})