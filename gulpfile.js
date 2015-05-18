/**
 * Created by laury.lu on 2015/4/15.
 */
var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
var sftp = require('gulp-sftp')
//var watch = require('gulp-watch');
gulp.task('sass',function(){
    //console.log(arguments)
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function () {
    //livereload.listen()
    //var watcher = gulp.watch('src/**/*.scss',['sass'])
    //watcher.on('change',function(evt){
    //    console.log(evt);
    //})
    var tplWatcher = gulp.watch('./reference.txt',['uploadTest']);
})

//todo
gulp.task('uploadTest',function () {
    return gulp.src('./reference.txt')
        .pipe(sftp({
            host: '192.168.146.108',
            user: 'luhuan',
            pass: 'luhuan123',
            remotePath:'./'
        }))
})