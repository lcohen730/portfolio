/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function App() {
  const [aboutOpen, setAboutOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [projectOpen, setProjectOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [contactOpen, setContactOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleOpenAbout = () => {
    setAboutOpen(!aboutOpen);
  };
  const handleOpenProject = () => {
    setProjectOpen(!projectOpen);
  };
  const handleOpenContact = () => {
    setContactOpen(!contactOpen);
  };
  const handleLinkClick = url => {
    window.open(url, "_blank", "noreferrer");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("h1", null, "LAURA COHEN"), /*#__PURE__*/React.createElement("h3", null, "SOFTWARE ENGINEER"), /*#__PURE__*/React.createElement("div", {
    className: "sections"
  }, /*#__PURE__*/React.createElement("button", {
    className: "aboutBtn",
    onClick: handleOpenAbout
  }, "ABOUT ME"), aboutOpen ? /*#__PURE__*/React.createElement("div", {
    className: "about"
  }, "I am a Musician and Administrator turned Front End Engineer, leveraging my creativity and organizational skills to prioritize an aesthetically pleasing design and easy-to-read code. My proofreading and editing experience has transferred to a knack for debugging, and my time-management skills enable me to plan projects effectively. I am both a lifelong learner and natural teacher, so I am always eager to collaborate with others.") : "", /*#__PURE__*/React.createElement("button", {
    className: "projectsBtn",
    onClick: handleOpenProject
  }, "PROJECTS"), projectOpen ? /*#__PURE__*/React.createElement("div", {
    className: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("h4", null, "MASTERMIND GAME"), /*#__PURE__*/React.createElement("h5", null, "BUILT WITH"), /*#__PURE__*/React.createElement("div", null, "HTML, CSS, and Javascript"), /*#__PURE__*/React.createElement("h5", null, "DESCRIPTION"), /*#__PURE__*/React.createElement("div", null, "Guess the Secret Code"), /*#__PURE__*/React.createElement("h5", null, "LINKS"), /*#__PURE__*/React.createElement("div", {
    className: "link",
    onClick: () => handleLinkClick('https://github.com/lcohen730/Mastermind_Game_GA_Unit_1_Project')
  }, "GitHub Repository"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "link",
    onClick: () => handleLinkClick('https://stately-gumdrop-33cd7c.netlify.app/')
  }, "Deployed Link"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("h4", null, "SHOPPING CART API"), /*#__PURE__*/React.createElement("h5", null, "BUILT WITH"), /*#__PURE__*/React.createElement("div", null, "Javascript (Node.js, Express, Mongoose, and Jest)"), /*#__PURE__*/React.createElement("h5", null, "DESCRIPTION"), /*#__PURE__*/React.createElement("div", null, "RESTful API with CRUD Functionality for Users, Items, and Shopping"), /*#__PURE__*/React.createElement("div", null, "Cart"), /*#__PURE__*/React.createElement("h5", null, "LINKS"), /*#__PURE__*/React.createElement("div", {
    className: "link",
    onClick: () => handleLinkClick('https://github.com/lcohen730/shopping-cart-api')
  }, "GitHub Repository"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("h4", null, "CURIOSITY SHOPPE"), /*#__PURE__*/React.createElement("h5", null, "BUILT WITH"), "React, Javascript (ES6), SCSS, Gulp, and Webpack", /*#__PURE__*/React.createElement("h5", null, "DESCRIPTION"), "Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality", /*#__PURE__*/React.createElement("h5", null, "LINKS"), /*#__PURE__*/React.createElement("div", {
    className: "link",
    onClick: () => handleLinkClick('https://github.com/lcohen730/ye-olde-curiosity-shoppe')
  }, "Github Repository"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "link",
    onClick: () => handleLinkClick('https://curiosity.lauracohen.me/')
  }, "Deployed Link"))) : "", /*#__PURE__*/React.createElement("button", {
    className: "contactBtn",
    onClick: handleOpenContact
  }, "CONTACT"), contactOpen ? /*#__PURE__*/React.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/React.createElement("h4", null, "PHONE"), "(860) 559-9574", /*#__PURE__*/React.createElement("h4", null, "EMAIL"), "lcohen730@gmail.com", /*#__PURE__*/React.createElement("h4", {
    className: "link",
    onClick: () => handleLinkClick('https://www.linkedin.com/in/lauracohen2/')
  }, "LINKEDIN")) : ""));
}

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.288d695f1a136852fed2ec14ca18d16e.js.map