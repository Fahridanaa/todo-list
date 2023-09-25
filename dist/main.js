/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-primary-1: rgb(255, 245, 224);
  --color-primary-2: rgb(255, 107, 107, 0.8);
  --color-primary-3: rgb(187, 37, 37);
  --color-primary-4: #141e46;
}

* {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: rgb(255, 245, 224, 0.4);
}

button {
  all: unset;
  cursor: pointer;
}

#sidebar {
  width: 250px;
  background-color: var(--color-primary-1);
  color: var(--color-primary-3);
  font-weight: 700;
  height: 95%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}

#sidebar.active {
  transform: translateX(0%);
}

#dashboard-section {
  height: 6rem;
  display: flex;
  flex-direction: column;
}

#project-section > .section-title {
  height: 2rem;
  margin-bottom: 10px;
  display: flex;
}

#project-section > .section-title > h4 {
  display: flex;
  align-items: center;
}


#project-list {
  display: flex;
  flex-direction: column;
}

#dashboard-section button, #project-list button {
  padding: 10px;
  border-radius: 10px;
}

#dashboard-section button:hover, #project-list button:hover {
  background-color: rgb(255, 235, 224);
}

#nav {
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary-2);
    gap: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#nav > div {
  display: flex;
  align-items: center;
  padding: 8px 5px;
  margin: 0px 8px;
  gap: 16px;
}

#right {
  justify-content: flex-end;
}

#nav button {
  height: 2rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
}

#nav button:hover {
  background-color: rgb(255, 235, 224);
}

button img {
  height: 90%;
  border-radius: 10px;
}

#search > label {
  display: flex;
}

#search > label > img {
  background-color: white;
  flex: 1;
  border-radius: 20px 0px 0px 20px;
}

#search > label > input {
  flex: 10;
  border: none;
  padding: 5px;
  font-size: 16px;
  border-radius: 0px 20px 20px 0px;
}

#search > label > input:focus {
  outline: none;
}

#todoModal {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */  
}

#todoForm {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
  height: 25%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#todoForm > * {
  border: none;
  flex: 1;
}

#todoForm > #inputTitle {
  flex: 2;
  font-weight: 700;
  font-size: 1.4rem;
}

#dueDate {
  display: flex;
  gap: 8px;
}

#chooseProject {
  display: flex;
  gap: 8px;
}

#todoForm > #buttons {
  flex: 2;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

#todoForm > #buttons > button {
  padding: 5px;
  border-radius: 5px;
  width: 15%;
  text-align: center;
}

#todoForm > #buttons > button#submit {
  background-color: var(--color-primary-2);
  color: var(--color-primary-1);
}

#todoForm > #buttons > button:hover {
  background-color: rgba(0,0,0,0.4);
  color: #f3f3f3
}

input:focus {
  outline:none!important;
}

#main {
  display: flex;
  gap: 32px;
  padding-right: 282px;
}

#cards {
  padding: 25px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill ,minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill ,minmax(150px, 1fr));
  gap: 16px;
}

.card {
  background-color: var(--color-primary-1);
  border-radius: 25px;
  display: flex;
  gap: 8px;
  padding: 16px 8px 16px 16px;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
}

.card > input {
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.card > input:hover {
  border: 1px solid var(--color-primary-4);
}

.card > input:checked {
  background-color: gray;
}

.card .card-clear {
  background-color: var(--color-primary-1);
  height: 2rem;
}

.card .card-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
}

.card > .card-content > .text-content {
  display: flex;
  flex-direction: column;
}

.card > .card-content > .text-content > .card-title {
  font-weight: 700;
  font-size: 1.2rem;
}

