setInterval(function () {
    let r = $(window).height() - $('.container-home').height();

    $('.container-home').css({
        'padding-top': Math.round(r / 2) + 'px',
        'padding-bottom': Math.round(r / 2) + 'px'
    });
}, 10);
