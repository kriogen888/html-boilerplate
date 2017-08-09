setInterval(function () {
    let r = $(window).height() - $('.container').height();

    $('.container').css({
        'padding-top': Math.round(r / 2) + 'px',
        'padding-bottom': Math.round(r / 2) + 'px'
    });
}, 10);