.card > .card-content > .card-date {
  flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --color-primary-1: rgb(255, 245, 224);\r\n  --color-primary-2: rgb(255, 107, 107, 0.8);\r\n  --color-primary-3: rgb(187, 37, 37);\r\n  --color-primary-4: #141e46;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n    background-color: rgb(255, 245, 224, 0.4);\r\n}\r\n\r\nbutton {\r\n  all: unset;\r\n  cursor: pointer;\r\n}\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  background-color: var(--color-primary-1);\r\n  color: var(--color-primary-3);\r\n  font-weight: 700;\r\n  height: 95%;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease;\r\n  transform: translateX(-100%);\r\n}\r\n\r\n#sidebar.active {\r\n  transform: translateX(0%);\r\n}\r\n\r\n#dashboard-section {\r\n  height: 6rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#project-section > .section-title {\r\n  height: 2rem;\r\n  margin-bottom: 10px;\r\n  display: flex;\r\n}\r\n\r\n#project-section > .section-title > h4 {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n#project-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#dashboard-section button, #project-list button {\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#dashboard-section button:hover, #project-list button:hover {\r\n  background-color: rgb(255, 235, 224);\r\n}\r\n\r\n#nav {\r\n    height: 5%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: var(--color-primary-2);\r\n    gap: 16px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#nav > div {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 8px 5px;\r\n  margin: 0px 8px;\r\n  gap: 16px;\r\n}\r\n\r\n#right {\r\n  justify-content: flex-end;\r\n}\r\n\r\n#nav button {\r\n  height: 2rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n\r\n#nav button:hover {\r\n  background-color: rgb(255, 235, 224);\r\n}\r\n\r\nbutton img {\r\n  height: 90%;\r\n  border-radius: 10px;\r\n}\r\n\r\n#search > label {\r\n  display: flex;\r\n}\r\n\r\n#search > label > img {\r\n  background-color: white;\r\n  flex: 1;\r\n  border-radius: 20px 0px 0px 20px;\r\n}\r\n\r\n#search > label > input {\r\n  flex: 10;\r\n  border: none;\r\n  padding: 5px;\r\n  font-size: 16px;\r\n  border-radius: 0px 20px 20px 0px;\r\n}\r\n\r\n#search > label > input:focus {\r\n  outline: none;\r\n}\r\n\r\n#todoModal {\r\n  display: none;\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  overflow: auto;\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */  \r\n}\r\n\r\n#todoForm {\r\n  background-color: #fefefe;\r\n  margin: 10% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 25%;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n#todoForm > * {\r\n  border: none;\r\n  flex: 1;\r\n}\r\n\r\n#todoForm > #inputTitle {\r\n  flex: 2;\r\n  font-weight: 700;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n#dueDate {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n#chooseProject {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n#todoForm > #buttons {\r\n  flex: 2;\r\n  margin-top: 15px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 8px;\r\n}\r\n\r\n#todoForm > #buttons > button {\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  width: 15%;\r\n  text-align: center;\r\n}\r\n\r\n#todoForm > #buttons > button#submit {\r\n  background-color: var(--color-primary-2);\r\n  color: var(--color-primary-1);\r\n}\r\n\r\n#todoForm > #buttons > button:hover {\r\n  background-color: rgba(0,0,0,0.4);\r\n  color: #f3f3f3\r\n}\r\n\r\ninput:focus {\r\n  outline:none!important;\r\n}\r\n\r\n#main {\r\n  display: flex;\r\n  gap: 32px;\r\n  padding-right: 282px;\r\n}\r\n\r\n#cards {\r\n  padding: 25px 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill ,minmax(200px, 1fr));\r\n  grid-template-rows: repeat(auto-fill ,minmax(150px, 1fr));\r\n  gap: 16px;\r\n}\r\n\r\n.card {\r\n  background-color: var(--color-primary-1);\r\n  border-radius: 25px;\r\n  display: flex;\r\n  gap: 8px;\r\n  padding: 16px 8px 16px 16px;\r\n  box-shadow: 0 0 5px rgba(0,0,0,0.4);\r\n}\r\n\r\n.card > input {\r\n  width: 1.3em;\r\n  height: 1.3em;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  vertical-align: middle;\r\n  border: 1px solid #ddd;\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.card > input:hover {\r\n  border: 1px solid var(--color-primary-4);\r\n}\r\n\r\n.card > input:checked {\r\n  background-color: gray;\r\n}\r\n\r\n.card .card-clear {\r\n  background-color: var(--color-primary-1);\r\n  height: 2rem;\r\n}\r\n\r\n.card .card-content {\r\n  flex: 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 32px;\r\n}\r\n\r\n.card > .card-content > .text-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card > .card-content > .text-content > .card-title {\r\n  font-weight: 700;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.card > .card-content > .card-date {\r\n  flex: 1;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Card.js":
/*!*********************!*\
  !*** ./src/Card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon_close_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/close-outline.svg */ "./src/icon/close-outline.svg");


class Card {
  constructor(todo, index) {
    this.todo = todo;
    this.index = index;
    this.element = this.createCardElement();
  }

