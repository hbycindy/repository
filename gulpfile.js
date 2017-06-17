var gulp = require('gulp')
//sass
var sass = require('gulp-sass')
var css = require('gulp-cssnano')
gulp.task('sass', function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass())
    .pipe(css())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({
      stream: true
    }));
})


//html
var html = require('gulp-htmlmin')
gulp.task('html', function () {
     var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }
    gulp.src('./src/*.html')
    .pipe(html(options))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.reload({
      stream: true
    }));

})

//图片压缩
//gulp-imagemin
var images = require('gulp-imagemin')
gulp.task('images',function(){
     gulp.src(['./src/images/*.png', './src/images/*.jpg', './src/images/*.gif', './src/images/*.svg'])
    // gulp.src(['src/images/*.jpg', 'src/images/*.png'])
    // gulp.src('src/images/*.{jpg,png,gif}')
    .pipe(images())
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
          stream: true
        }))
})

var js = require('gulp-uglify');
// var con = require('gulp-concat')
gulp.task('js',function(){
    gulp.src('./src/js/lib/*.js')
    // .pipe(con('all.js'))
    .pipe(js())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
          stream: true
        }))
})




var browserSync = require('browser-sync');
gulp.task('servers', function() {
 // 在浏览器服务启动后，设置一个观察者，来监视文件的变动，如果文件发生了改变，就来重新执行对应的任务
    browserSync({
            server: {baseDir: ['dist/']},
            port:9000

        }, function(err, bs) {

            console.log(bs.options.getIn(["urls", "local"]));
    });

    gulp.watch('src/sass/*.scss', ['sass'])
    // gulp.watch('src/*.html', ['html'])
    gulp.watch('./src/*.html', ['html'])
    gulp.watch('src/images/*.png', ['images'])
    gulp.watch('src/js/lib/*.js', ['js'])
});

gulp.task('default',['sass', 'html', 'images', 'js', 'servers'])