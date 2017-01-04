'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
const gls = require('gulp-live-server');

gulp.task('server', () => {
    let server = gls('bin/www', {
        env: {
            NODE_ENV: 'development'
        }
    }, 35729);

    server.start();

    gulp.watch([
        'bin/*',
        'server.js',
        '/routes/*.js'
    ], () => {
        server.start();
    });
});

gulp.task('styles', () => {
    return gulp.src('public/src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/assets/css/'))
    .pipe(cssmin());
});

gulp.task('default', ['styles', 'server'], () => {
    gulp.watch('public/src/scss/*.scss', ['styles']);
});