  createCardElement() {
    const card = document.createElement('div');
    card.classList.add('card', `card-${this.index}`);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const textContent = document.createElement('div');
    textContent.classList.add('text-content');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('card-title');
    titleElement.textContent = this.todo.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('card-text');
    descriptionElement.textContent = this.todo.description;

    textContent.appendChild(titleElement);
    textContent.appendChild(descriptionElement);

    const dueDateElement = document.createElement('p');
    dueDateElement.classList.add('card-date');
    dueDateElement.textContent = this.todo.dueDate;

    const clearElement = document.createElement('button');
    clearElement.classList.add('card-clear');

    const clearIconImg = document.createElement('img');
    clearIconImg.setAttribute('src', _icon_close_outline_svg__WEBPACK_IMPORTED_MODULE_0__);

    clearElement.appendChild(clearIconImg);

    clearElement.addEventListener('click', () => {
      let todoArray = JSON.parse(localStorage.getItem('todoData')) || [];
      todoArray.splice(this.index, 1);
      localStorage.setItem('todoData', JSON.stringify(todoArray));
      location.reload();
    });

    const checklistElement = document.createElement('input');
    checklistElement.setAttribute('type', 'checkbox');
    checklistElement.checked = this.todo.checklist;

    cardContent.appendChild(textContent);
    cardContent.appendChild(dueDateElement);

    card.appendChild(checklistElement);
    card.appendChild(cardContent);
    card.appendChild(clearElement);

    return card;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/Card.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  let cards = document.createElement('div');
  cards.setAttribute('id', 'cards');
  
  todoData.forEach((todo, index) => {
    const card = new _Card__WEBPACK_IMPORTED_MODULE_0__["default"](todo, index);
    cards.appendChild(card.element);
  });

  main.appendChild((0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])());
  main.appendChild(cards);
  return main;
});


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoModal)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


function createInputElement(type, id, placeholder, name, required = false) {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', type);
  inputElement.setAttribute('id', id);
  inputElement.setAttribute('placeholder', placeholder);
  inputElement.setAttribute('name', name);

  if (required) {
    inputElement.setAttribute('required', '');
  }

  return inputElement;
}

function createLabelForElement(forId, textContent) {
  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', forId);
  labelElement.textContent = textContent;

  return labelElement;
}

function createSelectElement(id, name) {
  const selectElement = document.createElement('select');
  selectElement.setAttribute('id', id);
  selectElement.setAttribute('name', name);

  return selectElement;
}

function createOptionElement(value, textContent) {
  const optionElement = document.createElement('option');
  optionElement.setAttribute('value', value);
  optionElement.textContent = textContent;

  return optionElement;
}

function createButtonElement(type, id, textContent, clickHandler) {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', type);
  buttonElement.setAttribute('id', id);
  buttonElement.textContent = textContent;
  buttonElement.addEventListener('click', clickHandler);

  return buttonElement;
}

function createForm() {
  const formElement = document.createElement('form');
  formElement.setAttribute('id', 'todoForm');

  formElement.addEventListener('submit', () => {
    const todoArray = JSON.parse(localStorage.getItem('todoData')) || [];
    const formData = new FormData(formElement);

    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate = formData.get('dueDate');
    const project = formData.get('project');

    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, project, false);
    todoArray.push(todo);

    localStorage.setItem('todoData', JSON.stringify(todoArray));
  });

  return formElement;
}

function createCancelButton(formElement, modalElement) {
  const cancelButton = createButtonElement(
    'button',
    'cancel',
    'Cancel',
    () => {
      modalElement.style.display = 'none';
      formElement.reset();
    }
  );

  return cancelButton;
}

function createTaskInputElements() {
  const titleInput = createInputElement('text', 'inputTitle', 'Task Name', 'title', true);
  const descriptionInput = createInputElement('text', 'inputDescription', 'Description', 'description');
  const dueDateInput = createInputElement('date', 'inputDueDate', '', 'dueDate');

  const labelDueDate = createLabelForElement('inputDueDate', 'Due Date:');
  const dueDateDiv = document.createElement('div');
  dueDateDiv.setAttribute('id', 'dueDate');

  dueDateDiv.appendChild(labelDueDate);
  dueDateDiv.appendChild(dueDateInput);

  return [titleInput, descriptionInput, dueDateDiv];
}

function createProjectSelection() {
  const chooseProject = document.createElement('div');
  chooseProject.setAttribute('id', 'chooseProject');

  const label = createLabelForElement('selectProject', 'Choose a project:');
  const selectProject = createSelectElement('selectProject', 'project');
  const projectOption = createOptionElement('default', 'Default');

  selectProject.appendChild(projectOption);

  chooseProject.appendChild(label);
  chooseProject.appendChild(selectProject);

  return chooseProject;
}

function createSubmitButton() {
  return createButtonElement('submit', 'submit', 'Add Task', null);
}

