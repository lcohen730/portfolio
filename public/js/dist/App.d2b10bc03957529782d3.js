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
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/* import ScrollToTop from '../components/ScrollToTop/ScrollToTop'; */

function App() {
  const [showBtn, setShowBtn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [msgSubmitted, setMsgSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const about = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const projects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const contact = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const form = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const serviceId = "gmail";
  const templateId = "contact_form";
  const publicKey = "bsDdJhj05Aco7mVIZ";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  const scrollToSection = sectionRef => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth"
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const handleLinkClick = url => {
    window.open(url, "_blank", "noreferrer");
  };
  const sendEmail = e => {
    e.preventDefault();
    _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].sendForm(serviceId, templateId, form.current, publicKey).then(result => {
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
    setMsgSubmitted(true);
  };
  const newForm = () => {
    setMsgSubmitted(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => scrollToSection(about)
  }, "ABOUT ME"), /*#__PURE__*/React.createElement("div", {
    onClick: () => scrollToSection(projects)
  }, "PROJECTS"), /*#__PURE__*/React.createElement("div", {
    onClick: () => scrollToSection(contact)
  }, "CONTACT")), /*#__PURE__*/React.createElement("div", {
    className: "imageContainer"
  }, /*#__PURE__*/React.createElement("h1", null, "LAURA COHEN"), /*#__PURE__*/React.createElement("h3", null, "SOFTWARE ENGINEER")), /*#__PURE__*/React.createElement("div", {
    ref: about,
    className: "header"
  }, "ABOUT ME"), /*#__PURE__*/React.createElement("div", {
    className: "about"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/nNaRrX4.jpg",
    alt: "me"
  }), /*#__PURE__*/React.createElement("div", null, "I am a Musician and Administrator turned Front End Engineer, leveraging my creativity and organizational skills to prioritize an aesthetically pleasing design and easy-to-read code. My proofreading and editing experience has transferred to a knack for debugging, and my time-management skills enable me to plan projects effectively. I am both a lifelong learner and natural teacher, so I am always eager to collaborate with others.")), /*#__PURE__*/React.createElement("div", {
    ref: projects,
    className: "header"
  }, "PROJECTS"), /*#__PURE__*/React.createElement("div", {
    className: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("div", {
    className: "projectText"
  }, /*#__PURE__*/React.createElement("h4", null, "MASTERMIND GAME"), /*#__PURE__*/React.createElement("div", {
    className: "normText"
  }, "Guess the Secret Code"), /*#__PURE__*/React.createElement("h5", null, "BUILT WITH"), /*#__PURE__*/React.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-256.png",
    alt: "html5 logo"
  }), /*#__PURE__*/React.createElement("p", null, "HTML")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-256.png",
    alt: "css3 logo"
  }), /*#__PURE__*/React.createElement("p", null, "CSS")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png",
    alt: "js logo"
  }), /*#__PURE__*/React.createElement("p", null, "Javascript"))), /*#__PURE__*/React.createElement("h5", null, "LINKS"), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png",
    alt: "github logo",
    onClick: () => handleLinkClick('https://github.com/lcohen730/Mastermind_Game_GA_Unit_1_Project')
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://cdn2.iconfinder.com/data/icons/picol-vector/32/website-256.png",
    alt: "deployed website logo",
    onClick: () => handleLinkClick('https://stately-gumdrop-33cd7c.netlify.app/')
  })), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/TzPThGo.png",
    alt: "mastermind"
  })), /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("div", {
    className: "projectText"
  }, /*#__PURE__*/React.createElement("h4", null, "SHOPPING CART API"), /*#__PURE__*/React.createElement("div", {
    className: "normText"
  }, "RESTful API with CRUD Functionality for Users, Items, and Shopping Cart"), /*#__PURE__*/React.createElement("h5", null, "BUILT WITH"), /*#__PURE__*/React.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png",
    alt: "js logo"
  }), /*#__PURE__*/React.createElement("p", null, "Javascript")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-256.png",
    alt: "node js logo"
  }), /*#__PURE__*/React.createElement("p", null, "Node JS")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-256.png",
    alt: "mongo db logo"
  }), /*#__PURE__*/React.createElement("p", null, "Mongo DB")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-256.png",
    alt: "jest logo"
  }), /*#__PURE__*/React.createElement("p", null, "Jest"))), /*#__PURE__*/React.createElement("h5", null, "LINKS"), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png",
    alt: "github logo",
    onClick: () => handleLinkClick('https://github.com/lcohen730/shopping-cart-api')
  }))), /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/7Ud3DbK.png",
    alt: "shopping cart"
  }), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("div", {
    className: "projectText"
  }, /*#__PURE__*/React.createElement("h4", null, "CURIOSITY SHOPPE"), /*#__PURE__*/React.createElement("div", {
    className: "normText"
  }, "Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality"), /*#__PURE__*/React.createElement("h5", null, "BUILT WITH"), /*#__PURE__*/React.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/react-256.png",
    alt: "react logo"
  }), /*#__PURE__*/React.createElement("p", null, "React")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png",
    alt: "js logo"
  }), /*#__PURE__*/React.createElement("p", null, "Javascript")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://sass-lang.com/assets/img/styleguide/seal-black.png",
    alt: "scss logo"
  }), /*#__PURE__*/React.createElement("p", null, "SCSS")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/gulp-256.png",
    alt: "gulp logo"
  }), /*#__PURE__*/React.createElement("p", null, "Gulp")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/webpack-256.png",
    alt: "webpack logo"
  }), /*#__PURE__*/React.createElement("p", null, "Webpack"))), /*#__PURE__*/React.createElement("h5", null, "LINKS"), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png",
    alt: "github logo",
    onClick: () => handleLinkClick('https://github.com/lcohen730/ye-olde-curiosity-shoppe')
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://cdn2.iconfinder.com/data/icons/picol-vector/32/website-256.png",
    alt: "deployed website logo",
    onClick: () => handleLinkClick('https://curiosity.lauracohen.me/')
  }))), /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/c7vvcn0.png",
    alt: "curiosity shoppe"
  })), /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("div", {
    className: "projectText"
  }, /*#__PURE__*/React.createElement("h4", null, "BUCKETS AND BEYOND"), /*#__PURE__*/React.createElement("ul", {
    className: "normText"
  }, /*#__PURE__*/React.createElement("li", null, "Eight-Person Team Project Inspired by Home Depot"), /*#__PURE__*/React.createElement("li", null, "Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality"), /*#__PURE__*/React.createElement("li", null, "My Roles: Lead Designer, Front-End Development, Wireframes, Documenter, Proofreader")), /*#__PURE__*/React.createElement("h5", null, "BUILT WITH"), /*#__PURE__*/React.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/react-256.png",
    alt: "react logo"
  }), /*#__PURE__*/React.createElement("p", null, "React")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png",
    alt: "js logo"
  }), /*#__PURE__*/React.createElement("p", null, "Javascript")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://sass-lang.com/assets/img/styleguide/seal-black.png",
    alt: "scss logo"
  }), /*#__PURE__*/React.createElement("p", null, "SCSS")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/gulp-256.png",
    alt: "gulp logo"
  }), /*#__PURE__*/React.createElement("p", null, "Gulp")), /*#__PURE__*/React.createElement("div", {
    className: "skillContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/webpack-256.png",
    alt: "webpack logo"
  }), /*#__PURE__*/React.createElement("p", null, "Webpack"))), /*#__PURE__*/React.createElement("h5", null, "LINKS"), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png",
    alt: "github logo",
    onClick: () => handleLinkClick('https://github.com/jillianguerra/home-depot')
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://cdn2.iconfinder.com/data/icons/picol-vector/32/website-256.png",
    alt: "deployed website logo",
    onClick: () => handleLinkClick('https://buckets-and-beyond.tech/home')
  }))), /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/RESat2z.png",
    alt: "buckets and beyond"
  }))), /*#__PURE__*/React.createElement("div", {
    ref: contact,
    className: "header"
  }, "CONTACT"), msgSubmitted ? /*#__PURE__*/React.createElement("div", {
    className: "emailForm"
  }, /*#__PURE__*/React.createElement("p", null, "MESSAGE SUBMITTED"), /*#__PURE__*/React.createElement("button", {
    onClick: newForm,
    className: "formBtn"
  }, "SEND ANOTHER MESSAGE")) : /*#__PURE__*/React.createElement("form", {
    ref: form,
    onSubmit: sendEmail,
    className: "emailForm"
  }, /*#__PURE__*/React.createElement("label", null, "NAME "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "user_name"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "EMAIL "), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "user_email"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "message"
  }, /*#__PURE__*/React.createElement("label", null, "MESSAGE "), /*#__PURE__*/React.createElement("textarea", {
    name: "message"
  })), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "SEND",
    className: "formBtn"
  })), /*#__PURE__*/React.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contactItem"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "link",
    onClick: () => handleLinkClick('https://www.linkedin.com/in/lauracohen2/')
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png",
    alt: "linkedin logo"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "contactItem"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "link",
    onClick: () => handleLinkClick('https://docs.google.com/document/d/11KKygqRKxsN13hDYA7mDdjUkZBifjNct45Z8mqoT6Nc/edit?usp=sharing')
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn2.iconfinder.com/data/icons/business-and-finance-383/30/resume_business_cv_work_job_curriculum-_49-256.png",
    alt: "resume logo"
  })))), showBtn && /*#__PURE__*/React.createElement("img", {
    src: "https://cdn4.iconfinder.com/data/icons/essential-app-2/16/up-menu-arrow-botton-256.png",
    alt: "up arrow",
    className: "scrollToTopBtn",
    onClick: scrollToTop
  }));
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_emailjs_browser_es_index_js-node_modules_react-dom_client_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.618ae702cd26e18e737d88a8152bf1ea.js.map