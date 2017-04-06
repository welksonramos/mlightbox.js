const gulp = require('gulp')
const standard = require('gulp-standard')
const connect = require('gulp-connect')
const runSequence = require('run-sequence')
const babili = require('gulp-babili');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
require('gulp-release-tasks')(gulp)

gulp.task('connect', () => {
  connect.server({
    root: './docs',
    port: 7000,
    livereload: true
  })
})

gulp.task('html', () => {
  gulp.src(['./docs/*.html', './docs/*.html'])
    .pipe(connect.reload())
})

gulp.task('minify', () => {
  gulp.src('./mlightbox.js')
    .pipe(babili({
      mangle: {
        keepClassNames:true
      }
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('minify-css', () => {
  gulp.src('./mlightbox.css')
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist'))
})

gulp.task('copy', () => {
  gulp.src(['./dist/mlightbox.min.js', './dist/mlightbox.min.css'])
    .pipe(gulp.dest('./docs/assets/'))
})

gulp.task('standard', () => {
  gulp.src('./mlightbox.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false,
      quiet: true
    }))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch('./*.{css,js}', ['build'])
  gulp.watch('./docs/**/*.{html,css}', ['html'])
})

gulp.task('build', () => {
  runSequence('standard', 'minify','minify-css', 'copy')
})

gulp.task('server', () => {
  runSequence('build', 'connect', 'watch')
})
