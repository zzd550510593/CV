var gulp =  require('gulp');
var pug = require('gulp-pug');

gulp.task('default',['pug','css','js','data','jade','watch']);

gulp.task('pug',function () {
   return gulp.src('./src/*.pug')
       .pipe(pug({pretty:true}))
       .pipe(gulp.dest('./build'));
});

gulp.task('jade',function () {
    return gulp.src('./src/*.jade')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('./build'));
});
gulp.task('js',function () {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./build/js'));
});

gulp.task('css',function(){
   return gulp.src('./src/css/*.css')
       .pipe(gulp.dest('./build/css'));
});
gulp.task('data',function(){
    return gulp.src('./src/data/*')
        .pipe(gulp.dest('./build/data'));
});
gulp.task('watch',function(){
    gulp.watch('./src/*.pug',['pug']);
    gulp.watch('./src/css/*.css',['css']);
    gulp.watch('./src/*.jade',['jade']);
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/data/*',['data']);
});