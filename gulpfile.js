var gulp = require('gulp');
var watch = require('gulp-watch')

gulp.task('default', function () {
  console.log("You Created a Gulp Task.");
});

gulp.task('html', function () {
  console.log("Imaging something useful done to HTML.");
});

gulp.task('styles', function () {
  console.log("Imaging Sass or PostCSS tasks running here.");
});

gulp.task('watch', function () {

  watch('./app/index.html/', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });

});
