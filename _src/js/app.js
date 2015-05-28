DragAndDrop = (function(){
    var $draggable = $('.draggabilly');;
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
            var value = ($(this).slider( "value" ))/100;
            $('.draggabilly__img').css('opacity',value)
        },
        setPozition = function () {
            var spinner = $(this),
                draggie = $draggable.data('draggabilly'),
                maxWidth = $draggable.parent().width() - $draggable.width(),
                maxHeigh = $draggable.parent().height() - $draggable.height();

            if((spinner.attr('id') === "x") && (spinner.spinner('value') <= maxWidth)){
                $draggable.css('left',spinner.spinner('value'));
            }
            else {
                if((spinner.attr('id') === 'y') && (spinner.spinner('value') <= maxHeigh))
                    $draggable.css('top',spinner.spinner('value'));
            }
            //console.log($(this).spinner("value"));
        },
        _setUpListeners = function () {
            $('.square__item').on('click',_moveAction);
            $('#x,#y').on('keyup',_setInputPosition);
        },
        _moveAction = function () {
            var vector = $(this).data('action'),
                numberSquare = $(this).data('number'),
                element = $draggable,
                widthWrapper = element.parent().width(),
                heightWrapper = element.parent().height(),
                width = widthWrapper/ 3,
                height = heightWrapper/ 3,
                count = 0;

            for(var i = 0; i < 3; i++)
                for(var j = 0;j < 3; j++ ){
                    if(count == numberSquare){
                        _setPositionOnClick(element,i*height,j*width);
                        i = 3;
                        break;
                    }
                    count++;
                }
            _getPozition();
            /*switch (vector){
                case 'south-west':
                    _setPositionOnClick(element,0,0);
                    break;
                case 'south':
                    _setPositionOnClick(element,0,width);
                    break;
                case 'south-east':
                    _setPositionOnClick(element,0,2*width);
                    break;
                case 'east':
                    _setPositionOnClick(element,height,2*width);
                    break;
                case 'center':
                    _setPositionOnClick(element,height,width);
                    break;
                case 'north-east':
                    _setPositionOnClick(element,2*height,2*width);
                    break;
                case 'north':
                    _setPositionOnClick(element,2*height,width);
                    break;
                case 'north-west':
                    _setPositionOnClick(element,2*height,0);
                    break;
                case 'west':
                    _setPositionOnClick(element,height,0);
                    break;
            }*/
        },
        _getPozition = function(){
            var draggie = $draggable.data('draggabilly');
            $('#x').val(Math.floor($draggable.position().left));
            $('#y').val(Math.floor($draggable.position().top));
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
                    'top': top
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