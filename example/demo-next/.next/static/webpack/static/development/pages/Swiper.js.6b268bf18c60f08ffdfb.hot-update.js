webpackHotUpdate("static/development/pages/Swiper.js",{

/***/ "./pages/Swiper.js":
/*!*************************!*\
  !*** ./pages/Swiper.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swiper; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/Arthur/FlyLab/example/demo-next/pages/Swiper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Swiper extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      slideContainer: {
        height: "100%",
        y: "100%",
        x: "100%",
        width: "100%"
      },
      slide: {
        height: "100%",
        width: "100%",
        color: '#fff'
      },
      slide1: {
        // height: "100%",
        // width: "100%",
        // y: "100%",
        backgroundColor: '#FEA900'
      },
      slide2: {
        // height: 720,
        backgroundColor: '#B3DC4A'
      },
      scroll: {// height: 300,
        // backgroundColor: '#B3DC4C',
      },
      slide3: {// height: 300,
        // backgroundColor: '#6AC0FF',
      }
    };
  }

  render() {
    return __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default.a, {
      containerStyle: this.state.slideContainer,
      axis: "y",
      resistance: true,
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      style: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state.slide, this.state.slide1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "slide n\xB01"));
  }

}
;

/***/ })

})
//# sourceMappingURL=Swiper.js.6b268bf18c60f08ffdfb.hot-update.js.map