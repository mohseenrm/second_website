'use strict';
(()=>{
    const me = 'Mohseen';
    console.log(`hello ${me}!`);
})();

(()=>{
    // /**
    // * @function addClass
    // * @param  {element} element      Element whose class name needs to be altered
    // * @param  {String } newClassName Class Name
    // * @return None
    // */
    // const addClass = ( element, newClassName ) => {
    //     if( element !== undefined && newClassName !== undefined ){
    //         let classNames = element.className;
    //         if( !classNames.includes( newClassName ) ){
    //             element.className += ` ${newClassName}`;
    //         }
    //     }
    //     return;
    // };

    // /**
    // * @function removeClass
    // * @param  {element} element      Element whose class name needs to be altered
    // * @param  {String } delClassName Class Name
    // * @return None
    // */
    // const removeClass = ( element, delClassName ) => {
    //     if( element !== undefined && delClassName !== undefined ){
    //         if( element.className.includes( delClassName ) ){
    //             element.className = element.className.replace( new RegExp('(?:^|\\s)'+ delClassName + '(?:\\s|$)'), '' );
    //         }
    //     }
    //     return;
    // };

    //http://codepen.io/madebyjam/pen/eBpegv
    //Animation on Scroll: https://github.com/michalsnik/aos
    //Pie Chart: http://codepen.io/Siddharth11/pen/LVQmjN

    // window.onscroll = ()=>{
    //     const win = window;
        
    //     //titles reveal
    //     if( win.scrollY > 400 )
    //         // document.querySelector('.visible').className += " animated slideInUp";
    //         addClass( document.querySelector( '.visible' ), 'animated slideInUp' );
    //     else
    //         removeClass( document.querySelector( '.visible' ), 'animated slideInUp' );

    //     if( win.scrollY > ( 0.12 * win.innerHeight ) ){
    //         document.getElementById( 'first-header' ).style.visibility = 'visible';
    //         addClass( document.getElementById( 'first-header' ), 'animated zoomInDown' );
    //     }
        
    //     else
    //         removeClass( document.getElementById( 'first-header' ), 'animated zoomInDown' );

    // };

})();
require( './pie' );
require( './panels' );
require( './bio' );