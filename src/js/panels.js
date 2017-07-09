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
/* global $, TweenMax */
import { isMobile } from './utils';

( () => {
	let $first = $( '#first' ),
		$second = $( '#second' ),
		$third = $( '#third' ),
		$fourth = $( '#fourth' ),
		isMobileDevice = isMobile.any();

    // console.log( 'Mobile Check: ', isMobileDevice );
	function onExpanded (){
		console.log( 'called now: ', this );

		// let titleElement = document.createElement( 'div' );
		/*titleElement.innerHTML = titleString;
		titleElement.className = 'image-wrapper--title';*/


		$( this ).children()
			.fadeIn( 'slow' )
			.children()
			.addClass( 'fade-in' )
			.removeClass( 'none' );

		console.log( 'Children: ', $( this ).children() );

		// panelCache[ this.id ].append( titleElement );
	}

    /**
     *  Normal Hover Event Handlers
     */
	function onHover () {
        //maximize current fella
		TweenMax.to( this, 1.5, {
			css: {
				'width': '100%',
				'border': '0px'
			}
		} );
        //shrink siblings
		TweenMax.to( $( this ).siblings(), 1.5, {
			css: {
				'width': '0%',
				'border-right': '0'
			},
			onComplete: onExpanded.bind( this )
		} );
	}
	function offHover () {
		$( this ).children()
			.children()
			.removeClass( 'fade-in' )
			.addClass( 'none' );
        //resize and reapply border
		TweenMax.to( [ $first, $second, $third ], 1, {
			css: {
				'width': '25%',
				'border-right': '2px solid #f2994a'
			}
		} );
        //this is for the last one
        //don't want the border on the last image
		TweenMax.to( $fourth, 1, {
			css: {
				'width': '25%',
				'border-right': '0px'
			}
		} );
	}
    /**
     *  Mobile Hover Event Handlers
     */
	function mOnHover () {
        //maximize current fella
		TweenMax.to( this, 1.5, {
			css: {
				'height': '100%',
				'border': '0px'
			}
		} );
        //shrink siblings
		TweenMax.to( $( this ).siblings(), 1.5, {
			css: {
				'height': '0%',
				'border-bottom': '0'
			}
		} );
	}
	function mOffHover () {
        //resize and reapply border
		TweenMax.to( [ $first, $second, $third ], 1, {
			css: {
				'height': '25%',
				'border-bottom': '2px solid #f2994a'
			}
		} );
        //this is for the last one
        //don't want the border on the last image
		TweenMax.to( $fourth, 1, {
			css: {
				'height': '25%',
				'border-bottom': '0px'
			}
		} );
	}
    // Mobile Code
	if ( isMobileDevice !== null ){
        // apply to all
        // TODO: add same event handlers to tap events
		$first.hover( mOnHover, mOffHover );
		$second.hover( mOnHover, mOffHover );
		$third.hover( mOnHover, mOffHover );
		$fourth.hover( mOnHover, mOffHover );
	} else {
        // $first.hover(onHover, offHover);
		$fourth.css( { 'border': '0px' } );

        // apply to all
		$first.hover( onHover, offHover );
		$second.hover( onHover, offHover );
		$third.hover( onHover, offHover );
		$fourth.hover( onHover, offHover );
	}
} )();