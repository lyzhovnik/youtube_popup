var gulp         = require('gulp'),
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'); // Подключаем библиотеку для удаления файлов и папок


// gulp.task('sass-dev', function(){ // Создаем таск Sass
//     console.log("Now SCSS is compiling");
//     return gulp.src('site/catalog/view/theme/kolesadpua/stylesheet/stylesheet.scss') // Берем источник site\catalog\view\theme\kolesadpua\stylesheet
//         .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//         //.pipe(autoprefixer(['last 15 versions'], { cascade: true })) // Создаем префиксы
//       //  .pipe(cssnano()) // Сжимаем
//         .on("error", notify.onError(function (error) {
//             return "Error: " + error.message;
//         }))
//         .pipe(gulp.dest(function(file){
//             return file.base;
//         })) // Выгружаем результата в папку
//
// });
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
// gulp.task('script-winter', function() {
//     return gulp.src('site/catalog/view/theme/kolesadpua/javascript/winter.js' )
//     // .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле
//         .pipe(uglify()) // Сжимаем JS файл
//         .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
//         .pipe(gulp.dest(function(file){
//             return file.base;
//         })) // Выгружаем результата в папку
// });
// gulp.task('sass-all', function(){ // Создаем таск Sass
//     return gulp.src('site/catalog/view/theme/kolesadpua/stylesheet/stylesheet.scss') // Берем источник site\catalog\view\theme\kolesadpua\stylesheet
//         .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//         .pipe(autoprefixer(['last 15 versions'], { cascade: true })) // Создаем префиксы
//         .pipe(cssnano()) // Сжимаем
//         .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
//         .on("error", notify.onError(function (error) {
//             return "Error: " + error.message;
//         }))
//         .pipe(gulp.dest('site/catalog/view/theme/kolesadpua/stylesheet/')) // Выгружаем результата в папку
//
// });
//
// gulp.task('ftp-tire-css',['sass-all'], function () {
//     console.log("Now SCSS is sending via ftp");
//     return gulp.src('site/catalog/view/theme/kolesadpua/stylesheet/stylesheet.min.css')
//         .pipe(ftp({
//             host: 'mobilshi.ftp.ukraine.com.ua',
//             user: 'mobilshi_devkol',
//             pass: 'i85ohf82',
//             remotePath: 'catalog/view/theme/kolesadpua/stylesheet/'
//
//         }))
//         .pipe(gutil.noop());
// });
// gulp.task('watch', function() {
//     gulp.watch('site/catalog/view/theme/kolesadpua/stylesheet/**/*.scss', ['ftp-tire-css']); // Наблюдение за sass файлами в папке sass
//
// });