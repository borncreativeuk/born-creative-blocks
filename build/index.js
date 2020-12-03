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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/localhost8080/git/wordpress/autograph-blocks/src/index.js: Expected corresponding JSX closing tag for <img> (125:16)\n\n\u001b[0m \u001b[90m 123 | \u001b[39m                className\u001b[33m=\u001b[39m\u001b[32m\"media\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 124 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m\u001b[32m\"{ attributes.imgUrl }\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 125 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 126 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"copy\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 127 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"col-full\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 128 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mRichText\u001b[39m\u001b[33m.\u001b[39m\u001b[33mContent\u001b[39m \u001b[0m\n    at Object._raise (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:748:17)\n    at Object.raiseWithData (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.raise (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.jsxParseElementAt (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:4721:16)\n    at Object.jsxParseElementAt (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:4689:32)\n    at Object.jsxParseElementAt (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:4689:32)\n    at Object.jsxParseElement (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:4747:17)\n    at Object.parseExprAtom (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:4754:19)\n    at Object.parseExprSubscripts (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10122:23)\n    at Object.parseUpdate (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10102:21)\n    at Object.parseMaybeUnary (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10091:17)\n    at Object.parseExprOps (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9961:23)\n    at Object.parseMaybeConditional (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9935:23)\n    at Object.parseMaybeAssign (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9898:21)\n    at allowInAnd (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9865:39)\n    at Object.allowInAnd (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:11521:12)\n    at Object.parseMaybeAssignAllowIn (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Object.parseParenAndDistinguishExpression (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10725:28)\n    at Object.parseExprAtom (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10443:21)\n    at Object.parseExprAtom (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:4759:20)\n    at Object.parseExprSubscripts (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10122:23)\n    at Object.parseUpdate (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10102:21)\n    at Object.parseMaybeUnary (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:10091:17)\n    at Object.parseExprOps (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9961:23)\n    at Object.parseMaybeConditional (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9935:23)\n    at Object.parseMaybeAssign (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9898:21)\n    at Object.parseExpressionBase (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9843:23)\n    at allowInAnd (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9837:39)\n    at Object.allowInAnd (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:11515:16)\n    at Object.parseExpression (/Users/localhost8080/git/wordpress/autograph-blocks/node_modules/@babel/parser/lib/index.js:9837:17)");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map