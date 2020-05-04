const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minifier');
const rename = require("gulp-rename");

// Static server
gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.css").on('change', browserSync.reload);
});
        
// gulp.task('minhtml', () => {
//     return gulp.src('./*.html').pipe(minify({
//         minify: true,
//         minifyHTML: {
//         collapseWhitespace: true,
//         conservativeCollapse: true,
//         },
//         getKeptComment: function (content, filePath) {
//             let m = content.match(/\/\*![\s\S]*?\*\//img);
//             return m && m.join('\n') + '\n' || '';
//         }
//     })).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./src'));
// });

gulp.task('mincss', () => {
    return gulp.src('./*.css')
    .pipe(minify({
        minify: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
            let m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    })).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./src'));
});

// gulp.task('minjs', () => {
//     return gulp.src('./*.js').pipe(minify({
//         minify: true,
//         minifyJS: {
//         sourceMap: true
//         },
//         getKeptComment: function (content, filePath) {
//             let m = content.match(/\/\*![\s\S]*?\*\//img);
//             return m && m.join('\n') + '\n' || '';
//         }
//     })).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./src'));
// });
