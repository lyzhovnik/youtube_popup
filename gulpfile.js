var gulp         = require('gulp'),
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'); // Подключаем библиотеку для удаления файлов и папок

gulp.task('clean-f', function () {
    return del([
        'dist'
    ]);
});

gulp.task('script',['clean-f'], function() {
    return gulp.src('js/youtube_popup.js' )
        .pipe(gulp.dest('dist'))
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('dist')) // Выгружаем результата в папку
});
