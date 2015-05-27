
$(function() {

// подключение переключателей значений
	var spinner = $('#x, #y, #up-down, #left-right').spinner({
		min: 0,
		max: 1000,
		step: 1

	});
});

$(function() {
	$(".sidebar__opacity-slider" ).slider({
		range: "min",
		min: 0,
		max: 100,
		value: 60,
		slide: function( event, ui ) {
			$(".sidebar__opacity-value").val( ui.value );
		}
	});
	$(".sidebar__opacity-value").val($(".sidebar__opacity-slider").slider("value"));
});