let gulp = require('gulp');
let gulpSass = require('gulp-sass');
let del = require('del');
gulp.task('watch', () => {
  gulp.watch('scss/*.scss', (done) => {
      gulp.series(['clean','styles'])(done);
  });
});

gulp.task('clean', () => {
  return del([
      'css/*.css',
  ]);
});

gulp.task('styles', function (done) {
    gulp.src('scss/*.scss')
        .pipe(gulpSass({
          outputStyle: 'compressed'
        }))
        .on('error', gulpSass.logError)
        .pipe(gulp.dest('css'));
    done();
});

gulp.task('default', gulp.series(['clean','styles']));
