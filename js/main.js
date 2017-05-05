'use strict';
// let ajax = require( './ajax' );
// ajax = ajax.__proto__;



(()=>{
    const me = "Mohseen";

    console.log(`hello ${me}!`);

    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene);

    (() => {
        // let ajax = new XMLHttpRequest();

        // ajax.onreadystatechange = () => {
        //     if( ajax.readyState === XMLHttpRequest.DONE ){
        //         if( ajax.status === 200 ){
        //             //loaded correctly
        //             console
        //             const dataset = [1, 1, 3, 1, 2, 1, 1, 1, 1, 1];

        //             const colors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];
        //         } 
        //         else{
        //             console.log( 'AJAX Response Error: '. ajax.status );
        //             const dataset = [1, 1, 1, 1, 2, 1, 1, 1, 1, 1];

        //             // let colors = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd'];
        //             // let colors = ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'];
        //             const colors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];
        //         }
        //     }
        // }
        // ajax.open( 'GET', '', true );
        // ajax.send();
        // console.log(ajax);
        
    })();
})();

(()=>{

    /**
    * @function addClass
    * @param  {element} element      Element whose class name needs to be altered
    * @param  {String } newClassName Class Name
    * @return None
    */
    const addClass = ( element, newClassName ) => {
        if( element !== undefined && newClassName !== undefined ){
            let classNames = element.className;
            if( !classNames.includes( newClassName ) ){
                element.className += ` ${newClassName}`;
            }
        }
        return;
    };

    /**
    * @function removeClass
    * @param  {element} element      Element whose class name needs to be altered
    * @param  {String } delClassName Class Name
    * @return None
    */
    const removeClass = ( element, delClassName ) => {
        if( element !== undefined && delClassName !== undefined ){
            if( element.className.includes( delClassName ) ){
                element.className = element.className.replace( new RegExp('(?:^|\\s)'+ delClassName + '(?:\\s|$)'), '' );
            }
        }
        return;
    };

    //http://codepen.io/madebyjam/pen/eBpegv
    //Animation on Scroll: https://github.com/michalsnik/aos
    //Pie Chart: http://codepen.io/Siddharth11/pen/LVQmjN

    window.onscroll = ()=>{
        const win = window;
        //
        // let navHeight = win.innerHeight - 70;
        // let nav = document.getElementById("nav-bar");
        // if( win.scrollY > navHeight ){
        //     if( nav.className.includes("fixed") ){}
        //     else
        //         nav.className += " fixed";
        // }
        // else
        //     nav.className = "";
        
        //titles reveal
        if( win.scrollY > 400 )
            // document.querySelector('.visible').className += " animated slideInUp";
            addClass( document.querySelector( '.visible' ), 'animated slideInUp' );
        else
            removeClass( document.querySelector( '.visible' ), 'animated slideInUp' );

        if( win.scrollY > ( 0.12 * win.innerHeight ) ){
            document.getElementById( 'first-header' ).style.visibility = 'visible';
            addClass( document.getElementById( 'first-header' ), 'animated zoomInDown' );
        }
        
        else
            removeClass( document.getElementById( 'first-header' ), 'animated zoomInDown' );

    };

    require( './pie' );
})();

// (()=>{
//     setTimeout(()=>{
//         document.getElementById("dev").className += " magictime spaceInUp";
//     }, 2000);
// })();
