var main = function() {

	
	if (document.documentElement.clientWidth < 900) {
		stretch_button();
	}
	
}

var stretch_button = function() {
	var button_width = $('.btn').width();
	var new_button_width = button_width * 1.3;

	$('.btn').mouseenter(function() {
		$(this).animate({
			width: new_button_width
		}, 400);
	});
	$('.btn').mouseleave(function() {
		$(this).animate({
			width: button_width
		}, 400);
	});	
}

$(document).ready(main);
