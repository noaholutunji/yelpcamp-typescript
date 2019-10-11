webpackHotUpdate("static/development/pages/campgrounds.js",{

/***/ "./src/components/Campgrounds/Campgrounds.tsx":
/*!****************************************************!*\
  !*** ./src/components/Campgrounds/Campgrounds.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../axios-order */ "./src/axios-order.ts");
/* harmony import */ var _Navigation_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/Navbar */ "./src/components/Navigation/Navbar.tsx");
/* harmony import */ var _Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Body/Body */ "./src/components/Campgrounds/Body/Body.tsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Campgrounds = function Campgrounds() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      campground = _useState[0],
      setCampground = _useState[1];

  var user = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _axios_order__WEBPACK_IMPORTED_MODULE_2__["default"].get('/campgrounds').then(function (response) {
      setCampground(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  var tabRow = function tabRow() {
    return campground && campground.map(function (object, i) {
      return __jsx(_Body_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        obj: object,
        key: i
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Navigation_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
    className: "container"
  }, __jsx("header", {
    className: "jumbotron"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h1", null, "Welcome To YelpCamp"), __jsx("p", null, "View our hand picked campgrounds from all over the world"), user ? __jsx("p", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/new",
    as: "/new"
  }, __jsx("a", {
    className: "btn btn-primary btn-lg"
  }, "Add New Campground"))) : __jsx("div", {
    className: "text-info"
  }, "To add to campground, you need to login or signup"))), __jsx("div", {
    className: "row text-center",
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, tabRow())));
};

/* harmony default export */ __webpack_exports__["default"] = (Campgrounds);

/***/ })

})
//# sourceMappingURL=campgrounds.js.d4e11ca81eb86b93c32c.hot-update.js.map