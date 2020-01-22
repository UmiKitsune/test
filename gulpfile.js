const gulp = require('gulp');
const browserSync = require("browser-sync");
const watch = require('gulp-watch');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});

gulp.task('watch', function() {
    watch("./src/*.html", ['src:html']);
});

gulp.task('default', gulp.parallel('server', 'watch'));




















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