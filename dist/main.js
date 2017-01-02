'use strict';

(function () {
    var me = "Mohseen";

    console.log('hello ' + me + '!');

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
})();

$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 70;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
});
//# sourceMappingURL=main.js.map