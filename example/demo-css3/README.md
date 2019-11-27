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

## CSS

- [Sass入门篇](https://www.imooc.com/code/5993)
- [Sass进阶篇](https://www.imooc.com/learn/436)

## [Emmet](https://docs.emmet.io/)

> Emmet是网络开发人员的工具包，可以极大地改善您的HTML和CSS工作流程：

```bash
# macos: command + p
# window: ctrl + p
ext install TWIG pack
```

## 雪碧图

- [css sprite雪碧图制作，使用以及相关，图文gif](https://juejin.im/post/58eb062861ff4b006b576d9c)


## 参考

- [Gulp Sass tutorial](http://zetcode.com/gulp/sass/)
- [gulp-guide](https://www.kancloud.cn/thinkphp/gulp-guide)
- [css3 tutorial](https://wiki.imooc.com/css3/css3introduce.html)
- [我为什么不再用Compass写CSS（缺点分析）
](http://ourjs.com/detail/54ed5397232227083e000035)