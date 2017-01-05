'use strict';

(()=>{
    const me = "Mohseen";

    console.log(`hello ${me}!`);

    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene);
})();

(()=>{

    const addClass = ( element, newClassName ) => {
        if( element !== undefined && newClassName !== undefined ){
            let classNames = element.className;
            if( !classNames.includes( newClassName ) ){
                element.className += ` ${newClassName}`;
            }
        }
        return;
    };

    const removeClass = ( element, delClassName ) => {
        if( element !== undefined && delClassName !== undefined ){
            if( element.className.includes( delClassName ) ){
                element.className = element.className.replace( new RegExp('(?:^|\\s)'+ delClassName + '(?:\\s|$)'), '' );
            }
        }
        return;
    };

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
            // document.querySelector('.visible').className += " animated slideInUp";
            addClass( document.querySelector( '.visible' ), 'animated slideInUp' );
        else
            removeClass( document.querySelector( '.visible' ), 'animated slideInUp' );
    };
})();

// (()=>{
//     setTimeout(()=>{
//         document.getElementById("dev").className += " magictime spaceInUp";
//     }, 2000);
// })();

(()=>{
    
})();