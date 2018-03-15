const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('compress', function (cb) {
    return gulp.src('src/test/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/dist/js'));
});

gulp.task('compress-assets', function (cb) {
    return gulp.src('src/assets/js-uncompiled/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/assets/js'));
});

gulp.task('compress-vendor', function (cb) {
    return gulp.src('src/assets/js-uncompiled/vendor/**/*')
        .pipe(uglify())
        .pipe(gulp.dest('src/assets/js/vendor'));
});

gulp.task('compress-src', function (cb) {
    return gulp.src('src/assets/js-uncompiled/src/**/*')
        .pipe(uglify())
        .pipe(gulp.dest('src/assets/js/src'));
});

gulp.task('minify-css', () => {
    return gulp.src('src/test/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/dist/css'));
});

gulp.task('minify-css-assets', () => {
    return gulp.src('src/assets/css-uncompiled/src/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/assets/css/src'));
});

gulp.task('default', function() {
    // place code for your default task here
});
