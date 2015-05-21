DragAndDrop = (function(){
    var init = function (){
        var $draggable = $('.draggabilly').draggabilly({
            // Значит, что область, по которой мы можем передвигать элемент ограниченна контейнером.
            containment: true
        });
        var draggie = $draggable.data('draggabilly');
        // Метод срабатывающий при старте, рассчитывает позицию левого верхнего угла,
        // вывожу для примера.
        $draggable.on( 'dragMove', function() {
            $('.dragg-window__x').text(draggie.position.x);
            $('.dragg-window__y').text(draggie.position.y);
        });
    };
    return {
        init: init
    };
})();
