/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login-page {\n  height: 100%;\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.login-section {\n  height: 50vh;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: #347683;\n  border: 2pt #000 solid;\n  padding: 2%; }\n\n.login-inputs {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 15vh; }\n\n.login-error {\n  font-size: small; }\n\n.submit {\n  font-size: large; }\n\n.login-labels {\n  display: flex;\n  flex-direction: column; }\n\n.login-img {\n  height: 15vh; }\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n  border: 2pt #000 solid;\n  color: #000;\n  padding: .75%; }\n\n.left {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n.right {\n  height: 20vh;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.logout {\n  font-size: medium;\n  align-self: flex-end; }\n\n.adventure {\n  height: 25vh;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border: 2px #000 solid;\n  background-color: #347683; }\n\n.booking {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  text-align: center;\n  max-width: 70vw; }\n\nlabel {\n  color: #fff;\n  margin: 1%; }\n\n.drop {\n  width: 10vw;\n  padding: 1%; }\n\n.trips {\n  height: 100vh;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 2pt #000 solid; }\n\n.tabs {\n  height: auto;\n  width: 90vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-content: center;\n  margin-top: 0.5em; }\n\n.trip-btns {\n  height: auto;\n  width: 20vw;\n  padding: 4%;\n  font-size: 16pt;\n  background-color: #FF8768;\n  color: #000; }\n\n.card-container {\n  height: 75vh;\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding-top: 2em;\n  overflow: auto;\n  min-width: 90vw; }\n\n.trip-cards {\n  height: 40vh;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1pt #000 solid;\n  margin: 1.5em;\n  background-color: rgba(99, 110, 111, 0.3); }\n\na {\n  color: #000080;\n  padding-bottom: 1%;\n  text-align: center; }\n\np {\n  margin: 0;\n  text-align: center; }\n\n.img-wrap {\n  height: auto;\n  width: 25vw;\n  overflow: hidden;\n  display: flex;\n  justify-content: center; }\n\n.trip-img {\n  max-width: auto;\n  max-height: 100%; }\n\n.destination-name {\n  margin-bottom: 1em;\n  border-bottom: 1pt #000 solid; }\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  background-color: #BCD8C1;\n  font-family: 'Yusei Magic', sans-serif; }\n\nbody {\n  height: auto;\n  width: 90vw; }\n\nh1 {\n  margin: 0; }\n\nbutton {\n  font-family: 'Yusei Magic', sans-serif; }\n\n.small-btn {\n  background-color: #FF8768; }\n\nfooter {\n  height: 6vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center; }\n\n.footer-info {\n  padding: 0 2% 0 2%; }\n\n@media screen and (max-width: 1300px) {\n  .trip-cards {\n    height: 45vh;\n    width: 40vw; }\n  .drop {\n    height: auto;\n    width: 15vw; } }\n\n@media screen and (max-width: 1150px) {\n  .trip-cards {\n    height: 45vh;\n    width: 70vw; }\n  .trip-img {\n    height: auto;\n    width: 100vw; }\n  .drop {\n    height: auto;\n    width: 20vw; } }\n\n@media screen and (max-width: 1020px) {\n  header {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  h1,\n  h2 {\n    text-align: center; }\n  .left {\n    align-items: center; }\n  .right {\n    align-items: center;\n    height: auto; }\n  .logout {\n    align-self: center; }\n  .adventure {\n    height: auto; }\n  .trip-btns {\n    font-size: 10pt; }\n  .booking {\n    display: flex;\n    flex-direction: column;\n    max-width: 54vw; }\n  .book-btn {\n    margin: 5%; }\n  .img-wrap {\n    width: 60vw; }\n  label {\n    margin: 1% 0; } }\n\n@media screen and (max-width: 850px) {\n  .booking {\n    max-width: 25vw; }\n  .drop {\n    width: 20vw; }\n  label {\n    margin: 0 6%; } }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/css/_login.scss","webpack://./src/css/_mixin.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_header.scss","webpack://./src/css/_bookingbar.scss","webpack://./src/css/_tripview.scss","webpack://./src/css/base.scss","webpack://./src/css/_responsive.scss"],"names":[],"mappings":"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","sourcesContent":[".login-page {\n  @include dimensions(100%, auto);\n  @include flex(row);\n  justify-content: center;\n  align-items: center;\n}\n\n.login-section {\n  @include dimensions(50vh, auto);\n  @include flex(column);\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: $secondary-background;\n  border: 2pt $black solid;\n  padding: 2%;\n}\n\n.login-inputs {\n  @include flex(column);\n  justify-content: space-between;\n  height: 15vh;\n}\n\n.login-error {\n  font-size: small;\n}\n\n.submit {\n  font-size: large;\n}\n\n.login-labels {\n  @include flex(column);\n}\n\n.login-img {\n  height: 15vh;\n}\n","@mixin flex($dir) {\n  display: flex;\n  flex-direction: $dir;\n}\n\n@mixin dimensions($height, $width) {\n  height: $height;\n  width: $width;\n}","$primary-background: #BCD8C1;\n$secondary-background:#347683;\n$accent-color:#FF8768;\n$trip-card-background: #636E6F;\n\n\n$white: #fff;\n$black: #000;\n$navy: #000080;","header {\n  @include flex(row);\n  justify-content: space-between;\n  align-items: flex-end;\n  border: 2pt $black solid;\n  color: $black;\n  padding: .75%;\n}\n\n.left {\n  @include flex(column);\n  justify-content: flex-end;\n}\n\n.right {\n  @include dimensions(20vh, auto);\n  @include flex(column);\n  justify-content: space-between;\n}\n\n.logout {\n  font-size: medium;\n  align-self: flex-end;\n}",".adventure {\n  @include dimensions(25vh, auto);\n  @include flex(column);\n  align-items: center;\n  justify-content: space-evenly;\n  border: 2px $black solid;\n  background-color: $secondary-background;\n}\n\n.booking {\n  @include flex(row);\n  justify-content: space-between;\n  text-align: center;\n  max-width: 70vw;\n}\n\nlabel {\n  color: $white;\n  margin: 1%;\n}\n\n.drop {\n  width: 10vw;\n  padding: 1%;\n}",".trips {\n  @include dimensions(100vh, auto);\n  @include flex(column);\n  align-items: center;\n  justify-content: center;\n  border: 2pt $black solid;\n}\n\n.tabs {\n  @include dimensions(auto, 90vw);\n  @include flex(row);\n  justify-content: space-evenly;\n  align-content: center;\n  margin-top: 0.5em;\n}\n\n.trip-btns {\n  @include dimensions(auto, 20vw);\n  padding: 4%;\n  font-size: 16pt;\n  background-color: $accent-color;\n  color: $black;\n}\n\n.card-container {\n  @include dimensions(75vh, auto);\n\n  @include flex(row);\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding-top: 2em;\n  overflow: auto;\n  min-width: 90vw;\n}\n\n.trip-cards {\n  @include dimensions(40vh, auto);\n  @include flex(column);\n  align-items: center;\n  border: 1pt $black solid;\n  margin: 1.5em;\n  background-color: rgba($color: $trip-card-background, $alpha: 0.3)\n}\n\na {\n  color: $navy;\n  padding-bottom: 1%;\n  text-align: center;\n}\n\np {\n  margin: 0;\n  text-align: center;\n}\n\n.img-wrap {\n  @include dimensions(auto, 25vw);\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n}\n\n.trip-img {\n  max-width: auto;\n  max-height: 100%;\n}\n\n.destination-name {\n  margin-bottom: 1em;\n  border-bottom: 1pt $black solid;\n}","@import \"variables\";\n@import \"mixin\";\n@import \"login\";\n@import \"header\";\n@import \"bookingbar\";\n@import \"tripview\";\n\nhtml {\n  @include dimensions(100vh, 100vw);\n  @include flex(row);\n  justify-content: center;\n  background-color: $primary-background;\n  font-family: 'Yusei Magic',\n  sans-serif;\n}\n\nbody {\n  @include dimensions(auto, 90vw);\n}\n\nh1 {\n  margin: 0;\n}\n\nbutton {\n  font-family: 'Yusei Magic',\n  sans-serif;\n}\n\n.small-btn {\n  background-color: $accent-color;\n}\n\nfooter {\n  height: 6vh;\n  @include flex(row);\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.footer-info {\n  padding: 0 2% 0 2%;\n}\n\n@import \"responsive\";\n\n.hidden {\n  display: none;\n}","@media screen and (max-width: 1300px) {\n  .trip-cards {\n    @include dimensions(45vh, 40vw);\n  }\n\n  .drop {\n    @include dimensions(auto, 15vw);\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .trip-cards {\n    @include dimensions(45vh, 70vw);\n  }\n\n  .trip-img {\n    @include dimensions(auto, 100vw);\n  }\n\n  .drop {\n    @include dimensions(auto, 20vw);\n  }\n}\n\n@media screen and (max-width: 1020px) {\n  header {\n    @include flex(column);\n    align-items: center;\n  }\n\n  h1,\n  h2 {\n    text-align: center;\n  }\n\n  .left {\n    align-items: center;\n  }\n\n  .right {\n    align-items: center;\n    height: auto;\n  }\n\n  .logout {\n    align-self: center;\n  }\n\n  .adventure {\n    height: auto;\n  }\n\n  .trip-btns {\n    font-size: 10pt;\n  }\n\n  .booking {\n    @include flex(column);\n    max-width: 54vw;\n  }\n\n  .book-btn {\n    margin: 5%;\n  }\n\n  .img-wrap {\n    width: 60vw;\n  }\n\n  label {\n    margin: 1% 0;\n  }\n}\n\n@media screen and (max-width: 850px) {\n  .booking {\n    max-width: 25vw;\n  }\n\n  .drop {\n    width: 20vw;\n  }\n\n  label {\n    margin: 0 6%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");


class Traveler {
  constructor(travelerData, today) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.upcoming = [];
    this.present = [];
    this.past = [];
    this.pending = [];
    this.todaysDate = today.getTime();
  }

  createAllTrips(allTrips, allDestinations) {
    let filteredTrips = allTrips.filter(trip => trip.userID === this.id);
    let currentDestination;
    filteredTrips.forEach(trip => {
      allDestinations.forEach(location => {
        if (trip.destinationID === location.id) {
          currentDestination = location;
          this.allTrips.push(new _Trip_js__WEBPACK_IMPORTED_MODULE_0__["default"](trip, currentDestination));
        }
      })
    })
    return this.allTrips
  }

  sortAllTrips() {
    this.sortPresentTrips();
    this.sortPastTrips();
    this.sortPendingTrips();
    this.sortUpcomingTrips();
  }

  sortPresentTrips() {
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripEnd = trip.tripEndDate;
      let tripStart = trip.tripStartDate;
      let today = new Date(this.todaysDate).getTime();
      if (tripStart <= today && today <= tripEnd  && !this.present.includes(trip)) {
        this.present.push(trip);
      }
    })
  }

  sortUpcomingTrips() {
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripStart = trip.tripStartDate;
      let today = new Date(this.todaysDate).getTime();
      if (today < tripStart && !this.upcoming.includes(trip)) {
        this.upcoming.push(trip)
      }
    })
  }

  sortPastTrips() { 
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripEnd = trip.tripEndDate;
      if (tripEnd < this.todaysDate && !this.past.includes(trip)) {
        this.past.push(trip)
      }
    })
  }

  sortPendingTrips() {
    let pendingTrips = this.allTrips.filter(trip => trip.status === 'pending');
    pendingTrips.forEach(trip => {
      if (!this.pending.includes(trip)) {
        this.pending.push(trip);
      }
    })
  }

  calculateMoneySpentThisYear() {
    let pastYearTrips = this.allTrips.filter(trip => {
      trip.findTripDuration();
      let yearStart = new Date(this.todaysDate).setDate(new Date(this.todaysDate).getDate() - 365);
      if (trip.tripStartDate > yearStart) {
        return trip;
      }
    });

    const annual = pastYearTrips.reduce((annualSpent, trip) => {
      trip.estimatedTripCost();
      annualSpent += trip.tripCost;
      return annualSpent;
    }, 0);
  
    return annual;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);


