$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-150px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '-100px'
        }, 'slow');
    });
});