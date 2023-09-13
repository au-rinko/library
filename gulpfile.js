const gulp        = require('gulp');
const plumber     = require("gulp-plumber");
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const rename      = require('gulp-rename');
const cleanCSS    = require('gulp-clean-css');
const autoprefixer= require('gulp-autoprefixer');
const sourcemap   = require("gulp-sourcemaps");
const webp        = require('gulp-webp');
const htmlmin     = require('gulp-htmlmin');
const imagemin    = import('gulp-imagemin');


gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
    gulp.watch("source/*.html").on("change", browserSync.reload);
});

// exports.server = server;

gulp.task('styles', function(){
    return gulp.src("source/sass/*.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest("source/css"))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
});

// exports.styles = styles;

gulp.task("html", function () {
	return gulp
		.src("source/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("build/"));
});

gulp.task("scripts", function () {
	return gulp
		.src("source/js/**/*.js")
		.pipe(gulp.dest("build/js"))
		.pipe(browserSync.stream());
});

gulp.task('createWebp', function(){
    return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
});

gulp.task("images", function () {
	return gulp
		.src("source/img/**/*")
		.pipe(gulp.dest("build/img"))
		.pipe(browserSync.stream());
});

gulp.task("copy", function() {
    gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
    ], {
    base: "source"
    })
    .pipe(gulp.dest("build"))
  });

gulp.task('watch', function() {
    gulp.watch("source/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
	gulp.watch("source/*.html").on("change", gulp.parallel("html"));
	gulp.watch("source/js/**/*.js").on("change", gulp.parallel("scripts"));
	gulp.watch("source/img/**/*").on("all", gulp.parallel("images"));
});

gulp.task(
	"default",
	gulp.parallel(
		"watch",
		"server",
        "html",
		"styles",
		"scripts",
        "copy",
        "images",
        "createWebp"
	)
);
