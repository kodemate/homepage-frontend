var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var runsequence = require('run-sequence');


gulp.task('jade', function () {
    return gulp.src('src/templates/pages/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'));
});

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'exapnded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
    return gulp.src('src/scss/pages/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        // .pipe(autoprefixer())
        .pipe(gulp.dest('build/css'));
});

gulp.task('assets', function () {
    return gulp.src('src/vendor/**/*')
        .pipe(gulp.dest('build/vendor'));
});

gulp.task('scripts', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('build/img'));
});

gulp.task('build', ['jade', 'sass', 'scripts', 'images', 'assets']);

gulp.task('clean', function () {
    return del([
        'build'
    ]);
});

// default task
gulp.task('default', function () {
    runsequence('clean', 'build');
});

// watch
gulp.task('watch', function () {
    return gulp.watch(['src/scripts/**/*.js', 'src/scss/**/*.scss', 'src/templates/**/*.jade'], ['build'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});