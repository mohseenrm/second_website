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
var imagesLoaded = 0, maxPictures = 21;

const initGallery = () => {
	createPictures(8);
};
// TODO: use optimize images for preview
const createPictures = (number) => {
	const galleryButton = document.getElementById( 'gallery-button' );
	const gallery = galleryButton.parentNode;
	let picture, limit;
	limit = maxPictures;

	if((number + imagesLoaded) < maxPictures)
		limit = (number + imagesLoaded);

	for( let i = imagesLoaded; i < limit; i++ ){
		picture = document.createElement( 'div' );
		picture.style = `
			background: url('../../images/${i}.jpg');
			background-size: cover;
		`;

		addClass( picture, 'wrapper--picture' );
		addClass( picture, 'black-and-white' );

		gallery.insertBefore( picture, galleryButton );
	}
	imagesLoaded = number + imagesLoaded;
};

// TODO: refactor location of addClass, removeClass and loadButton
(()=>{
	const loadButton = document.querySelector('.wrapper--button');
	initGallery();
	imagesLoaded = 8;
	loadButton.onclick = (e) => {
		e.preventDefault();

		addClass(loadButton, 'loading');
		createPictures(6);
		setTimeout(()=>{
			removeClass(loadButton, 'loading');
		}, 3500);
	};
	// TODO: create modal -> onclick event of pictures change css of modal to reflect new src -> and show modal
	// on close -> modal hide
	// on swipe -> based on current swipe add 1 to id
	// 		-> on edge case -> circle back to first one
	//		-> for this we need to track globally how many images have been loaded

	// TODO: OR grow selected picture and shrink pictures in matrix;
})();