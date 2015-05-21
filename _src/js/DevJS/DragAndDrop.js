DragAndDrop = (function(){
    var init = function (){
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
        $draggable.on( 'dragMove', _getPozition);
        // Изменение opacity у картинки
        $draggSlider.on( 'dragMove', _setOpacity);
        },
        _getPozition = function(){
            var draggie = $(this).data('draggabilly');
            $('.dragg-window__x').text(draggie.position.x);
            $('.dragg-window__y').text(draggie.position.y);
        },
        _setOpacity = function() {
            var draggieSlide = $(this).data('draggabilly'),
                pozitionDraggSlide = draggieSlide.position.x,
                fullWidth = $(this).parent().width(),
                valueOpacity = pozitionDraggSlide/fullWidth;

            $('.dragg-slider__window').text(draggieSlide.position.x);
            $('.draggabilly__img').css('opacity',valueOpacity)
        };
    return {
        init: init
    };
})();
