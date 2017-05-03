var gulp = require('gulp');//gulp模块
    imagemin = require('gulp-imagemin');
    uglify = require("gulp-uglify");//压缩js文件
    rename = require('gulp-rename');//修改压缩后的文件名
    minifyCss = require('gulp-minify-css');//压缩css文件
    concat = require('gulp-concat');//合并文件
    livereload = require('gulp-livereload');//自动更新页面

gulp.task('default', function () {
    gulp.start('minifyJs','minifyCss','miniImages','watch');
});
gulp.task('minifyJs', function () {// 要压缩的js文件
    gulp.src('js/*.js')  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('js'))
        .pipe(concat('arr.js'))//合并文件
        .pipe(uglify())  //压缩
        .pipe(gulp.dest('arr'));//压缩后的路径
});

gulp.task("minifyCss", function () {
    gulp.src('1.css') // 要压缩的css文件
        .pipe(gulp.dest('css'))
        .pipe(minifyCss()) //压缩css
        .pipe(rename('jquery.min.css'))
        .pipe(gulp.dest('css'));
});
gulp.task('miniImages', function(){
gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images2'));
});
gulp.task('watch', function () {
    gulp.watch('1.css')//文件监听
});
