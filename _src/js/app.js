DragAndDrop = (function(){
    var $draggable = $('.draggabilly');
    var init = function (){
            _setUpListeners();
            var $draggable = $('.draggabilly').draggabilly({
                    // Значит, что область, по которой мы можем передвигать элемент
                    // ограниченна контейнером.
                    containment: true
                }),
                $draggSlider = $('.dragg-slider__slide').draggabilly({
                    containment: true,
                    // Передвижение только в п пределах ОХ
                    axis: 'x'
                });
            // Метод срабатывающий при старте, рассчитывает позицию левого верхнего угла,
            // вывожу для примера.
            $draggable.on('dragMove', _getPozition);
        },
        setOpacity = function() {
            var value = 1  - ($(this).slider( "value" )) / 100,
                field = $('.sidebar__opacity');
            $('.draggabilly__img').css('opacity',value);
            field.attr('data-opacity',value);

        },
        // Функция вызывается плагином spinner при нажатии на стрелочки
        // или при зажиме стрелочек
        setPozition = function () {
            var spinner = $(this),
                switchInput = spinner.parent().find('input'),
                spinnerValue = spinner.spinner('value') + 1,
                draggie = $draggable.data('draggabilly'),
                maxWidth = $draggable.parent().width() - $draggable.width(),
                maxHeigh = $draggable.parent().height() - $draggable.height();

            if((spinner.attr('id') === "x") && (spinnerValue <= maxWidth)){
                $draggable.css('left',spinnerValue);
                switchInput.attr('data-position-x',spinnerValue);
            }
            else {
                if((spinner.attr('id') === 'y') && (spinnerValue <= maxHeigh)) {
                    $draggable.css('top', spinnerValue);
                    switchInput.attr('data-position-y', spinnerValue);
                }
            }
            _dontActiveSquare();
        },
        _setUpListeners = function () {
            $('.square__item').on('click',_moveAction);
            $('#x,#y').on('keyup',_setInputPosition);
        },
        _moveAction = function () {
            var $this = $(this),
                vector = $this.data('action'),
                element = $draggable,
                widthWrapper = element.parent().width(),
                heightWrapper = element.parent().height(),
                elementHalfWidth = element.width()/ 2,
                elementHalfHeight = element.height()/ 2,
                width = 0,
                height = 0;

            switch (vector){
                case 'south-west':
                    break;
                case 'south':
                    width = widthWrapper/2 - elementHalfWidth;
                    break;
                case 'south-east':
                    width = widthWrapper - 2*elementHalfWidth;
                    break;
                case 'east':
                    height = heightWrapper/2 - elementHalfHeight;
                    width =  widthWrapper - 2*elementHalfWidth;
                    break;
                case 'center':
                    width = widthWrapper/2 - elementHalfWidth;
                    height = heightWrapper/2 - elementHalfHeight;
                    break;
                case 'north-east':
                    width = widthWrapper - 2*elementHalfWidth;
                    height = heightWrapper - 2*elementHalfHeight;
                    break;
                case 'north':
                    width = widthWrapper/2 - elementHalfWidth;
                    height = heightWrapper - 2*elementHalfHeight;
                    break;
                case 'north-west':
                    height = heightWrapper - 2*elementHalfHeight;
                    break;
                case 'west':
                    height = heightWrapper/2 - elementHalfHeight;
                    break;
            }
            _setPositionOnClick(element,height,width);
            _getPozition();
            $this.addClass('active');
        },
        _getPozition = function(){
            var draggie = $draggable.data('draggabilly'),
                top = $draggable.position().top,
                left = $draggable.position().left;
            // Приписал Mаth для того чтобы не сыпались значения типа float.
            // Да, я не знаю как ограничить число символов в input'e
            $('#x').val(Math.floor(left));
            $('#y').val(Math.floor(top));
            _dontActiveSquare();
            _setAtributes(left,top)
        },
        _setPositionOnClick = function (element,top,left){
            element.css('top',top);
            element.css('left',left);
        },
        _setInputPosition = function () {
            var element = $draggable,
                value = $(this).val(),
                vector = $(this).attr('id'),
                nowValue = element.position(),
                top = vector === "x"? nowValue.top: value,
                left = vector === "x"? value: nowValue.left;
                element.animate({
                    'left': left,
                    'top' : top
                });
            _setAtributes(top,left);
            _dontActiveSquare();
        },
        _setAtributes = function(x,y) {
            $('#x').attr('data-position-x',x);
            $('#y').attr('data-position-y',y);
        },
        _dontActiveSquare = function () {
            var squares = $('.square__item');
            $.each(squares,function(index,value){
                $(value).removeClass('active');
            });
        };
    return {
        init: init,
        setOpacity: setOpacity,
        setPozition: setPozition
    };
})();

;$(document).ready( function() {
    DragAndDrop.init();
});


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