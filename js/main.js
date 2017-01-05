'use strict';

(()=>{
    const me = "Mohseen";

    console.log(`hello ${me}!`);

    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene);
})();

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
        
        if( window.scrollY > 400 )
            document.querySelector('.visible').className += " animated slideInUp";
    };
})();

// (()=>{
//     setTimeout(()=>{
//         document.getElementById("dev").className += " magictime spaceInUp";
//     }, 2000);
// })();

(()=>{
    
})();