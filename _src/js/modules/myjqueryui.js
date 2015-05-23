$(function() {

// подключение переключателей значений
	var spinner = $('#x, #y').spinner({
		min: 0,
		max: 1000,
		step: 1

	});

// подключение ползунка 
	$('.sidebar__opacity-slider').slider({
		animate: true,
		range: "min",
		value: 50,
		min: 1,
		max: 100,
		step: 1
	});
});