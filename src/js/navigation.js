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
require( './smooth-scroll' ).polyfill();
import { addClass, removeClass } from './utils';

( () => {
	const bio = document.getElementById( 'title-bio' ),
		passion = document.getElementById( 'title-passion' ),
		tools = document.getElementById( 'title-tools' ),
		projects = document.getElementById( 'title-projects' ),
		references = document.getElementById( 'title-references' ),
		gallery = document.getElementById( 'title-gallery' ),
		top = document.getElementById( 'top' );

	/*const bio = $( '#title-bio' ),
		passion = $( '#title-passion' ),
		tools = $( '#title-tools' ),
		projects = $( '#title-projects' ),
		references = $( '#title-references' ),
		gallery = $( '#title-gallery' ),
		top = $( '#top' );*/

	let titles = {
		bio,
		passion,
		tools,
		projects,
		references,
		gallery,
		top
	};

	// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

	let navLinks = [].slice.call( document.querySelectorAll( 'a[data-nav]' ) );
	console.log( navLinks );

	navLinks.map( ( link ) => {
		link.onclick = ( e ) => {
			e.preventDefault();
			// console.log('link clicked');
			titles[link.dataset.nav].scrollIntoView( { behavior: 'smooth' } );
		};
		link.onmouseenter = () => {
			removeClass( link, 'fa fa-circle' );
			link.text = link.dataset.hover;
		};
		link.onmouseleave = () => {
			link.text = '';
			addClass( link, 'fa fa-circle' );
		};
	} );

	/*const titles = [ bio, passion, tools, projects, references, gallery ];

	titles.map( ( title ) => {
		console.log('title: ', title);

		title.addEventListener('click', (e) => {
			e.preventDefault();
			console.log('element clicked: ', this);
			title.scrollIntoView( { behaviour: 'smooth' } );

		});
	} );*/
} )();