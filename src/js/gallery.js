/* eslint indent: ["error", "tab"] */

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
/*const imgCreate = ( src, alt, title ) => {
	let img = document.createElement( 'div' );
	img.src = src;
	if ( alt != null ) img.alt = alt;
	if ( title != null ) img.title = title;
	return img;
};*/
const initGallery = () => {
	const galleryButton = document.getElementById( 'gallery-button' );
	const gallery = galleryButton.parentNode;
	let picture;

	for( let i = 1; i < 9; i++ ){
		picture = document.createElement( 'div' );
		picture.style = `
			background: url('../../images/${i}.jpg');
			background-size: cover;
		`;

		addClass( picture, 'wrapper--picture' );
		addClass( picture, 'black-and-white' );

		gallery.insertBefore( picture, galleryButton );
	}
	
};
// TODO: refactor location of addClass, removeClass and loadButton
(()=>{
	const loadButton = document.querySelector('.wrapper--button');
	initGallery();
	loadButton.onclick = (e) => {
		e.preventDefault();

		addClass(loadButton, 'loading');
		setTimeout(()=>{
			removeClass(loadButton, 'loading');
		}, 3000);
	};
	
})();