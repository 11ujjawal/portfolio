const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');

gulp.task('styles', () => {
    return gulp.src('client/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('client/assets/css'))
    .pipe(cssmin());
});

gulp.task('default', () => {
    gulp.watch('client/sass/*.sass', ['styles']);
})
