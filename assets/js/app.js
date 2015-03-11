var main = function() {
	// $('primary-nav li').mouseenter(function() {
	// 	$('primary-nav hr').animate({
	// 		width: "50px"
	// 	}, 500)
	// });



	$('.btn').mouseenter(function() {
		$(this).animate({
			width: "80px"
		}, 200);
	});
	$('.btn').mouseleave(function() {
		$(this).animate({
			width: "53.38px"
		}, 200);
	});

	$('li').mouseenter(function() {
		$('ul hr').animate({
			width: "50px"
		}, 500);
	});

	
	
}

$(document).ready(main);
