$(function() {

// подключение переключателей значений
	var spinnerX = $('#x, #up-down').spinner({
            min: 0,
            max: 580,
            step: 1,
            numberFormat: "f",
            spin: DragAndDrop.setPozition
	    }),
        spinnerY = $('#y, #left-right').spinner({
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
        stop: DragAndDrop.setOpacity, // Из-за того что значения не успевают за
                                      // за ползунком.
		range: "min",
		value: 0,
		min: 0,
		max: 100,
		step: 1
	});

});
