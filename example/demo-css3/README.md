# CSS

- [CSS基础](https://www.imooc.com/video/11120)
- [csszengarden](http://www.csszengarden.com/215/)
- [css](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - [MDN CSS 基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)
    - [mooc css online](https://www.imooc.com/code/611)

### css selectors

```
标签选择器：标签名{},作用于所有标签。

类选择器：.类名{}，在标签内定义class="",属图形结构。

ID选择器：#ID{}，在标签内定义id="",有严格的一一对应关系。

子选择器：.span>li{}，作用于父元素span下一层的li标签。

包含选择器：.span li{}，作用于父元素span下所有li标签。

通用选择器: *{}，匹配所有html元素。

伪类选择符：它允许给html不存在的标签(标签的某种状态)设置样式，比如说我们给html中的一个标签元素的鼠标滑过的状态来设置字体颜色。
```

## SASS

- [Sass入门篇](https://www.imooc.com/code/5993)
- [Sass进阶篇](https://www.imooc.com/learn/436)

![Sass](./Sass.png)

### 环境搭建

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


## [Emmet](https://docs.emmet.io/)

> Emmet是网络开发人员的工具包，可以极大地改善您的HTML和CSS工作流程：

```bash
# macos: command + p
# window: ctrl + p
ext install TWIG pack
```

## 雪碧图

- [css sprite雪碧图制作，使用以及相关，图文gif](https://juejin.im/post/58eb062861ff4b006b576d9c)

## Q&A

- Flex布局
- Uncaught DOMException: Failed to execute ‘insertRule’ on ‘CSSStyleSheet’? 使用style属性或创建style标签来取代insertRule.

## 参考

- [Gulp Sass tutorial](http://zetcode.com/gulp/sass/)
- [gulp-guide](https://www.kancloud.cn/thinkphp/gulp-guide)
- [css3 tutorial](https://wiki.imooc.com/css3/css3introduce.html)
- [我为什么不再用Compass写CSS（缺点分析）](http://ourjs.com/detail/54ed5397232227083e000035)
- [Uncaught DOMException: Failed to execute ‘insertRule’ on ‘CSSStyleSheet’](https://www.noxxxx.com/uncaught-domexception-failed-to-execute-insertrule-on-cssstylesheet.html)
