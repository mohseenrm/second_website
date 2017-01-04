'use strict';

(function () {
    var me = "Mohseen";

    console.log('hello ' + me + '!');

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
})();

// $(document).ready(function(){
//     $(window).bind('scroll', function() {
//     var navHeight = $( window ).height() - 70;
//             if ($(window).scrollTop() > navHeight) {
//                 $('nav').addClass('fixed');
//             }
//             else {
//                 $('nav').removeClass('fixed');
//             }
//     });
// });
(function () {
    window.onscroll = function () {
        var navHeight = window.innerHeight - 70;
        var nav = document.getElementById("nav-bar");
        if (window.scrollY > navHeight) {
            if (nav.className.includes("fixed")) {} else nav.className += " fixed";
        } else nav.className = "";
    };
})();
//# sourceMappingURL=main.js.map