var main = function() {

	
		stretch_button();
	
}
var stretch_button = function() {
	var body_width = $('body').width();
	if(body_width > 1370) {
		$('.btn').mouseenter(function() {
		$(this).animate({
			width: "120px"
		}, 400);
		});
		$('.btn').mouseleave(function() {
			$(this).animate({
				width: "100px"
			}, 400);
		});	
	}
	else if(body_width > 532) {
		$('.btn').mouseenter(function() {
		$(this).animate({
			width: "70px"
		}, 400);
		});
		$('.btn').mouseleave(function() {
			$(this).animate({
				width: "53.38px"
			}, 400);
		});	
	}
}

// var stretch_button = function() {

// 	var button_width = $('.btn').width();
// 	var new_button_width = button_width * 1.3;

// 	$('.btn').mouseenter(function() {
// 		$(this).animate({
// 			width: new_button_width
// 		}, 400);
// 	});
// 	$('.btn').mouseleave(function() {
// 		$(this).animate({
// 			width: button_width
// 		}, 400);
// 	});	
// }

$(document).ready(main);
