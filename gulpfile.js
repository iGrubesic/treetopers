var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),

    config = {
        // Sass
        sass: 'style/sass/**/*.scss',
        sassDest: 'style'
    };

// Sass Task
gulp.task('sass', function() {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.sassDest))
        .pipe(browserSync.stream());

});

gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });

    gulp.watch(config.sass, ['sass']);
    gulp.watch('index.html').on('change', browserSync.reload);
});