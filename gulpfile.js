const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer')


const paths = {
    nodePath:'node_modules',
    stylesPath: 'assets/scss',
    jsPath: 'assets/js'
}

gulp.task('js', function(){
    return gulp.src([
        paths.nodePath + '/jquery-slim/dist/jquery.slim.js',
        paths.nodePath + '/bootstrap/dist/js/bootstrap.bundle.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor-scripts.js'))
    .pipe(gulp.dest('public'))
    .pipe(uglify().on('error', function(err){
        console.log(err)
    }))
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(gulp.dest('public'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'))
})


gulp.task('styles', function(){
    return gulp.src([
        paths.nodePath + '/bootstrap/dist/css/bootstrap.css',
        paths.stylesPath + '/**/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))

    // .pipe(autoprefixer({
    //     browers: ['last 2 versions'],
    //     cascade: false
    //     })
    // )
    
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'))

})