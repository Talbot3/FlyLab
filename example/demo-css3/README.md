# SASS

## 环境搭建

- [Nodejs](https://nodejs.org)
- [gulp](https://www.gulpjs.com.cn/)

```bash
npm install gulp-cli -g
npm i -g gulp -D
npx -p touch nodetouch gulpfile.js
npm install gulp-sass --save-dev
```

```js
# gulpfile.js
var gulp = require('gulp'),             // 載入 gulp
    gulpSass = require('gulp-sass');    // 載入 gulp-sass

gulp.task('styles', function () {
    gulp.src('scss/**/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass())         // 編譯 Scss
        .pipe(gulp.dest('css'));  // 指定編譯後的 css 檔案目錄
});

```

## CSS3 


## 参考

- [Gulp Sass tutorial](http://zetcode.com/gulp/sass/)
- [gulp-guide](https://www.kancloud.cn/thinkphp/gulp-guide)
