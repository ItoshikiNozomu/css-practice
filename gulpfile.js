/**
 * Created by laury.lu on 2015/4/15.
 */
var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
var sftp = require('gulp-sftp')
var path = require('path')
//var watch = require('gulp-watch');
gulp.task('sass', function () {
    //console.log(arguments)
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

var tplPath = '/works/temp/my-templates/**/*html'


gulp.task('watch', function () {
    //livereload.listen()
    //var watcher = gulp.watch('src/**/*.scss',['sass'])
    //watcher.on('change',function(evt){
    //    console.log(evt);
    //})
    var tplWatcher = gulp.watch(tplPath, ['uploadTest'])
    // tplWatcher.on('change',function(evt){
    //     gulp.src(evt.path)
    //     .pipe(sftp({
    //         host: '192.168.146.108',
    //         user: 'luhuan',
    //         pass: 'luhuan123',
    //         remotePath:'./dest_folder'
    //     }))
    // })
    console.log(tplWatcher)
})

//todo
gulp.task('uploadTest', function () {
    console.log(arguments[0])
    //    return gulp.src(tplPath)
    //        .pipe(sftp({
    //            host: '192.168.146.108',
    //            user: 'luhuan',
    //            pass: 'luhuan123',
    //            remotePath:'./dest_folder'
    //        }))
})


gulp.task('watchViews', function () {
    gulp.watch('./view-practise/**/src/*.scss', (evt) => {
        
        
        gulp.src(evt.path)
            .pipe(sass().on('error', sass.logError))
            //spriter
            
            .pipe(gulp.dest(path.join(path.resolve(path.dirname(evt.path), '..', 'dist'))))




    })
})