$(function() {

// подключение переключателей значений
	var spinner = $('#x, #y, #up-down, #left-right').spinner({
		min: 0,
		max: 1000,
		step: 1,
        numberFormat: "f",
            spin: DragAndDrop.setPozition

	});

// подключение ползунка 
	$('.sidebar__opacity-slider').slider({
		animate: true,
        slide: DragAndDrop.setOpacity,
		range: "min",
		value: 100,
		min: 1,
		max: 100,
		step: 1
	});

});