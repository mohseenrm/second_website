'use strict';

(()=>{
    const me = "Mohseen";

    console.log(`hello ${me}!`);

    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene);
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
(()=>{
    window.onscroll = ()=>{
        let navHeight = window.innerHeight - 70;
        let nav = document.getElementById("nav-bar");
        if( window.scrollY > navHeight ){
            if( nav.className.includes("fixed") ){}
            else
                nav.className += " fixed";
        }
        else
            nav.className = "";
    };
})();