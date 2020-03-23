const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');
const runSequence = require('run-sequence');
const reload = browserSync.reload;

const sassTask = function () {
    return src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 99 version'],
            cascade: false
        }))
        .pipe(dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
          }))
};

const jsTask = function () {
    return src('src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'))
};

const pugTask = function () {
    return src('src/view/pages/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest('dist/html'))
};

const assetsTask = function () {
    return src('src/assets/**/*')
    .pipe(dest('dist/assets/'))
}

const delTask = async function(){
    return del.sync('dist');
}

function watchTask() {
    browserSync.init({
        server: {
          baseDir: 'dist/html'
        },
      })
    watch(['src/js/**/*.js', 'src/sass/**/*.scss', 'src/view/**/*.pug', 'src/assets/**/*'],
        parallel(sassTask, jsTask, pugTask, assetsTask));
    watch('./dist/html/*.html').on('change', reload);
    watch('./dist/js/*.js').on('change', reload);
    watch('.dist/assets/**/*').on('change', reload);
};

exports.sassTask = sassTask;
exports.jsTask = jsTask;
exports.pugTask = pugTask;
exports.assetsTask = assetsTask;
exports.watchTask = watchTask;
exports.delTask = delTask;

exports.default = series(delTask, parallel(jsTask, sassTask, pugTask, assetsTask),watchTask);