function createTodoModal() {
  const modalElement = document.createElement('div');
  modalElement.setAttribute('id', 'todoModal');

  const formElement = createForm();

  const taskInputElements = createTaskInputElements();
  const projectSelection = createProjectSelection();

  taskInputElements.forEach(element => {
    formElement.appendChild(element);
  });
  formElement.appendChild(projectSelection);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.setAttribute('id', 'buttons');

  const cancelButton = createCancelButton(formElement, modalElement);
  const submitButton = createSubmitButton();

  buttonsDiv.appendChild(cancelButton);
  buttonsDiv.appendChild(submitButton);

  formElement.appendChild(buttonsDiv);

  modalElement.appendChild(formElement);

  return modalElement;
}


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavBar)
/* harmony export */ });
/* harmony import */ var _icon_menu_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/menu-outline.svg */ "./src/icon/menu-outline.svg");
/* harmony import */ var _icon_home_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/home-outline.svg */ "./src/icon/home-outline.svg");
/* harmony import */ var _icon_add_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/add-outline.svg */ "./src/icon/add-outline.svg");
/* harmony import */ var _icon_search_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon/search-outline.svg */ "./src/icon/search-outline.svg");





function createButton(id, icon) {
  const button = document.createElement('button');
  button.id = id;

  const img = document.createElement('img');
  img.setAttribute('src', icon);

  button.appendChild(img);

  return button;
}

function createMenuButton() {
  const menuButton = createButton('menu', _icon_menu_outline_svg__WEBPACK_IMPORTED_MODULE_0__);
  menuButton.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  });
  return menuButton;
}

function createHomeButton() {
  return createButton('home', _icon_home_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
}

function createAddButton() {
  const addButton = createButton('add', _icon_add_outline_svg__WEBPACK_IMPORTED_MODULE_2__);
  addButton.addEventListener('click', () => {
    const modal = document.getElementById('todoModal');
    modal.style.display = 'block';
  });
  return addButton;
}

function createSearch() {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search';
  input.id = 'search-input';

  const icon = document.createElement('img');
  icon.setAttribute('src', _icon_search_outline_svg__WEBPACK_IMPORTED_MODULE_3__);

  const label = document.createElement('label');
  label.setAttribute('for', 'search-input');
  label.appendChild(icon);
  label.appendChild(input);

  const searchDiv = document.createElement('div');
  searchDiv.id = 'search';
  searchDiv.appendChild(label);

  return searchDiv;
}

function createNavBar() {
  const nav = document.createElement('div');
  const right = document.createElement('div');
  const left = document.createElement('div');

  nav.setAttribute('id', 'nav');
  right.setAttribute('id', 'right');
  left.setAttribute('id', 'left');

  left.appendChild(createMenuButton());
  left.appendChild(createHomeButton());
  right.appendChild(createAddButton());

  nav.appendChild(left);
  nav.appendChild(createSearch());
  nav.appendChild(right);

  return nav;
}
  

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createDashboardButton(text) {
  const button = document.createElement('button');
  button.innerHTML = text;
  return button;
}

function createDashboardSection() {
  const dashboardSection = document.createElement('div');
  dashboardSection.setAttribute('id', 'dashboard-section');

  const dashboardContent = ['Dashboard', 'Today'];

  dashboardContent.forEach(text => {
    const button = createDashboardButton(text);
    dashboardSection.appendChild(button);
  });

  return dashboardSection;
}

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  const dashboard = createDashboardSection();
  sidebar.appendChild(dashboard);

  return sidebar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSidebar);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getProject() {
    return this.project;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setProject(project) {
    this.project = project;
  }

}


/***/ }),

/***/ "./src/icon/add-outline.svg":
/*!**********************************!*\
  !*** ./src/icon/add-outline.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f011c470b6dbc12da9c6.svg";

/***/ }),

/***/ "./src/icon/close-outline.svg":
/*!************************************!*\
  !*** ./src/icon/close-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4aee1cabe5f30512b8c.svg";

/***/ }),

/***/ "./src/icon/home-outline.svg":
/*!***********************************!*\
  !*** ./src/icon/home-outline.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12228d5bbded1e01cf15.svg";

/***/ }),

/***/ "./src/icon/menu-outline.svg":
/*!***********************************!*\
  !*** ./src/icon/menu-outline.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c1ac3701907bec8eee8.svg";

/***/ }),

