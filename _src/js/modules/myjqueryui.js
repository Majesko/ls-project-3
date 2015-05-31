$(function() {

// подключение переключателей значений
	var spinnerX = $('#x, #up-down').spinner({
		min: 0,
		max: 580,
		step: 1,
        numberFormat: "f",
        spin: DragAndDrop.setPozition
	});

    var spinnerY = $('#y, #left-right').spinner({
        min: 0,
        max: 464,
        step: 1,
        numberFormat: "f",
        spin: DragAndDrop.setPozition
    });

// подключение ползунка 
	$('.sidebar__opacity-slider').slider({
		animate: true,
        slide: DragAndDrop.setOpacity,
		range: "min",
		value: 0,
		min: 1,
		max: 100,
		step: 1
	});

});