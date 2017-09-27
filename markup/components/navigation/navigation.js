// MENU APPEAR AND HIDE
$(document).ready(function () {

    'use strict';

    $(window).scroll(function () {

        if ($(window).scrollTop() > 80) {
            $('.navbar').addClass('navbar_scroll');
        } else {
            $('.navbar').removeClass('navbar_scroll');
        }
    });
});
