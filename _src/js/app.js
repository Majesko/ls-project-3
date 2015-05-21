
DragAndDrop = (function(){
    var init = function () {
        var $draggable = $('.draggabilly').draggabilly({
            containment: true
        });
        var draggie = $draggable.data('draggabilly');
        $draggable.on( 'dragMove', function() {
            $('.dragg-window__x').text(draggie.position.x);
            $('.dragg-window__y').text(draggie.position.y);
            console.log( 'dragMove', draggie.position.x, draggie.position.y );
        });

    };
    return {
        init: init
    };
})();

$(document).ready( function() {
    DragAndDrop.init();
});