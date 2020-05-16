const { src, dest, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const minify = require("gulp-minifier");
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');

// Start browser-sync
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on("change", browserSync.reload);
};

// Compiler sass and scss to css
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

// Minimizer HTML
function minhtml() {
  return src("./*.html")
    .pipe(
      minify({
        minify: true,
        minifyHTML: {
          collapseWhitespace: true,
          conservativeCollapse: true,
        },
        getKeptComment: function (content, filePath) {
          let m = content.match(/\/\*![\s\S]*?\*\//gim);
          return (m && m.join("\n") + "\n") || "";
        },
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./"));
};

// Minimizer CSS
function mincss() {
  return src("./*.css")
    .pipe(
      minify({
        minify: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
          let m = content.match(/\/\*![\s\S]*?\*\//gim);
          return (m && m.join("\n") + "\n") || "";
        },
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./css"));
};

// Minimizer JS
function minjs() {
  return src("./*.js")
    .pipe(
      minify({
        minify: true,
        minifyJS: {
          sourceMap: true,
        },
        getKeptComment: function (content, filePath) {
          let m = content.match(/\/\*![\s\S]*?\*\//gim);
          return (m && m.join("\n") + "\n") || "";
        },
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./js"));
};

exports.serve = bs;
