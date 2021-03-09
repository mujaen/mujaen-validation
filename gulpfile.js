const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const typescript = require('gulp-typescript')

const src = './src';
const dest = './dest';

gulp.task('server', () => {
    connect.server({
        port: 8000,
        root: 'dest',
        livereload: true
    });
});


gulp.task('js', () => {
    return gulp.src(`${src}/js/*.js`)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(`${dest}/assets/js`));
});

gulp.task('ts', () => {
    return gulp.src(`${src}/js/*.ts`)
        .pipe(typescript({
            noImplicitAny: true
        }))
        .pipe(gulp.dest(`${dest}/assets/js`));
});

gulp.task('html', () => {
    return gulp.src(`${src}/*.html`)
        .pipe(gulp.dest(`${dest}`));
});


const runMethods = {
    'server::web'() {
        gulp.task('default', gulp.series(['js', 'ts', 'html', 'server']));
        gulp.watch(`${src}/js/*.js`, gulp.series(['js']));
        gulp.watch(`${src}/js/*.ts`, gulp.series(['ts']));
    }
};

runMethods[`server::web`]();