var wins = 0;
var losses = 0;
var blue = 0;
var math = 0;


var number = Math.floor((Math.random()* 100) + 19);


var blue = Math.floor((Math.random()* 12) + 1);
var diamonshape = Math.floor((Math.random()* 12) + 1);
var orange  = Math.floor((Math.random()* 12) + 1);
var round = Math.floor((Math.random()* 12) + 1);

var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.math').empty();
	$('.math').append(math);
	
}

var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('.number').empty();
	$('.number').append(number);

	blue = Math.floor((Math.random()* 12) + 1);
    diamondshape = Math.floor((Math.random()* 12) + 1);
    orange = Math.floor((Math.random()* 12) + 1);
    round = Math.floor((Math.random()* 12) + 1);
    configmath();
}

var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		configmath();
}}
//
	$('.math').append(math);
	$('.number').append(number);

	$(document).ready(function(){
	$('#blue').click(function(){
		math = math + blue;
		config();
	})
	$('#diamondshape').click(function(){
		math  = math  + diamondshape;
		config();
	})
	$('#orange').click(function(){
		math  = math  + orange;
		config();
	})
	$('#round').click(function(){
		math  = math  + round;
		config();
	})
});