/***/ "./src/icon/search-outline.svg":
/*!*************************************!*\
  !*** ./src/icon/search-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a48c7259d2af327dc8a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ "./src/main.js");





function createApp() {
  const app = document.createElement('div');
  app.setAttribute('id', 'app');

  const components = [_modal_js__WEBPACK_IMPORTED_MODULE_2__["default"], _navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"], _main_js__WEBPACK_IMPORTED_MODULE_3__["default"]];

  components.forEach(component => {
    app.appendChild(component());
  });

  return app;
}

window.onload = () => {
  document.body.appendChild(createApp());
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLHNCQUFzQixxQkFBcUIsV0FBVyxVQUFVLFVBQVUsd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySitDO0FBQ0E7QUFDRjtBQUNNO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbURBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1EQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrREFBTztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscURBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQjtBQUNGO0FBQ0Y7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBVyxFQUFFLGtEQUFZLEVBQUUsZ0RBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9DYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWNvbG9yLXByaW1hcnktMTogcmdiKDI1NSwgMjQ1LCAyMjQpO1xyXG4gIC0tY29sb3ItcHJpbWFyeS0yOiByZ2IoMjU1LCAxMDcsIDEwNywgMC44KTtcclxuICAtLWNvbG9yLXByaW1hcnktMzogcmdiKDE4NywgMzcsIDM3KTtcclxuICAtLWNvbG9yLXByaW1hcnktNDogIzE0MWU0NjtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0NSwgMjI0LCAwLjQpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGFsbDogdW5zZXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMSk7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMyk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG59XHJcblxyXG4jZGFzaGJvYXJkLXNlY3Rpb24ge1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNwcm9qZWN0LXNlY3Rpb24gPiAuc2VjdGlvbi10aXRsZSB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI3Byb2plY3Qtc2VjdGlvbiA+IC5zZWN0aW9uLXRpdGxlID4gaDQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNwcm9qZWN0LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2Rhc2hib2FyZC1zZWN0aW9uIGJ1dHRvbiwgI3Byb2plY3QtbGlzdCBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2Rhc2hib2FyZC1zZWN0aW9uIGJ1dHRvbjpob3ZlciwgI3Byb2plY3QtbGlzdCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNSwgMjI0KTtcclxufVxyXG5cclxuI25hdiB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4jbmF2ID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDVweDtcclxuICBtYXJnaW46IDBweCA4cHg7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4jcmlnaHQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbiNuYXYgYnV0dG9uIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuI25hdiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNSwgMjI0KTtcclxufVxyXG5cclxuYnV0dG9uIGltZyB7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI3NlYXJjaCA+IGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jc2VhcmNoID4gbGFiZWwgPiBpbWcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbiNzZWFyY2ggPiBsYWJlbCA+IGlucHV0IHtcclxuICBmbGV4OiAxMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxufVxyXG5cclxuI3NlYXJjaCA+IGxhYmVsID4gaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiN0b2RvTW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovICBcclxufVxyXG5cclxuI3RvZG9Gb3JtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbiN0b2RvRm9ybSA+ICoge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4jdG9kb0Zvcm0gPiAjaW5wdXRUaXRsZSB7XHJcbiAgZmxleDogMjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4jZHVlRGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuI2Nob29zZVByb2plY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbiN0b2RvRm9ybSA+ICNidXR0b25zIHtcclxuICBmbGV4OiAyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4jdG9kb0Zvcm0gPiAjYnV0dG9ucyA+IGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3RvZG9Gb3JtID4gI2J1dHRvbnMgPiBidXR0b24jc3VibWl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTEpO1xyXG59XHJcblxyXG4jdG9kb0Zvcm0gPiAjYnV0dG9ucyA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gIGNvbG9yOiAjZjNmM2YzXHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOm5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjgycHg7XHJcbn1cclxuXHJcbiNjYXJkcyB7XHJcbiAgcGFkZGluZzogMjVweCAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsICxtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCAsbWlubWF4KDE1MHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxNnB4IDhweCAxNnB4IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuXHJcbi5jYXJkID4gaW5wdXQge1xyXG4gIHdpZHRoOiAxLjNlbTtcclxuICBoZWlnaHQ6IDEuM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkID4gaW5wdXQ6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktNCk7XHJcbn1cclxuXHJcbi5jYXJkID4gaW5wdXQ6Y2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtY2xlYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMSk7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1jb250ZW50IHtcclxuICBmbGV4OiAzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAzMnB4O1xyXG59XHJcblxyXG4uY2FyZCA+IC5jYXJkLWNvbnRlbnQgPiAudGV4dC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYXJkID4gLmNhcmQtY29udGVudCA+IC50ZXh0LWNvbnRlbnQgPiAuY2FyZC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmNhcmQgPiAuY2FyZC1jb250ZW50ID4gLmNhcmQtZGF0ZSB7XHJcbiAgZmxleDogMTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsbUNBQW1DO0VBQ25DLDBCQUEwQjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMseUNBQXlDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VB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Q2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWNvbG9yLXByaW1hcnktMTogcmdiKDI1NSwgMjQ1LCAyMjQpO1xcclxcbiAgLS1jb2xvci1wcmltYXJ5LTI6IHJnYigyNTUsIDEwNywgMTA3LCAwLjgpO1xcclxcbiAgLS1jb2xvci1wcmltYXJ5LTM6IHJnYigxODcsIDM3LCAzNyk7XFxyXFxuICAtLWNvbG9yLXByaW1hcnktNDogIzE0MWU0NjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ1LCAyMjQsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTEpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMyk7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGFzaGJvYXJkLXNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXNlY3Rpb24gPiAuc2VjdGlvbi10aXRsZSB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc2VjdGlvbiA+IC5zZWN0aW9uLXRpdGxlID4gaDQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNwcm9qZWN0LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNkYXNoYm9hcmQtc2VjdGlvbiBidXR0b24sICNwcm9qZWN0LWxpc3QgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGFzaGJvYXJkLXNlY3Rpb24gYnV0dG9uOmhvdmVyLCAjcHJvamVjdC1saXN0IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzUsIDIyNCk7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgICBoZWlnaHQ6IDUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMik7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogOHB4IDVweDtcXHJcXG4gIG1hcmdpbjogMHB4IDhweDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbiNuYXYgYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXYgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNSwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIGltZyB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2ggPiBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoID4gbGFiZWwgPiBpbWcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2ggPiBsYWJlbCA+IGlucHV0IHtcXHJcXG4gIGZsZXg6IDEwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2ggPiBsYWJlbCA+IGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvTW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqLyAgXFxyXFxufVxcclxcblxcclxcbiN0b2RvRm9ybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgbWFyZ2luOiAxMCUgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvRm9ybSA+ICoge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9Gb3JtID4gI2lucHV0VGl0bGUge1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZURhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2hvb3NlUHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvRm9ybSA+ICNidXR0b25zIHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9Gb3JtID4gI2J1dHRvbnMgPiBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9Gb3JtID4gI2J1dHRvbnMgPiBidXR0b24jc3VibWl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMik7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9Gb3JtID4gI2J1dHRvbnMgPiBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgY29sb3I6ICNmM2YzZjNcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTpub25lIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDI4MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZHMge1xcclxcbiAgcGFkZGluZzogMjVweCAwO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCAsbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCAsbWlubWF4KDE1MHB4LCAxZnIpKTtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0xKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAxNnB4IDhweCAxNnB4IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgPiBpbnB1dCB7XFxyXFxuICB3aWR0aDogMS4zZW07XFxyXFxuICBoZWlnaHQ6IDEuM2VtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCA+IGlucHV0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktNCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkID4gaW5wdXQ6Y2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuY2FyZC1jbGVhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTEpO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuY2FyZC1jb250ZW50IHtcXHJcXG4gIGZsZXg6IDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgPiAuY2FyZC1jb250ZW50ID4gLnRleHQtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgPiAuY2FyZC1jb250ZW50ID4gLnRleHQtY29udGVudCA+IC5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgPiAuY2FyZC1jb250ZW50ID4gLmNhcmQtZGF0ZSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNsZWFySWNvbiBmcm9tICcuL2ljb24vY2xvc2Utb3V0bGluZS5zdmcnO1xyXG5cclxuY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IodG9kbywgaW5kZXgpIHtcclxuICAgIHRoaXMudG9kbyA9IHRvZG87XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUNhcmRFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDYXJkRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsIGBjYXJkLSR7dGhpcy5pbmRleH1gKTtcclxuXHJcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xyXG4gICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy50b2RvLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcclxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMudG9kby5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xyXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGR1ZURhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGF0ZScpO1xyXG4gICAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnRvZG8uZHVlRGF0ZTtcclxuXHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNsZWFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNsZWFyJyk7XHJcblxyXG4gICAgY29uc3QgY2xlYXJJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjbGVhckljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBjbGVhckljb24pO1xyXG5cclxuICAgIGNsZWFyRWxlbWVudC5hcHBlbmRDaGlsZChjbGVhckljb25JbWcpO1xyXG5cclxuICAgIGNsZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHRvZG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9EYXRhJykpIHx8IFtdO1xyXG4gICAgICB0b2RvQXJyYXkuc3BsaWNlKHRoaXMuaW5kZXgsIDEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0RhdGEnLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyYXkpKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjaGVja2xpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrbGlzdEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjaGVja2xpc3RFbGVtZW50LmNoZWNrZWQgPSB0aGlzLnRvZG8uY2hlY2tsaXN0O1xyXG5cclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVFbGVtZW50KTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrbGlzdEVsZW1lbnQpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNsZWFyRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5pbXBvcnQgY3JlYXRlU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0RhdGEnKSkgfHwgW107XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xyXG5cclxuICBsZXQgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRzJyk7XHJcbiAgXHJcbiAgdG9kb0RhdGEuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh0b2RvLCBpbmRleCk7XHJcbiAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkLmVsZW1lbnQpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXIoKSk7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkcyk7XHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtZW50KHR5cGUsIGlkLCBwbGFjZWhvbGRlciwgbmFtZSwgcmVxdWlyZWQgPSBmYWxzZSkge1xyXG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xyXG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcclxuXHJcbiAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnB1dEVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsRm9yRWxlbWVudChmb3JJZCwgdGV4dENvbnRlbnQpIHtcclxuICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZvcklkKTtcclxuICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgcmV0dXJuIGxhYmVsRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0RWxlbWVudChpZCwgbmFtZSkge1xyXG4gIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBzZWxlY3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgc2VsZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcclxuXHJcbiAgcmV0dXJuIHNlbGVjdEVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkVsZW1lbnQodmFsdWUsIHRleHRDb250ZW50KSB7XHJcbiAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcclxuICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gIHJldHVybiBvcHRpb25FbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25FbGVtZW50KHR5cGUsIGlkLCB0ZXh0Q29udGVudCwgY2xpY2tIYW5kbGVyKSB7XHJcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XHJcbiAgYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gIGJ1dHRvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICBidXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvRm9ybScpO1xyXG5cclxuICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvRGF0YScpKSB8fCBbXTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGZvcm1EYXRhLmdldCgncHJvamVjdCcpO1xyXG5cclxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIGZhbHNlKTtcclxuICAgIHRvZG9BcnJheS5wdXNoKHRvZG8pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvRGF0YScsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm9ybUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhbmNlbEJ1dHRvbihmb3JtRWxlbWVudCwgbW9kYWxFbGVtZW50KSB7XHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQnV0dG9uRWxlbWVudChcclxuICAgICdidXR0b24nLFxyXG4gICAgJ2NhbmNlbCcsXHJcbiAgICAnQ2FuY2VsJyxcclxuICAgICgpID0+IHtcclxuICAgICAgbW9kYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGZvcm1FbGVtZW50LnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGNhbmNlbEJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0lucHV0RWxlbWVudHMoKSB7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUlucHV0RWxlbWVudCgndGV4dCcsICdpbnB1dFRpdGxlJywgJ1Rhc2sgTmFtZScsICd0aXRsZScsIHRydWUpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBjcmVhdGVJbnB1dEVsZW1lbnQoJ3RleHQnLCAnaW5wdXREZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicpO1xyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGNyZWF0ZUlucHV0RWxlbWVudCgnZGF0ZScsICdpbnB1dER1ZURhdGUnLCAnJywgJ2R1ZURhdGUnKTtcclxuXHJcbiAgY29uc3QgbGFiZWxEdWVEYXRlID0gY3JlYXRlTGFiZWxGb3JFbGVtZW50KCdpbnB1dER1ZURhdGUnLCAnRHVlIERhdGU6Jyk7XHJcbiAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGR1ZURhdGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XHJcblxyXG4gIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcclxuICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcblxyXG4gIHJldHVybiBbdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZURpdl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWxlY3Rpb24oKSB7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNob29zZVByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjaG9vc2VQcm9qZWN0Jyk7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWxGb3JFbGVtZW50KCdzZWxlY3RQcm9qZWN0JywgJ0Nob29zZSBhIHByb2plY3Q6Jyk7XHJcbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGNyZWF0ZVNlbGVjdEVsZW1lbnQoJ3NlbGVjdFByb2plY3QnLCAncHJvamVjdCcpO1xyXG4gIGNvbnN0IHByb2plY3RPcHRpb24gPSBjcmVhdGVPcHRpb25FbGVtZW50KCdkZWZhdWx0JywgJ0RlZmF1bHQnKTtcclxuXHJcbiAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcclxuXHJcbiAgY2hvb3NlUHJvamVjdC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY2hvb3NlUHJvamVjdC5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KTtcclxuXHJcbiAgcmV0dXJuIGNob29zZVByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbigpIHtcclxuICByZXR1cm4gY3JlYXRlQnV0dG9uRWxlbWVudCgnc3VibWl0JywgJ3N1Ym1pdCcsICdBZGQgVGFzaycsIG51bGwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kYWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb01vZGFsJyk7XHJcblxyXG4gIGNvbnN0IGZvcm1FbGVtZW50ID0gY3JlYXRlRm9ybSgpO1xyXG5cclxuICBjb25zdCB0YXNrSW5wdXRFbGVtZW50cyA9IGNyZWF0ZVRhc2tJbnB1dEVsZW1lbnRzKCk7XHJcbiAgY29uc3QgcHJvamVjdFNlbGVjdGlvbiA9IGNyZWF0ZVByb2plY3RTZWxlY3Rpb24oKTtcclxuXHJcbiAgdGFza0lucHV0RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rpb24pO1xyXG5cclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbnMnKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQ2FuY2VsQnV0dG9uKGZvcm1FbGVtZW50LCBtb2RhbEVsZW1lbnQpO1xyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZVN1Ym1pdEJ1dHRvbigpO1xyXG5cclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgbW9kYWxFbGVtZW50LmFwcGVuZENoaWxkKGZvcm1FbGVtZW50KTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsRWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgbWVudUljb24gZnJvbSAnLi9pY29uL21lbnUtb3V0bGluZS5zdmcnO1xyXG5pbXBvcnQgaG9tZUljb24gZnJvbSAnLi9pY29uL2hvbWUtb3V0bGluZS5zdmcnO1xyXG5pbXBvcnQgYWRkSWNvbiBmcm9tICcuL2ljb24vYWRkLW91dGxpbmUuc3ZnJztcclxuaW1wb3J0IHNlYXJjaEljb24gZnJvbSAnLi9pY29uL3NlYXJjaC1vdXRsaW5lLnN2Zyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oaWQsIGljb24pIHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uaWQgPSBpZDtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvbik7XHJcblxyXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51QnV0dG9uKCkge1xyXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ21lbnUnLCBtZW51SWNvbik7XHJcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICByZXR1cm4gbWVudUJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG9tZUJ1dHRvbigpIHtcclxuICByZXR1cm4gY3JlYXRlQnV0dG9uKCdob21lJywgaG9tZUljb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24oKSB7XHJcbiAgY29uc3QgYWRkQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdhZGQnLCBhZGRJY29uKTtcclxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTW9kYWwnKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhZGRCdXR0b247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xyXG4gIGlucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCc7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgc2VhcmNoSWNvbik7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWFyY2gtaW5wdXQnKTtcclxuICBsYWJlbC5hcHBlbmRDaGlsZChpY29uKTtcclxuICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaERpdi5pZCA9ICdzZWFyY2gnO1xyXG4gIHNlYXJjaERpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gIHJldHVybiBzZWFyY2hEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XHJcbiAgcmlnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdyaWdodCcpO1xyXG4gIGxlZnQuc2V0QXR0cmlidXRlKCdpZCcsICdsZWZ0Jyk7XHJcblxyXG4gIGxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUJ1dHRvbigpKTtcclxuICBsZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVCdXR0b24oKSk7XHJcbiAgcmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkQnV0dG9uKCkpO1xyXG5cclxuICBuYXYuYXBwZW5kQ2hpbGQobGVmdCk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZVNlYXJjaCgpKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcbiAgIiwiZnVuY3Rpb24gY3JlYXRlRGFzaGJvYXJkQnV0dG9uKHRleHQpIHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uaW5uZXJIVE1MID0gdGV4dDtcclxuICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXNoYm9hcmRTZWN0aW9uKCkge1xyXG4gIGNvbnN0IGRhc2hib2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXNoYm9hcmRTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGFzaGJvYXJkLXNlY3Rpb24nKTtcclxuXHJcbiAgY29uc3QgZGFzaGJvYXJkQ29udGVudCA9IFsnRGFzaGJvYXJkJywgJ1RvZGF5J107XHJcblxyXG4gIGRhc2hib2FyZENvbnRlbnQuZm9yRWFjaCh0ZXh0ID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZURhc2hib2FyZEJ1dHRvbih0ZXh0KTtcclxuICAgIGRhc2hib2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhc2hib2FyZFNlY3Rpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XHJcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XHJcblxyXG4gIGNvbnN0IGRhc2hib2FyZCA9IGNyZWF0ZURhc2hib2FyZFNlY3Rpb24oKTtcclxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XHJcblxyXG4gIHJldHVybiBzaWRlYmFyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaWRlYmFyO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlTmF2YmFyIGZyb20gJy4vbmF2YmFyLmpzJztcclxuaW1wb3J0IGNyZWF0ZU1vZGFsIGZyb20gJy4vbW9kYWwuanMnO1xyXG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tICcuL21haW4uanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXBwKCkge1xyXG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFwcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FwcCcpO1xyXG5cclxuICBjb25zdCBjb21wb25lbnRzID0gW2NyZWF0ZU1vZGFsLCBjcmVhdGVOYXZiYXIsIGNyZWF0ZU1haW5dO1xyXG5cclxuICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgIGFwcC5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhcHA7XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVBcHAoKSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==