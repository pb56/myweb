const { src, dest, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const minify = require("gulp-minifier");
const rename = require("gulp-rename");

// Start browser-sync
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./js/*.js").on("change", browserSync.reload);
}

// Compiler sass to css
function serveSass() {
  return src("./sass/**/*.sass")
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

// Mininizer HTML
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
    .pipe(dest("./src"));
}

// Mininizer CSS
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
    .pipe(dest("./src"));
}

// Mininizer JS
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
    .pipe(dest("./src"));
}

exports.serve = bs;
