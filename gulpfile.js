const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const gulpLess = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

function styles() {
	return gulp.src('./src/less/**/*.less')
				.pipe(gulpLess())
				.pipe(gcmq())
				.pipe(autoprefixer({
            			browsers: ['last 2 versions'],
           				cascade: false
        		}))
        		.pipe(gulp.dest('./src/css'))
        		.pipe(cleanCSS({
        			level: 2
        		}))
        		.pipe(gulp.dest('./build/css'))

        		.pipe(browserSync.stream());
}

function scripts() {
	return gulp.src('./src/js/**/*.js')
				.pipe(uglify())
				.pipe(gulp.dest('./build/js'))
				.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
	gulp.watch('./src/less/**/*.less', styles);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./build/*.html').on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);