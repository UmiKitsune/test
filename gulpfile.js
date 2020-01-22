const gulp = require('gulp');
const browserSync = require("browser-sync");
const sass = require("gulp-sass");

//Gulp Task для компиляции Scss в css
gulp.task('scss', function() {
    return gulp.src('./src/scss/main.scss')
        .pipe( sass() )
        .pipe( gulp.dest("./src/css") )
        .pipe(browserSync.reload({stream: true}));

});

//локальный сервер
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});

//следим за изменениями в файлах и обновляем браузер
gulp.task('watch', function() {
    gulp.watch(["./src/*.html", "./src/js/*.js", "./src/img/*.*"]).on('change', browserSync.reload);

    gulp.watch('./src/scss/**/*.scss', function(){
        setTimeout(gulp.parallel("scss"), 1000);
    });
});

//дефолтный таск = пишем в терминале gulp и запускаются переданые таски то есть server and watch == gulp.task('default', gulp.parallel('server', 'watch'));  а потом добавили scss
gulp.task('default', gulp.series('scss', gulp.parallel('server', 'watch')));




















/*создаем первый gulp task

gulp.task('hello', function(callback){
    console.log('hello from gulp');
    callback();
});

//задача "по умолчанию" по вызову слова gulp
gulp.task('default', function(callback){
    console.log('default');
    callback();
});

------------------------------------------------------------------------------------------------------------------------

gulp.task('hello', function(callback){
    console.log('hello from gulp');
    callback();
});

gulp.task('goodbye', function(callback){
    console.log('goodbye from gulp');
    callback();
});

gulp.task('default', gulp.series('hello', 'goodbye')); 2 задачи подряд(сначвлв 1 потом 2)

gulp.task('default', gulp.parallel('hello', 'goodbye')); 2 задачи параллельно */