

var inchMM = 25.4
var distanceArray = [ inchMM, 12*inchMM, 36*inchMM, inchMM*63360, 1, 10, 1000, 1000000 ]

var poundKG = 0.45359237
var weightArray = [ 1, 1/1000, 1/1000000, poundKG/16, poundKG, 14*poundKG, 2240*poundKG ]


var cubInchLTR = 0.016387064
var volumeArray = [ 1/1000, 1, 1/1000000, 1/1000, 1.0e3, 1.0e12, cubInchLTR, cubInchLTR*1728, 
					cubInchLTR*15552, cubInchLTR*84786020352000]

var timeArray = [ 1/1000, 1, 60, 3600, 3600*24, 3600*24*7, 3600*24*7*2 ]

var footM = 0.3048
var speedArray = [ 1, 1/3.6, footM, footM*5280/3600, 1609.334, 299792458 ]

var fC = 5/9
var temperatureArray = [ 1, fC, 299792458 ]




$(document).ready(function(){



	$('.btn').on('click', function(){

	var calculationArray

	if ($(this).closest('table').attr('id') == 'weight')
		calculationArray = weightArray
		 
	else if ($(this).closest('table').attr('id') == 'distance')
		calculationArray = distanceArray

	else if ($(this).closest('table').attr('id') == 'volume')
		calculationArray = volumeArray

	else if ($(this).closest('table').attr('id') == 'time')
		calculationArray = timeArray

	else if ($(this).closest('table').attr('id') == 'speed')
		calculationArray = speedArray

	else if ($(this).closest('table').attr('id') == 'temperature')
		calculationArray = temperatureArray


	// vars for the 2 input fields
	var firstVal = parseFloat($(this).closest('table').find(".field1").val());
	var secondVal = $(this).closest('table').find(".field2");
	
	// retrieves value from select list
	var select1 = parseInt($(this).closest('table').find('.sel1').val());
	var select2 = parseInt($(this).closest('table').find('.sel2').val());

	var result = calculationArray[select1] * firstVal / calculationArray[select2]

	secondVal.val(Math.round(result*10000000000)/10000000000);
	});



	// shows and hides convertion divs

	$('.distancetag').on('click', function(){
		$('.distance').show("slide", { direction: "left" }, 1100);
		$('.weight').hide("slide", { direction: "left" }, 1100);
		$('.volume').hide("slide", { direction: "left" }, 1100);
		$('.time').hide("slide", { direction: "left" }, 1100);
		$('.speed').hide("slide", { direction: "left" }, 1100);
		('.temperature').hide("slide", { direction: "left" }, 1100);
	});

	$('.weighttag').on('click', function(){
		$('.weight').show("slide", { direction: "left" }, 1100);
		$('.distance').hide("slide", { direction: "left" }, 1100);
		$('.volume').hide("slide", { direction: "left" }, 1100);
		$('.time').hide("slide", { direction: "left" }, 1100);
		$('.speed').hide("slide", { direction: "left" }, 1100);
		('.temperature').hide("slide", { direction: "left" }, 1100);
	});

	$('.volumetag').on('click', function(){
		$('.volume').show("slide", { direction: "left" }, 1100);
		$('.distance').hide("slide", { direction: "left" }, 1100);
		$('.weight').hide("slide", { direction: "left" }, 1100);
		$('.time').hide("slide", { direction: "left" }, 1100);
		$('.speed').hide("slide", { direction: "left" }, 1100);
	});

	$('.timetag').on('click', function(){
		$('.time').show("slide", { direction: "left" }, 1100);
		$('.volume').hide("slide", { direction: "left" }, 1100);
		$('.distance').hide("slide", { direction: "left" }, 1100);
		$('.weight').hide("slide", { direction: "left" }, 1100);
		$('.speed').hide("slide", { direction: "left" }, 1100);
		('.temperature').hide("slide", { direction: "left" }, 1100);
	});

	$('.speedtag').on('click', function(){
		$('.speed').show("slide", { direction: "left" }, 1100);
		$('.volume').hide("slide", { direction: "left" }, 1100);
		$('.distance').hide("slide", { direction: "left" }, 1100);
		$('.weight').hide("slide", { direction: "left" }, 1100);
		$('.time').hide("slide", { direction: "left" }, 1100);
		$('.temperature').hide("slide", { direction: "left" }, 1100);
	});

	$('.temperaturetag').on('click', function(){
		$('.temperature').show("slide", { direction: "left" }, 1100);
		$('.volume').hide("slide", { direction: "left" }, 1100);
		$('.distance').hide("slide", { direction: "left" }, 1100);
		$('.weight').hide("slide", { direction: "left" }, 1100);
		$('.time').hide("slide", { direction: "left" }, 1100);
		$('.speed').hide("slide", { direction: "left" }, 1100);
	});


	/* ******** RANDOM CONVERSION FACTS ********** */

	$('.small').on('click', function(){
		var number = Math.floor((Math.random()*6)+1);
		var find = ["#", number].join("");
		var rule = $('#inside')

		rule.hide("slide", { direction: "left"}, 1100, function(){
		$('#info div').hide();
		$(find).show();
		});

		rule.show("slide", { direction: "left" }, 1100);
	});

});

