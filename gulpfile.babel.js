/* eslint-disable */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const uglifycss = require('gulp-uglifycss');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('default', () =>
	gulp.src('dist/css/*.css')
		.pipe(autoprefixer({
				browsers: [
					"> 0%"
				],
				cascade: false,
				add: true
		}))
		.pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css/final'))
)