/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destination = destinationData;
    this.travelerCount = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.activities = tripData.suggestedActivities;
    this.tripStartDate;
    this.tripEndDate;
    this.tripCost;
  }

  estimatedTripCost() {
    const totalLodging = this.destination.estimatedLodgingCostPerDay * this.duration;
    const totalFlight = this.destination.estimatedFlightCostPerPerson * this.travelerCount;
    const tripCost = totalLodging + totalFlight;
    const costWithAgentFee = tripCost + (tripCost * .10);
    this.tripCost = costWithAgentFee;
    return costWithAgentFee;
  }

  findTripDuration() {
    let tripStart = new Date(this.date);
    let tripEnd = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration);
    this.tripStartDate = tripStart.getTime();
    this.tripEndDate = tripEnd;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");



const apiCalls = {
  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => {
        if (!response.ok) {
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayFetchErrorHandling('We\'re having trouble with our site, please check back later!', '.login-error')
        }
        return response.json();
      })
      .then(allTravelers => {
        return allTravelers.travelers
      })
      .catch(err => console.log(err))
  },
  
  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => {
        if (!response.ok) {
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayFetchErrorHandling('We\'re having trouble with our site, please check back later!', '.login-error')
        }
        return response.json();
      })
      .then(allTrips => allTrips.trips)
      .catch(err => console.log(err))
  },
  
  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => {
        if (!response.ok) {
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayFetchErrorHandling('We\'re having trouble with our site, please check back later!', '.login-error')
        }
        return response.json();
      })
      .then(allDestinations => allDestinations.destinations)
      .catch(err => console.log(err))
  },
  
  fetchAllData() {
    return Promise.all([apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations()])
      .then(values => {
        return values;
      })
      .catch(err => console.log(err))   
  },

  postNewTrip(newestTrip, currentTraveler, allDestinations) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newestTrip), 
    })
      .then(response => {
        if (!response.ok) {
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayFetchErrorHandling('We\'re having trouble reaching the server, please contact your agent to book!', '.selection-err')
        }
        return response.json();
      })
      .then(data => {
        let requestedTrip = data.newTrip;
        let tripDestination = allDestinations.find(destination => {
          return destination.id === requestedTrip.destinationID;
        });
        requestedTrip = new _Trip_js__WEBPACK_IMPORTED_MODULE_1__["default"](requestedTrip, tripDestination);
        currentTraveler.sortAllTrips();
      })
      .catch(err => console.log(err));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (apiCalls);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {
  switchSectionDisplay() {
    const loginPage = document.querySelector('.login-page');
    const travelerDash = document.querySelector('.traveler-view');
    loginPage.classList.toggle('hidden');
    travelerDash.classList.toggle('hidden');
  },

  clearLoginInputs(username, password) {
    username.value = '';
    password.value = '';
  },

  displayUserName(currentUser) {
    const welcomeMessage = document.querySelector('.greeting');
    const fullName = currentUser.name.split(' ');
    const name = fullName[0];
    welcomeMessage.innerText = `Welcome, ${name}`;
  },

  displayTrips(currentUser, displayType) {
    const tripCards = document.querySelector('.card-container');
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (currentUser[displayType].length > 0) {
      currentUser[displayType].forEach(trip => {
        const formattedDate = this.formatDate(trip.date);
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <p>Trip date: ${formattedDate} <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a>
        </article>
        `;
      })
    } else {
      tripInfo = `
        <h3 class="no-trips">You do not have any ${displayType} trips :( <br>
        Plan one above!</h3>`;
    }
  
    tripCards.insertAdjacentHTML('beforeend', tripInfo);
  },

  displayTripSection(displayType) {
    const displayTripSection = document.querySelector('#trip-type-section');
    if (displayType === 'present') {
      displayType = 'current';
    }
    displayTripSection.innerHTML = `${displayType.toUpperCase()} TRIPS`;
  },

  formatDate(date) {
    let fullDate = new Date(date).toDateString();
    return fullDate;
  },

  displaySpending(cost) {
    const annualSpending = document.querySelector('#spending');
    annualSpending.innerText = `Total spent this year: $${cost}`;
  },

  createBookingSection(today, allDestinations) {
    const dropDown = document.querySelector('#destination-drop');
    allDestinations.sort((a, b) => {
      let destinationA = a.destination;
      let destinationB = b.destination;
      if (destinationA < destinationB) {
        return -1;
      } else if (destinationA > destinationB) {
        return 1;
      } else {
        return 0;
      }
    });

    let destinations = '';
    allDestinations.forEach((destination) => {
      destinations += `<option value="${destination.id}">${destination.destination}</option>`;
    });

    dropDown.insertAdjacentHTML('beforeend', destinations);
  },

  displayTripCost(message, button, cost) {
    message.classList.remove('hidden');
    message.innerText = `This trip will cost $${cost}`;
    button.classList.add('book');
  },

  changeBookTripButton(button) {
    if (button.classList.contains('book')) {
      button.innerText = 'Book It!';
    } else {
      button.innerText = 'Calculate Estimated Cost';
    }
  },
  
  resetBookingArea(start, duration, numTravelers, destination, button, message) {
    start.value = '';
    duration.value = '';
    numTravelers.value = '';
    destination.value = 0;
    button.classList.remove('book');
    message.innerText = 'Please select appropriate inputs!';
    message.classList.add('hidden');
  },

  displayFetchErrorHandling(message, selector) {
    let error = document.querySelector(selector);
    error.classList.remove('hidden');
    error.innerText = message;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/travel.png":
/*!*******************************!*\
  !*** ./src/images/travel.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/travel.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_travel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/travel.png */ "./src/images/travel.png");
/* harmony import */ var _Traveler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Traveler.js */ "./src/Traveler.js");
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiCalls.js */ "./src/apiCalls.js");









let allTravelers, allTrips, allDestinations, currentTraveler, today;

const tripButtons = document.querySelectorAll('.trip-btns');
const loginButton = document.querySelector('.submit');
const logoutButton = document.querySelector('.logout');
const bookingButton = document.querySelector('.book-btn');
const startDateInput = document.querySelector('#start');
const durationInput = document.querySelector('.trip-duration');
const numTravelersInput = document.querySelector('.num-travelers');
const destinationInput = document.querySelector('.drop');

window.addEventListener('load', fetchAllInfo)
loginButton.addEventListener('click', checkCredentials);
bookingButton.addEventListener('click', handleBookings);
logoutButton.addEventListener('click', _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].switchSectionDisplay)
tripButtons.forEach(button => button.addEventListener('click', displayTrips))

function checkCredentials() {
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const loginErrorMessage = document.querySelector('.login-error');
  let user = parseInt(usernameInput.value.slice(8));
  let userID = user - 1;
  fetchAllInfo();
  if (passwordInput.value !== 'travel2020' || usernameInput.value.length < 8 || !usernameInput.value.includes('traveler') || checkValidUser(user) === null) {
    loginErrorMessage.classList.remove('hidden');
  } else {
    loginErrorMessage.classList.add('hidden');
    createUser(userID);
    displayUser();
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].clearLoginInputs(usernameInput, passwordInput);
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].switchSectionDisplay();
  }
}

function checkValidUser(newUser) {
  const travelerID = allTravelers.find(traveler => traveler.id === newUser);
  if (travelerID === undefined) {
    return null;
  } else {
    return true;
  }
}

function fetchAllInfo() {
  _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__["default"].fetchAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      getTodaysDate();
    })
}

function createUser(id) {
  currentTraveler = new _Traveler_js__WEBPACK_IMPORTED_MODULE_2__["default"](allTravelers[id], today);
  currentTraveler.createAllTrips(allTrips, allDestinations);
  currentTraveler.sortAllTrips();
}

function displayUser() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayUserName(currentTraveler);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTrips(currentTraveler, 'upcoming');
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].createBookingSection(today, allDestinations);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displaySpending(currentTraveler.calculateMoneySpentThisYear());
}

function getTodaysDate() {
  today = new Date();
}

function displayTrips(event) {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTrips(currentTraveler, event.target.id);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTripSection(event.target.id)
}

function handleBookings(event) {
  const selectionError = document.querySelector('.selection-err');
  if (startDateInput.value === '' || durationInput === '' || numTravelersInput === '' || destinationInput.value <= 0) {
    selectionError.classList.remove('hidden')
  } else if (!event.target.classList.contains('book')) {
    const cost = estimateNewTripCost();
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTripCost(selectionError, bookingButton, cost);
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].changeBookTripButton(bookingButton);
  } else {
    sendBookingRequest();
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].resetBookingArea(startDateInput, durationInput, numTravelersInput, destinationInput, bookingButton, selectionError);
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].changeBookTripButton(bookingButton);
  }
}

function estimateNewTripCost() {
  let trip = collectBookingData();
  let myDestination = allDestinations.find(destination => {
    return destination.id === trip.destinationID;
  });
  let pendingTrip = new _Trip_js__WEBPACK_IMPORTED_MODULE_3__["default"] (trip, myDestination);
  return pendingTrip.estimatedTripCost();
}

function sendBookingRequest() {
  const newTrip = collectBookingData();
  allTrips.push(newTrip);
  createUser(currentTraveler.id - 1);
  displayUser();
  _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__["default"].postNewTrip(newTrip, currentTraveler, allDestinations)
    .then(res => {
      if (!res.ok) {
        _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayFetchErrorHandling('We\'re having trouble reaching the server, please contact your agent to book!', '.selection-err')
      }
      fetchAllInfo();
    });
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTripSection('upcoming');
}

function collectBookingData() {
  let duration = parseInt(durationInput.value);
  let travelers = parseInt(numTravelersInput.value);
  let destinationID = parseInt(destinationInput.value);
  return {
    id: getID(),
    userID: currentTraveler.id,
    destinationID,
    travelers,
    date: formatDateInput(),
    duration,
    status: 'pending',
    suggestedActivities: []
  }
}

function formatDateInput() {
  let date = startDateInput.value;
  const splitDate = date.split('-')
  return `${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`
}

function getID() {
  const tripIDs = allTrips.filter(trip => {
    return trip.id;
  })
  tripIDs.sort((a, b) => {
    return b.id - a.id;
  })
  return tripIDs[0].id + 1;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdHJhdmVsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVE7QUFDVjtBQUNBO0FBQ0EsUUFBUSxzREFBVTtBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMLEVBQUUsc0RBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWE7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sb2dpbi1wYWdlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4tc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NzY4MztcXG4gIGJvcmRlcjogMnB0ICMwMDAgc29saWQ7XFxuICBwYWRkaW5nOiAyJTsgfVxcblxcbi5sb2dpbi1pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDE1dmg7IH1cXG5cXG4ubG9naW4tZXJyb3Ige1xcbiAgZm9udC1zaXplOiBzbWFsbDsgfVxcblxcbi5zdWJtaXQge1xcbiAgZm9udC1zaXplOiBsYXJnZTsgfVxcblxcbi5sb2dpbi1sYWJlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4ubG9naW4taW1nIHtcXG4gIGhlaWdodDogMTV2aDsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGJvcmRlcjogMnB0ICMwMDAgc29saWQ7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IC43NSU7IH1cXG5cXG4ubGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cXG4ucmlnaHQge1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgd2lkdGg6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5sb2dvdXQge1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfVxcblxcbi5hZHZlbnR1cmUge1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgd2lkdGg6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJvcmRlcjogMnB4ICMwMDAgc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ3NjgzOyB9XFxuXFxuLmJvb2tpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDcwdnc7IH1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMSU7IH1cXG5cXG4uZHJvcCB7XFxuICB3aWR0aDogMTB2dztcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLnRyaXBzIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHQgIzAwMCBzb2xpZDsgfVxcblxcbi50YWJzIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtOyB9XFxuXFxuLnRyaXAtYnRucyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjB2dztcXG4gIHBhZGRpbmc6IDQlO1xcbiAgZm9udC1zaXplOiAxNnB0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGODc2ODtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNzV2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmctdG9wOiAyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1pbi13aWR0aDogOTB2dzsgfVxcblxcbi50cmlwLWNhcmRzIHtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHQgIzAwMCBzb2xpZDtcXG4gIG1hcmdpbjogMS41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk5LCAxMTAsIDExMSwgMC4zKTsgfVxcblxcbmEge1xcbiAgY29sb3I6ICMwMDAwODA7XFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5pbWctd3JhcCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjV2dztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4udHJpcC1pbWcge1xcbiAgbWF4LXdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxcblxcbi5kZXN0aW5hdGlvbi1uYW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGJvcmRlci1ib3R0b206IDFwdCAjMDAwIHNvbGlkOyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQ0Q4QzE7XFxuICBmb250LWZhbWlseTogJ1l1c2VpIE1hZ2ljJywgc2Fucy1zZXJpZjsgfVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwdnc7IH1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYycsIHNhbnMtc2VyaWY7IH1cXG5cXG4uc21hbGwtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjg3Njg7IH1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmZvb3Rlci1pbmZvIHtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xcbiAgLnRyaXAtY2FyZHMge1xcbiAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIHdpZHRoOiA0MHZ3OyB9XFxuICAuZHJvcCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDE1dnc7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xcbiAgLnRyaXAtY2FyZHMge1xcbiAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIHdpZHRoOiA3MHZ3OyB9XFxuICAudHJpcC1pbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgLmRyb3Age1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAyMHZ3OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIGgxLFxcbiAgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5sZWZ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnJpZ2h0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAubG9nb3V0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICAuYWR2ZW50dXJlIHtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAudHJpcC1idG5zIHtcXG4gICAgZm9udC1zaXplOiAxMHB0OyB9XFxuICAuYm9va2luZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogNTR2dzsgfVxcbiAgLmJvb2stYnRuIHtcXG4gICAgbWFyZ2luOiA1JTsgfVxcbiAgLmltZy13cmFwIHtcXG4gICAgd2lkdGg6IDYwdnc7IH1cXG4gIGxhYmVsIHtcXG4gICAgbWFyZ2luOiAxJSAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgLmJvb2tpbmcge1xcbiAgICBtYXgtd2lkdGg6IDI1dnc7IH1cXG4gIC5kcm9wIHtcXG4gICAgd2lkdGg6IDIwdnc7IH1cXG4gIGxhYmVsIHtcXG4gICAgbWFyZ2luOiAwIDYlOyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Jvb2tpbmdiYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdHJpcHZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3Jlc3BvbnNpdmUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQ01FLFlETHdCO0VDTXhCLFdETjhCO0VDQTlCLGFBQWE7RUFDYixtQkRBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdyQjtFQ0RFLFlERXdCO0VDRHhCLFdEQzhCO0VDUDlCLGFBQWE7RUFDYixzQkRPb0I7RUFDcEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkVY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RUFDL0I7O0FBR0g7RUFDRTtJTkxBLFlNTTBCO0lOTDFCLFdNS2dDLEVBQUE7RUFHaEM7SU5UQSxZTVUwQjtJTlQxQixZTVNpQyxFQUFBO0VBR2pDO0lOYkEsWU1jMEI7SU5iMUIsV01hZ0MsRUFBQSxFQUMvQjs7QUFHSDtFQUNFO0lOeEJBLGFBQWE7SUFDYixzQk13QnNCO0lBQ3BCLG1CQUFtQixFQUFBO0VBR3JCOztJQUVFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBR2Q7SUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lOdkRBLGFBQWE7SUFDYixzQk11RHNCO0lBQ3BCLGVBQWUsRUFBQTtFQUdqQjtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFHSDtFQUNFO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUR2Q0g7RUFDRSxhQUFhLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ2luLXBhZ2Uge1xcbiAgQGluY2x1ZGUgZGltZW5zaW9ucygxMDAlLCBhdXRvKTtcXG4gIEBpbmNsdWRlIGZsZXgocm93KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ2luLXNlY3Rpb24ge1xcbiAgQGluY2x1ZGUgZGltZW5zaW9ucyg1MHZoLCBhdXRvKTtcXG4gIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZDtcXG4gIGJvcmRlcjogMnB0ICRibGFjayBzb2xpZDtcXG4gIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4ubG9naW4taW5wdXRzIHtcXG4gIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLmxvZ2luLWVycm9yIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLmxvZ2luLWxhYmVscyB7XFxuICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XFxufVxcblxcbi5sb2dpbi1pbWcge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cIixcIkBtaXhpbiBmbGV4KCRkaXIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcXG59XFxuXFxuQG1peGluIGRpbWVuc2lvbnMoJGhlaWdodCwgJHdpZHRoKSB7XFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB3aWR0aDogJHdpZHRoO1xcbn1cIixcIiRwcmltYXJ5LWJhY2tncm91bmQ6ICNCQ0Q4QzE7XFxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kOiMzNDc2ODM7XFxuJGFjY2VudC1jb2xvcjojRkY4NzY4O1xcbiR0cmlwLWNhcmQtYmFja2dyb3VuZDogIzYzNkU2RjtcXG5cXG5cXG4kd2hpdGU6ICNmZmY7XFxuJGJsYWNrOiAjMDAwO1xcbiRuYXZ5OiAjMDAwMDgwO1wiLFwiaGVhZGVyIHtcXG4gIEBpbmNsdWRlIGZsZXgocm93KTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGJvcmRlcjogMnB0ICRibGFjayBzb2xpZDtcXG4gIGNvbG9yOiAkYmxhY2s7XFxuICBwYWRkaW5nOiAuNzUlO1xcbn1cXG5cXG4ubGVmdCB7XFxuICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgQGluY2x1ZGUgZGltZW5zaW9ucygyMHZoLCBhdXRvKTtcXG4gIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxvZ291dCB7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cIixcIi5hZHZlbnR1cmUge1xcbiAgQGluY2x1ZGUgZGltZW5zaW9ucygyNXZoLCBhdXRvKTtcXG4gIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJvcmRlcjogMnB4ICRibGFjayBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZDtcXG59XFxuXFxuLmJvb2tpbmcge1xcbiAgQGluY2x1ZGUgZmxleChyb3cpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA3MHZ3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuLmRyb3Age1xcbiAgd2lkdGg6IDEwdnc7XFxuICBwYWRkaW5nOiAxJTtcXG59XCIsXCIudHJpcHMge1xcbiAgQGluY2x1ZGUgZGltZW5zaW9ucygxMDB2aCwgYXV0byk7XFxuICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDJwdCAkYmxhY2sgc29saWQ7XFxufVxcblxcbi50YWJzIHtcXG4gIEBpbmNsdWRlIGRpbWVuc2lvbnMoYXV0bywgOTB2dyk7XFxuICBAaW5jbHVkZSBmbGV4KHJvdyk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG5cXG4udHJpcC1idG5zIHtcXG4gIEBpbmNsdWRlIGRpbWVuc2lvbnMoYXV0bywgMjB2dyk7XFxuICBwYWRkaW5nOiA0JTtcXG4gIGZvbnQtc2l6ZTogMTZwdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICBjb2xvcjogJGJsYWNrO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgQGluY2x1ZGUgZGltZW5zaW9ucyg3NXZoLCBhdXRvKTtcXG5cXG4gIEBpbmNsdWRlIGZsZXgocm93KTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWluLXdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4udHJpcC1jYXJkcyB7XFxuICBAaW5jbHVkZSBkaW1lbnNpb25zKDQwdmgsIGF1dG8pO1xcbiAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB0ICRibGFjayBzb2xpZDtcXG4gIG1hcmdpbjogMS41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJHRyaXAtY2FyZC1iYWNrZ3JvdW5kLCAkYWxwaGE6IDAuMylcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogJG5hdnk7XFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1nLXdyYXAge1xcbiAgQGluY2x1ZGUgZGltZW5zaW9ucyhhdXRvLCAyNXZ3KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50cmlwLWltZyB7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGVzdGluYXRpb24tbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBib3JkZXItYm90dG9tOiAxcHQgJGJsYWNrIHNvbGlkO1xcbn1cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwibWl4aW5cXFwiO1xcbkBpbXBvcnQgXFxcImxvZ2luXFxcIjtcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcbkBpbXBvcnQgXFxcImJvb2tpbmdiYXJcXFwiO1xcbkBpbXBvcnQgXFxcInRyaXB2aWV3XFxcIjtcXG5cXG5odG1sIHtcXG4gIEBpbmNsdWRlIGRpbWVuc2lvbnMoMTAwdmgsIDEwMHZ3KTtcXG4gIEBpbmNsdWRlIGZsZXgocm93KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLFxcbiAgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBAaW5jbHVkZSBkaW1lbnNpb25zKGF1dG8sIDkwdncpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ1l1c2VpIE1hZ2ljJyxcXG4gIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zbWFsbC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogNnZoO1xcbiAgQGluY2x1ZGUgZmxleChyb3cpO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItaW5mbyB7XFxuICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxufVxcblxcbkBpbXBvcnQgXFxcInJlc3BvbnNpdmVcXFwiO1xcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcXG4gIC50cmlwLWNhcmRzIHtcXG4gICAgQGluY2x1ZGUgZGltZW5zaW9ucyg0NXZoLCA0MHZ3KTtcXG4gIH1cXG5cXG4gIC5kcm9wIHtcXG4gICAgQGluY2x1ZGUgZGltZW5zaW9ucyhhdXRvLCAxNXZ3KTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XFxuICAudHJpcC1jYXJkcyB7XFxuICAgIEBpbmNsdWRlIGRpbWVuc2lvbnMoNDV2aCwgNzB2dyk7XFxuICB9XFxuXFxuICAudHJpcC1pbWcge1xcbiAgICBAaW5jbHVkZSBkaW1lbnNpb25zKGF1dG8sIDEwMHZ3KTtcXG4gIH1cXG5cXG4gIC5kcm9wIHtcXG4gICAgQGluY2x1ZGUgZGltZW5zaW9ucyhhdXRvLCAyMHZ3KTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBoMSxcXG4gIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmxlZnQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnJpZ2h0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmxvZ291dCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hZHZlbnR1cmUge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAudHJpcC1idG5zIHtcXG4gICAgZm9udC1zaXplOiAxMHB0O1xcbiAgfVxcblxcbiAgLmJvb2tpbmcge1xcbiAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XFxuICAgIG1heC13aWR0aDogNTR2dztcXG4gIH1cXG5cXG4gIC5ib29rLWJ0biB7XFxuICAgIG1hcmdpbjogNSU7XFxuICB9XFxuXFxuICAuaW1nLXdyYXAge1xcbiAgICB3aWR0aDogNjB2dztcXG4gIH1cXG5cXG4gIGxhYmVsIHtcXG4gICAgbWFyZ2luOiAxJSAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgLmJvb2tpbmcge1xcbiAgICBtYXgtd2lkdGg6IDI1dnc7XFxuICB9XFxuXFxuICAuZHJvcCB7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICBtYXJnaW46IDAgNiU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAuanMnO1xuXG5jbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyRGF0YSwgdG9kYXkpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXJEYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyRGF0YS5uYW1lO1xuICAgIHRoaXMudHlwZSA9IHRyYXZlbGVyRGF0YS50cmF2ZWxlclR5cGU7XG4gICAgdGhpcy5hbGxUcmlwcyA9IFtdO1xuICAgIHRoaXMudXBjb21pbmcgPSBbXTtcbiAgICB0aGlzLnByZXNlbnQgPSBbXTtcbiAgICB0aGlzLnBhc3QgPSBbXTtcbiAgICB0aGlzLnBlbmRpbmcgPSBbXTtcbiAgICB0aGlzLnRvZGF5c0RhdGUgPSB0b2RheS5nZXRUaW1lKCk7XG4gIH1cblxuICBjcmVhdGVBbGxUcmlwcyhhbGxUcmlwcywgYWxsRGVzdGluYXRpb25zKSB7XG4gICAgbGV0IGZpbHRlcmVkVHJpcHMgPSBhbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCk7XG4gICAgbGV0IGN1cnJlbnREZXN0aW5hdGlvbjtcbiAgICBmaWx0ZXJlZFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBhbGxEZXN0aW5hdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uSUQgPT09IGxvY2F0aW9uLmlkKSB7XG4gICAgICAgICAgY3VycmVudERlc3RpbmF0aW9uID0gbG9jYXRpb247XG4gICAgICAgICAgdGhpcy5hbGxUcmlwcy5wdXNoKG5ldyBUcmlwKHRyaXAsIGN1cnJlbnREZXN0aW5hdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMuYWxsVHJpcHNcbiAgfVxuXG4gIHNvcnRBbGxUcmlwcygpIHtcbiAgICB0aGlzLnNvcnRQcmVzZW50VHJpcHMoKTtcbiAgICB0aGlzLnNvcnRQYXN0VHJpcHMoKTtcbiAgICB0aGlzLnNvcnRQZW5kaW5nVHJpcHMoKTtcbiAgICB0aGlzLnNvcnRVcGNvbWluZ1RyaXBzKCk7XG4gIH1cblxuICBzb3J0UHJlc2VudFRyaXBzKCkge1xuICAgIHRoaXMuYWxsVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIHRyaXAuZmluZFRyaXBEdXJhdGlvbigpO1xuICAgICAgbGV0IHRyaXBFbmQgPSB0cmlwLnRyaXBFbmREYXRlO1xuICAgICAgbGV0IHRyaXBTdGFydCA9IHRyaXAudHJpcFN0YXJ0RGF0ZTtcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKHRoaXMudG9kYXlzRGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgaWYgKHRyaXBTdGFydCA8PSB0b2RheSAmJiB0b2RheSA8PSB0cmlwRW5kICAmJiAhdGhpcy5wcmVzZW50LmluY2x1ZGVzKHRyaXApKSB7XG4gICAgICAgIHRoaXMucHJlc2VudC5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzb3J0VXBjb21pbmdUcmlwcygpIHtcbiAgICB0aGlzLmFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICB0cmlwLmZpbmRUcmlwRHVyYXRpb24oKTtcbiAgICAgIGxldCB0cmlwU3RhcnQgPSB0cmlwLnRyaXBTdGFydERhdGU7XG4gICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5c0RhdGUpLmdldFRpbWUoKTtcbiAgICAgIGlmICh0b2RheSA8IHRyaXBTdGFydCAmJiAhdGhpcy51cGNvbWluZy5pbmNsdWRlcyh0cmlwKSkge1xuICAgICAgICB0aGlzLnVwY29taW5nLnB1c2godHJpcClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc29ydFBhc3RUcmlwcygpIHsgXG4gICAgdGhpcy5hbGxUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgdHJpcC5maW5kVHJpcER1cmF0aW9uKCk7XG4gICAgICBsZXQgdHJpcEVuZCA9IHRyaXAudHJpcEVuZERhdGU7XG4gICAgICBpZiAodHJpcEVuZCA8IHRoaXMudG9kYXlzRGF0ZSAmJiAhdGhpcy5wYXN0LmluY2x1ZGVzKHRyaXApKSB7XG4gICAgICAgIHRoaXMucGFzdC5wdXNoKHRyaXApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNvcnRQZW5kaW5nVHJpcHMoKSB7XG4gICAgbGV0IHBlbmRpbmdUcmlwcyA9IHRoaXMuYWxsVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdwZW5kaW5nJyk7XG4gICAgcGVuZGluZ1RyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBpZiAoIXRoaXMucGVuZGluZy5pbmNsdWRlcyh0cmlwKSkge1xuICAgICAgICB0aGlzLnBlbmRpbmcucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlTW9uZXlTcGVudFRoaXNZZWFyKCkge1xuICAgIGxldCBwYXN0WWVhclRyaXBzID0gdGhpcy5hbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgICB0cmlwLmZpbmRUcmlwRHVyYXRpb24oKTtcbiAgICAgIGxldCB5ZWFyU3RhcnQgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5c0RhdGUpLnNldERhdGUobmV3IERhdGUodGhpcy50b2RheXNEYXRlKS5nZXREYXRlKCkgLSAzNjUpO1xuICAgICAgaWYgKHRyaXAudHJpcFN0YXJ0RGF0ZSA+IHllYXJTdGFydCkge1xuICAgICAgICByZXR1cm4gdHJpcDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGFubnVhbCA9IHBhc3RZZWFyVHJpcHMucmVkdWNlKChhbm51YWxTcGVudCwgdHJpcCkgPT4ge1xuICAgICAgdHJpcC5lc3RpbWF0ZWRUcmlwQ29zdCgpO1xuICAgICAgYW5udWFsU3BlbnQgKz0gdHJpcC50cmlwQ29zdDtcbiAgICAgIHJldHVybiBhbm51YWxTcGVudDtcbiAgICB9LCAwKTtcbiAgXG4gICAgcmV0dXJuIGFubnVhbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjtcbiIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyaXBEYXRhLmlkO1xuICAgIHRoaXMudXNlcklEID0gdHJpcERhdGEudXNlcklEO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbkRhdGE7XG4gICAgdGhpcy50cmF2ZWxlckNvdW50ID0gdHJpcERhdGEudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRyaXBEYXRhLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXBEYXRhLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gdHJpcERhdGEuc3RhdHVzO1xuICAgIHRoaXMuYWN0aXZpdGllcyA9IHRyaXBEYXRhLnN1Z2dlc3RlZEFjdGl2aXRpZXM7XG4gICAgdGhpcy50cmlwU3RhcnREYXRlO1xuICAgIHRoaXMudHJpcEVuZERhdGU7XG4gICAgdGhpcy50cmlwQ29zdDtcbiAgfVxuXG4gIGVzdGltYXRlZFRyaXBDb3N0KCkge1xuICAgIGNvbnN0IHRvdGFsTG9kZ2luZyA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0aGlzLmR1cmF0aW9uO1xuICAgIGNvbnN0IHRvdGFsRmxpZ2h0ID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdGhpcy50cmF2ZWxlckNvdW50O1xuICAgIGNvbnN0IHRyaXBDb3N0ID0gdG90YWxMb2RnaW5nICsgdG90YWxGbGlnaHQ7XG4gICAgY29uc3QgY29zdFdpdGhBZ2VudEZlZSA9IHRyaXBDb3N0ICsgKHRyaXBDb3N0ICogLjEwKTtcbiAgICB0aGlzLnRyaXBDb3N0ID0gY29zdFdpdGhBZ2VudEZlZTtcbiAgICByZXR1cm4gY29zdFdpdGhBZ2VudEZlZTtcbiAgfVxuXG4gIGZpbmRUcmlwRHVyYXRpb24oKSB7XG4gICAgbGV0IHRyaXBTdGFydCA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XG4gICAgbGV0IHRyaXBFbmQgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpLnNldERhdGUobmV3IERhdGUodGhpcy5kYXRlKS5nZXREYXRlKCkgKyB0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLnRyaXBTdGFydERhdGUgPSB0cmlwU3RhcnQuZ2V0VGltZSgpO1xuICAgIHRoaXMudHJpcEVuZERhdGUgPSB0cmlwRW5kO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUcmlwOyIsImltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcy5qcyc7XG5pbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAuanMnXG5cbmNvbnN0IGFwaUNhbGxzID0ge1xuICBnZXRBbGxUcmF2ZWxlcnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlGZXRjaEVycm9ySGFuZGxpbmcoJ1dlXFwncmUgaGF2aW5nIHRyb3VibGUgd2l0aCBvdXIgc2l0ZSwgcGxlYXNlIGNoZWNrIGJhY2sgbGF0ZXIhJywgJy5sb2dpbi1lcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihhbGxUcmF2ZWxlcnMgPT4ge1xuICAgICAgICByZXR1cm4gYWxsVHJhdmVsZXJzLnRyYXZlbGVyc1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfSxcbiAgXG4gIGdldEFsbFRyaXBzKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlGZXRjaEVycm9ySGFuZGxpbmcoJ1dlXFwncmUgaGF2aW5nIHRyb3VibGUgd2l0aCBvdXIgc2l0ZSwgcGxlYXNlIGNoZWNrIGJhY2sgbGF0ZXIhJywgJy5sb2dpbi1lcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihhbGxUcmlwcyA9PiBhbGxUcmlwcy50cmlwcylcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfSxcbiAgXG4gIGdldEFsbERlc3RpbmF0aW9ucygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUZldGNoRXJyb3JIYW5kbGluZygnV2VcXCdyZSBoYXZpbmcgdHJvdWJsZSB3aXRoIG91ciBzaXRlLCBwbGVhc2UgY2hlY2sgYmFjayBsYXRlciEnLCAnLmxvZ2luLWVycm9yJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGFsbERlc3RpbmF0aW9ucyA9PiBhbGxEZXN0aW5hdGlvbnMuZGVzdGluYXRpb25zKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICB9LFxuICBcbiAgZmV0Y2hBbGxEYXRhKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbYXBpQ2FsbHMuZ2V0QWxsVHJhdmVsZXJzKCksIGFwaUNhbGxzLmdldEFsbFRyaXBzKCksIGFwaUNhbGxzLmdldEFsbERlc3RpbmF0aW9ucygpXSlcbiAgICAgIC50aGVuKHZhbHVlcyA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKSAgIFxuICB9LFxuXG4gIHBvc3ROZXdUcmlwKG5ld2VzdFRyaXAsIGN1cnJlbnRUcmF2ZWxlciwgYWxsRGVzdGluYXRpb25zKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdlc3RUcmlwKSwgXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUZldGNoRXJyb3JIYW5kbGluZygnV2VcXCdyZSBoYXZpbmcgdHJvdWJsZSByZWFjaGluZyB0aGUgc2VydmVyLCBwbGVhc2UgY29udGFjdCB5b3VyIGFnZW50IHRvIGJvb2shJywgJy5zZWxlY3Rpb24tZXJyJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBsZXQgcmVxdWVzdGVkVHJpcCA9IGRhdGEubmV3VHJpcDtcbiAgICAgICAgbGV0IHRyaXBEZXN0aW5hdGlvbiA9IGFsbERlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gZGVzdGluYXRpb24uaWQgPT09IHJlcXVlc3RlZFRyaXAuZGVzdGluYXRpb25JRDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3RlZFRyaXAgPSBuZXcgVHJpcChyZXF1ZXN0ZWRUcmlwLCB0cmlwRGVzdGluYXRpb24pO1xuICAgICAgICBjdXJyZW50VHJhdmVsZXIuc29ydEFsbFRyaXBzKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlDYWxsczsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBkb21VcGRhdGVzID0ge1xuICBzd2l0Y2hTZWN0aW9uRGlzcGxheSgpIHtcbiAgICBjb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tcGFnZScpO1xuICAgIGNvbnN0IHRyYXZlbGVyRGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2ZWxlci12aWV3Jyk7XG4gICAgbG9naW5QYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIHRyYXZlbGVyRGFzaC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSxcblxuICBjbGVhckxvZ2luSW5wdXRzKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIHVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgcGFzc3dvcmQudmFsdWUgPSAnJztcbiAgfSxcblxuICBkaXNwbGF5VXNlck5hbWUoY3VycmVudFVzZXIpIHtcbiAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZycpO1xuICAgIGNvbnN0IGZ1bGxOYW1lID0gY3VycmVudFVzZXIubmFtZS5zcGxpdCgnICcpO1xuICAgIGNvbnN0IG5hbWUgPSBmdWxsTmFtZVswXTtcbiAgICB3ZWxjb21lTWVzc2FnZS5pbm5lclRleHQgPSBgV2VsY29tZSwgJHtuYW1lfWA7XG4gIH0sXG5cbiAgZGlzcGxheVRyaXBzKGN1cnJlbnRVc2VyLCBkaXNwbGF5VHlwZSkge1xuICAgIGNvbnN0IHRyaXBDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuICAgIHRyaXBDYXJkcy5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgdHJpcEluZm8gPSAnJztcbiAgICBpZiAoY3VycmVudFVzZXJbZGlzcGxheVR5cGVdLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRVc2VyW2Rpc3BsYXlUeXBlXS5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gdGhpcy5mb3JtYXREYXRlKHRyaXAuZGF0ZSk7XG4gICAgICAgIHRyaXBJbmZvICs9IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0cmlwLWNhcmRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctd3JhcFwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwidHJpcC1pbWdcIiBzcmM9JHt0cmlwLmRlc3RpbmF0aW9uLmltYWdlfSBhbHQ9JHt0cmlwLmRlc3RpbmF0aW9uLmFsdH0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3M9XCJkZXN0aW5hdGlvbi1uYW1lXCI+JHt0cmlwLmRlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDM+XG4gICAgICAgIDxwPlRyaXAgZGF0ZTogJHtmb3JtYXR0ZWREYXRlfSA8YnI+XG4gICAgICAgIFRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyQ291bnR9IDxicj5cbiAgICAgICAgRHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn0gPGJyPlxuICAgICAgICBTdGF0dXM6ICR7dHJpcC5zdGF0dXN9IDxicj4gPC9wPlxuICAgICAgICA8YT5SZXF1ZXN0IGFjdGl2aXRpZXMgZnJvbSB5b3VyIHRyYXZlbCBhZ2VudCE8L2E+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgYDtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaXBJbmZvID0gYFxuICAgICAgICA8aDMgY2xhc3M9XCJuby10cmlwc1wiPllvdSBkbyBub3QgaGF2ZSBhbnkgJHtkaXNwbGF5VHlwZX0gdHJpcHMgOiggPGJyPlxuICAgICAgICBQbGFuIG9uZSBhYm92ZSE8L2gzPmA7XG4gICAgfVxuICBcbiAgICB0cmlwQ2FyZHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0cmlwSW5mbyk7XG4gIH0sXG5cbiAgZGlzcGxheVRyaXBTZWN0aW9uKGRpc3BsYXlUeXBlKSB7XG4gICAgY29uc3QgZGlzcGxheVRyaXBTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtdHlwZS1zZWN0aW9uJyk7XG4gICAgaWYgKGRpc3BsYXlUeXBlID09PSAncHJlc2VudCcpIHtcbiAgICAgIGRpc3BsYXlUeXBlID0gJ2N1cnJlbnQnO1xuICAgIH1cbiAgICBkaXNwbGF5VHJpcFNlY3Rpb24uaW5uZXJIVE1MID0gYCR7ZGlzcGxheVR5cGUudG9VcHBlckNhc2UoKX0gVFJJUFNgO1xuICB9LFxuXG4gIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIGxldCBmdWxsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpO1xuICAgIHJldHVybiBmdWxsRGF0ZTtcbiAgfSxcblxuICBkaXNwbGF5U3BlbmRpbmcoY29zdCkge1xuICAgIGNvbnN0IGFubnVhbFNwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZW5kaW5nJyk7XG4gICAgYW5udWFsU3BlbmRpbmcuaW5uZXJUZXh0ID0gYFRvdGFsIHNwZW50IHRoaXMgeWVhcjogJCR7Y29zdH1gO1xuICB9LFxuXG4gIGNyZWF0ZUJvb2tpbmdTZWN0aW9uKHRvZGF5LCBhbGxEZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBkcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0aW5hdGlvbi1kcm9wJyk7XG4gICAgYWxsRGVzdGluYXRpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGxldCBkZXN0aW5hdGlvbkEgPSBhLmRlc3RpbmF0aW9uO1xuICAgICAgbGV0IGRlc3RpbmF0aW9uQiA9IGIuZGVzdGluYXRpb247XG4gICAgICBpZiAoZGVzdGluYXRpb25BIDwgZGVzdGluYXRpb25CKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoZGVzdGluYXRpb25BID4gZGVzdGluYXRpb25CKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZGVzdGluYXRpb25zID0gJyc7XG4gICAgYWxsRGVzdGluYXRpb25zLmZvckVhY2goKGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgICBkZXN0aW5hdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2Rlc3RpbmF0aW9uLmlkfVwiPiR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9vcHRpb24+YDtcbiAgICB9KTtcblxuICAgIGRyb3BEb3duLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGVzdGluYXRpb25zKTtcbiAgfSxcblxuICBkaXNwbGF5VHJpcENvc3QobWVzc2FnZSwgYnV0dG9uLCBjb3N0KSB7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBtZXNzYWdlLmlubmVyVGV4dCA9IGBUaGlzIHRyaXAgd2lsbCBjb3N0ICQke2Nvc3R9YDtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYm9vaycpO1xuICB9LFxuXG4gIGNoYW5nZUJvb2tUcmlwQnV0dG9uKGJ1dHRvbikge1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdib29rJykpIHtcbiAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnQm9vayBJdCEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0NhbGN1bGF0ZSBFc3RpbWF0ZWQgQ29zdCc7XG4gICAgfVxuICB9LFxuICBcbiAgcmVzZXRCb29raW5nQXJlYShzdGFydCwgZHVyYXRpb24sIG51bVRyYXZlbGVycywgZGVzdGluYXRpb24sIGJ1dHRvbiwgbWVzc2FnZSkge1xuICAgIHN0YXJ0LnZhbHVlID0gJyc7XG4gICAgZHVyYXRpb24udmFsdWUgPSAnJztcbiAgICBudW1UcmF2ZWxlcnMudmFsdWUgPSAnJztcbiAgICBkZXN0aW5hdGlvbi52YWx1ZSA9IDA7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Jvb2snKTtcbiAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICdQbGVhc2Ugc2VsZWN0IGFwcHJvcHJpYXRlIGlucHV0cyEnO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgZGlzcGxheUZldGNoRXJyb3JIYW5kbGluZyhtZXNzYWdlLCBzZWxlY3Rvcikge1xuICAgIGxldCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGVycm9yLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90cmF2ZWwucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuXG5pbXBvcnQgJy4vaW1hZ2VzL3RyYXZlbC5wbmcnO1xuXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi9UcmF2ZWxlci5qcyc7XG5pbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAuanMnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJztcbmltcG9ydCBhcGlDYWxscyBmcm9tICcuL2FwaUNhbGxzLmpzJ1xuXG5sZXQgYWxsVHJhdmVsZXJzLCBhbGxUcmlwcywgYWxsRGVzdGluYXRpb25zLCBjdXJyZW50VHJhdmVsZXIsIHRvZGF5O1xuXG5jb25zdCB0cmlwQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmlwLWJ0bnMnKTtcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuY29uc3QgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ291dCcpO1xuY29uc3QgYm9va2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWJ0bicpO1xuY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKTtcbmNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1kdXJhdGlvbicpO1xuY29uc3QgbnVtVHJhdmVsZXJzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtLXRyYXZlbGVycycpO1xuY29uc3QgZGVzdGluYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZmV0Y2hBbGxJbmZvKVxubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NyZWRlbnRpYWxzKTtcbmJvb2tpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCb29raW5ncyk7XG5sb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21VcGRhdGVzLnN3aXRjaFNlY3Rpb25EaXNwbGF5KVxudHJpcEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRyaXBzKSlcblxuZnVuY3Rpb24gY2hlY2tDcmVkZW50aWFscygpIHtcbiAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpO1xuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG4gIGNvbnN0IGxvZ2luRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWVycm9yJyk7XG4gIGxldCB1c2VyID0gcGFyc2VJbnQodXNlcm5hbWVJbnB1dC52YWx1ZS5zbGljZSg4KSk7XG4gIGxldCB1c2VySUQgPSB1c2VyIC0gMTtcbiAgZmV0Y2hBbGxJbmZvKCk7XG4gIGlmIChwYXNzd29yZElucHV0LnZhbHVlICE9PSAndHJhdmVsMjAyMCcgfHwgdXNlcm5hbWVJbnB1dC52YWx1ZS5sZW5ndGggPCA4IHx8ICF1c2VybmFtZUlucHV0LnZhbHVlLmluY2x1ZGVzKCd0cmF2ZWxlcicpIHx8IGNoZWNrVmFsaWRVc2VyKHVzZXIpID09PSBudWxsKSB7XG4gICAgbG9naW5FcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgbG9naW5FcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY3JlYXRlVXNlcih1c2VySUQpO1xuICAgIGRpc3BsYXlVc2VyKCk7XG4gICAgZG9tVXBkYXRlcy5jbGVhckxvZ2luSW5wdXRzKHVzZXJuYW1lSW5wdXQsIHBhc3N3b3JkSW5wdXQpO1xuICAgIGRvbVVwZGF0ZXMuc3dpdGNoU2VjdGlvbkRpc3BsYXkoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkVXNlcihuZXdVc2VyKSB7XG4gIGNvbnN0IHRyYXZlbGVySUQgPSBhbGxUcmF2ZWxlcnMuZmluZCh0cmF2ZWxlciA9PiB0cmF2ZWxlci5pZCA9PT0gbmV3VXNlcik7XG4gIGlmICh0cmF2ZWxlcklEID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmZXRjaEFsbEluZm8oKSB7XG4gIGFwaUNhbGxzLmZldGNoQWxsRGF0YSgpXG4gICAgLnRoZW4oYWxsRGF0YSA9PiB7XG4gICAgICBhbGxUcmF2ZWxlcnMgPSBhbGxEYXRhWzBdO1xuICAgICAgYWxsVHJpcHMgPSBhbGxEYXRhWzFdO1xuICAgICAgYWxsRGVzdGluYXRpb25zID0gYWxsRGF0YVsyXTtcbiAgICAgIGdldFRvZGF5c0RhdGUoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyKGlkKSB7XG4gIGN1cnJlbnRUcmF2ZWxlciA9IG5ldyBUcmF2ZWxlcihhbGxUcmF2ZWxlcnNbaWRdLCB0b2RheSk7XG4gIGN1cnJlbnRUcmF2ZWxlci5jcmVhdGVBbGxUcmlwcyhhbGxUcmlwcywgYWxsRGVzdGluYXRpb25zKTtcbiAgY3VycmVudFRyYXZlbGVyLnNvcnRBbGxUcmlwcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VXNlcigpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VXNlck5hbWUoY3VycmVudFRyYXZlbGVyKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcHMoY3VycmVudFRyYXZlbGVyLCAndXBjb21pbmcnKTtcbiAgZG9tVXBkYXRlcy5jcmVhdGVCb29raW5nU2VjdGlvbih0b2RheSwgYWxsRGVzdGluYXRpb25zKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5U3BlbmRpbmcoY3VycmVudFRyYXZlbGVyLmNhbGN1bGF0ZU1vbmV5U3BlbnRUaGlzWWVhcigpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgdG9kYXkgPSBuZXcgRGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VHJpcHMoZXZlbnQpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcHMoY3VycmVudFRyYXZlbGVyLCBldmVudC50YXJnZXQuaWQpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwU2VjdGlvbihldmVudC50YXJnZXQuaWQpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJvb2tpbmdzKGV2ZW50KSB7XG4gIGNvbnN0IHNlbGVjdGlvbkVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbi1lcnInKTtcbiAgaWYgKHN0YXJ0RGF0ZUlucHV0LnZhbHVlID09PSAnJyB8fCBkdXJhdGlvbklucHV0ID09PSAnJyB8fCBudW1UcmF2ZWxlcnNJbnB1dCA9PT0gJycgfHwgZGVzdGluYXRpb25JbnB1dC52YWx1ZSA8PSAwKSB7XG4gICAgc2VsZWN0aW9uRXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSBlbHNlIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm9vaycpKSB7XG4gICAgY29uc3QgY29zdCA9IGVzdGltYXRlTmV3VHJpcENvc3QoKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwQ29zdChzZWxlY3Rpb25FcnJvciwgYm9va2luZ0J1dHRvbiwgY29zdCk7XG4gICAgZG9tVXBkYXRlcy5jaGFuZ2VCb29rVHJpcEJ1dHRvbihib29raW5nQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBzZW5kQm9va2luZ1JlcXVlc3QoKTtcbiAgICBkb21VcGRhdGVzLnJlc2V0Qm9va2luZ0FyZWEoc3RhcnREYXRlSW5wdXQsIGR1cmF0aW9uSW5wdXQsIG51bVRyYXZlbGVyc0lucHV0LCBkZXN0aW5hdGlvbklucHV0LCBib29raW5nQnV0dG9uLCBzZWxlY3Rpb25FcnJvcik7XG4gICAgZG9tVXBkYXRlcy5jaGFuZ2VCb29rVHJpcEJ1dHRvbihib29raW5nQnV0dG9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlc3RpbWF0ZU5ld1RyaXBDb3N0KCkge1xuICBsZXQgdHJpcCA9IGNvbGxlY3RCb29raW5nRGF0YSgpO1xuICBsZXQgbXlEZXN0aW5hdGlvbiA9IGFsbERlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IHtcbiAgICByZXR1cm4gZGVzdGluYXRpb24uaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRDtcbiAgfSk7XG4gIGxldCBwZW5kaW5nVHJpcCA9IG5ldyBUcmlwICh0cmlwLCBteURlc3RpbmF0aW9uKTtcbiAgcmV0dXJuIHBlbmRpbmdUcmlwLmVzdGltYXRlZFRyaXBDb3N0KCk7XG59XG5cbmZ1bmN0aW9uIHNlbmRCb29raW5nUmVxdWVzdCgpIHtcbiAgY29uc3QgbmV3VHJpcCA9IGNvbGxlY3RCb29raW5nRGF0YSgpO1xuICBhbGxUcmlwcy5wdXNoKG5ld1RyaXApO1xuICBjcmVhdGVVc2VyKGN1cnJlbnRUcmF2ZWxlci5pZCAtIDEpO1xuICBkaXNwbGF5VXNlcigpO1xuICBhcGlDYWxscy5wb3N0TmV3VHJpcChuZXdUcmlwLCBjdXJyZW50VHJhdmVsZXIsIGFsbERlc3RpbmF0aW9ucylcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5RmV0Y2hFcnJvckhhbmRsaW5nKCdXZVxcJ3JlIGhhdmluZyB0cm91YmxlIHJlYWNoaW5nIHRoZSBzZXJ2ZXIsIHBsZWFzZSBjb250YWN0IHlvdXIgYWdlbnQgdG8gYm9vayEnLCAnLnNlbGVjdGlvbi1lcnInKVxuICAgICAgfVxuICAgICAgZmV0Y2hBbGxJbmZvKCk7XG4gICAgfSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVRyaXBTZWN0aW9uKCd1cGNvbWluZycpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0Qm9va2luZ0RhdGEoKSB7XG4gIGxldCBkdXJhdGlvbiA9IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpO1xuICBsZXQgdHJhdmVsZXJzID0gcGFyc2VJbnQobnVtVHJhdmVsZXJzSW5wdXQudmFsdWUpO1xuICBsZXQgZGVzdGluYXRpb25JRCA9IHBhcnNlSW50KGRlc3RpbmF0aW9uSW5wdXQudmFsdWUpO1xuICByZXR1cm4ge1xuICAgIGlkOiBnZXRJRCgpLFxuICAgIHVzZXJJRDogY3VycmVudFRyYXZlbGVyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQsXG4gICAgdHJhdmVsZXJzLFxuICAgIGRhdGU6IGZvcm1hdERhdGVJbnB1dCgpLFxuICAgIGR1cmF0aW9uLFxuICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IFtdXG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZUlucHV0KCkge1xuICBsZXQgZGF0ZSA9IHN0YXJ0RGF0ZUlucHV0LnZhbHVlO1xuICBjb25zdCBzcGxpdERhdGUgPSBkYXRlLnNwbGl0KCctJylcbiAgcmV0dXJuIGAke3NwbGl0RGF0ZVswXX0vJHtzcGxpdERhdGVbMV19LyR7c3BsaXREYXRlWzJdfWBcbn1cblxuZnVuY3Rpb24gZ2V0SUQoKSB7XG4gIGNvbnN0IHRyaXBJRHMgPSBhbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgcmV0dXJuIHRyaXAuaWQ7XG4gIH0pXG4gIHRyaXBJRHMuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBiLmlkIC0gYS5pZDtcbiAgfSlcbiAgcmV0dXJuIHRyaXBJRHNbMF0uaWQgKyAxO1xufSJdLCJzb3VyY2VSb290IjoiIn0=