'use strict';
/*
___  ___      _
|  \/  |     | |
| .  . | ___ | |__  ___  ___  ___ _ __
| |\/| |/ _ \| '_ \/ __|/ _ \/ _ \ '_ \
| |  | | (_) | | | \__ \  __/  __/ | | |
\_|  |_/\___/|_| |_|___/\___|\___|_| |_|
___  ___      _             _     _
|  \/  |     | |           | |   | |
| .  . |_   _| | ____ _  __| | __| | __ _ _ __ ___
| |\/| | | | | |/ / _` |/ _` |/ _` |/ _` | '_ ` _ \
| |  | | |_| |   < (_| | (_| | (_| | (_| | | | | | |
\_|  |_/\__,_|_|\_\__,_|\__,_|\__,_|\__,_|_| |_| |_|

The MIT License

Copyright (c) 2010-2017 Mohseen Mukaddam (mohseenmukaddam6@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
( () => {
    const me = 'Mohseen';
    console.log( `hello ${ me }!` );
} )();

( () => {
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

} )();
// TODO: generate prefix
require( './scroll' );
require( './pie' );
require( './panels' );
require( './references' );
require( './gallery' );