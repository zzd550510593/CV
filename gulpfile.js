var gulp =  require('gulp');
var pug = require('gulp-pug');

gulp.task('default',['pug','css','watch']);

gulp.task('pug',function () {
   return gulp.src('./src/*.pug')
       .pipe(pug({pretty:true}))
       .pipe(gulp.dest('./build'));
});

gulp.task('css',function(){
   return gulp.src('./src/*.css')
       .pipe(gulp.dest('./build'));
});
gulp.task('watch',function(){
    gulp.watch('./src/*.pug',['pug']);
    gulp.watch('./src/*.css',['css']);
});