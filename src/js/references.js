/* eslint indent: ["error", "tab"] */
/* global TimelineMax */
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
	const text = document.getElementById( 'reference-text' ),
		author = document.querySelector( '.wrapper--author' );

	let tl = new TimelineMax( {
			repeat: -1,
			repeatDelay: 0.1,
			paused: true
		} ),
		topLine = document.getElementById( 'top-line' ),
		bottomLine = document.getElementById( 'bottom-line' );

	console.log( 'Text', text );

	let Toffset = topLine.getBoundingClientRect(),
		Boffset = bottomLine.getBoundingClientRect();

	const calculateOffset = ( topOffset, bottomOffset ) => {
		if( topOffset || bottomOffset )
			return( ( bottomOffset.top - topOffset.top )/2 - bottomOffset.height/2 );
	};

	let offset = calculateOffset( Toffset, Boffset );
	console.log( offset );

	//weird bug with calculating exact offset onload
	setTimeout( () => {
		Toffset = topLine.getBoundingClientRect();
		Boffset = bottomLine.getBoundingClientRect();
		//TODO: add css prefix for flex
		offset = calculateOffset( Toffset, Boffset );
		tl.set( [ text, author ], {
			css: {
				'display': 'none',
				'opacity': '0'
			}
		} )
		.set( topLine, {
			css: {
				'opacity': '0'
			}
		} )
		.set( [ topLine, bottomLine ], {
			css: {
				'margin': '0',
				// 'display': 'none',
				'width': '3px'
			}
		} );

		tl.add( 'start' )
			.to( [ topLine, bottomLine ], 3, {
				css: {
					'width': '75%',
					'opacity': '1'
				}
			}, 'start' )
			.add( 'move' )
			.to( bottomLine, 3, {
				y: offset
			}, 'move' )
			.to( topLine, 3, {
				y: -offset
			}, 'move' )

			.add( 'reveal' )
			.set( [ topLine, bottomLine ], {
				y: 0
			} )
			.to( [ text, author ], 5, {
				css: {
					'opacity': '1',
					'display': 'flex'
				}
			}, 'reveal' );
		tl.play();
	}, 10 );
} )();