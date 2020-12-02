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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.view.scss */ "./src/style.view.scss");
/* harmony import */ var _style_view_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_view_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.editor.scss */ "./src/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_3__);




var getBlockDefaultClassName = wp.blocks.getBlockDefaultClassName;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('borncreative/header-block', {
  title: 'Header Block',
  icon: 'smiley',
  category: 'common',
  attributes: {
    bodyContent: {
      source: 'html',
      selector: '.copy-bd'
    },
    heading: {
      source: 'html',
      selector: 'h2'
    },
    imgUrl: {
      type: 'string',
      default: 'http://placehold.it/500'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        setAttributes = props.setAttributes;
    var attributes = props.attributes; // we create a function that will take the changes from RichText
    // and update the attributes

    function changeBodyContent(changes) {
      setAttributes({
        bodyContent: changes
      });
    }

    function changeHeading(heading) {
      // using some nice js features instead of typing
      // { heading: heading }
      setAttributes({
        heading: heading
      });
    }

    function selectImage(value) {
      console.log(value);
      setAttributes({
        imgUrl: value.sizes.full.url
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        padding: '1em 0'
      }
    }, "Options")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "media"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: selectImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          onClick: open
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: attributes.imgUrl
        }));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "copy"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "copy-hd",
      tagName: "h2",
      placeholder: "Enter your heading",
      value: attributes.heading,
      onChange: changeHeading
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "copy-bd",
      tagName: "h3",
      placeholder: "Enter your text here",
      value: attributes.bodyContent,
      onChange: changeBodyContent
    })))];
  },
  save: function save(props) {
    var className = getBlockDefaultClassName('borncreative/header-block');
    var attributes = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "media"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: attributes.imgUrl
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "copy"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      class: "copy-hd",
      tagName: "h2",
      value: attributes.heading
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "copy-bd",
      tagName: "h3",
      value: attributes.bodyContent
    })));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('borncreative/intro-text-block', {
  title: 'Intro Text Block',
  icon: 'smiley',
  category: 'common',
  attributes: {
    bodyContent: {
      source: 'html',
      selector: '.copy-bd'
    },
    headinga: {
      source: 'html',
      selector: '.headinga'
    },
    headingb: {
      source: 'html',
      selector: '.headingb'
    },
    headingc: {
      source: 'html',
      selector: '.headingc'
    },
    linea: {
      source: 'html',
      selector: '.linea'
    },
    lineb: {
      source: 'html',
      selector: '.lineb'
    },
    linec: {
      source: 'html',
      selector: '.linec'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        setAttributes = props.setAttributes;
    var attributes = props.attributes; // we create a function that will take the changes from RichText
    // and update the attributes

    function changeBodyContent(changes) {
      setAttributes({
        bodyContent: changes
      });
    }

    function changeHeadinga(headinga) {
      setAttributes({
        headinga: headinga
      });
    }

    function changeHeadingb(headingb) {
      setAttributes({
        headingb: headingb
      });
    }

    function changeHeadingc(headingc) {
      setAttributes({
        headingc: headingc
      });
    }

    function changeLinea(linea) {
      setAttributes({
        linea: linea
      });
    }

    function changeLineb(lineb) {
      setAttributes({
        lineb: lineb
      });
    }

    function changeLinec(linec) {
      setAttributes({
        linec: linec
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        padding: '1em 0'
      }
    }, "Options")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "copy col-full"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "column"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "copy-bd",
      tagName: "p",
      placeholder: "Enter your text here",
      value: attributes.bodyContent,
      onChange: changeBodyContent
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "column"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "headinga",
      tagName: "h4",
      placeholder: "Client",
      value: attributes.headinga,
      onChange: changeHeadinga
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "linea",
      tagName: "p",
      placeholder: "Client Name",
      value: attributes.linea,
      onChange: changeLinea
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "headingb",
      tagName: "h4",
      placeholder: "Project Type",
      value: attributes.headingb,
      onChange: changeHeadingb
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "lineb",
      tagName: "p",
      placeholder: "Client Name",
      value: attributes.lineb,
      onChange: changeLineb
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "headingc",
      tagName: "h4",
      placeholder: "Services",
      value: attributes.headingc,
      onChange: changeHeadingc
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "linec",
      tagName: "p",
      placeholder: "Client Name",
      value: attributes.linec,
      onChange: changeLinec
    })))))];
  },
  save: function save(props) {
    var className = getBlockDefaultClassName('borncreative/intro-text-block');
    var attributes = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "copy col-full"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "column"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "copy-bd",
      tagName: "p",
      value: attributes.bodyContent
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "column"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      class: "headinga",
      tagName: "h4",
      value: attributes.headinga
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      class: "linea",
      tagName: "p",
      value: attributes.linea
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      class: "headingb",
      tagName: "h4",
      value: attributes.headingb
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      class: "lineb",
      tagName: "p",
      value: attributes.lineb
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      class: "headingc",
      tagName: "h4",
      value: attributes.headingc
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      class: "linec",
      tagName: "p",
      value: attributes.linec
    })))));
  }
});

/***/ }),

/***/ "./src/style.editor.scss":
/*!*******************************!*\
  !*** ./src/style.editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style.view.scss":
/*!*****************************!*\
  !*** ./src/style.view.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map