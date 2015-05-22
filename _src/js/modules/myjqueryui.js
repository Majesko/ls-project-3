$(function() {
	$('.sidebar__opacity-slider').slider({
		animate: true,
		range: "min",
		value: 50,
		min: 1,
		max: 100,
		step: 1
	});
});