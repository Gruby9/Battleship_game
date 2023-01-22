/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Gameboard {\n\n    constructor(fiveShip,fourShip,three1Ship,three2Ship,twoShip) {\n        this.fiveShip = fiveShip,\n        this.fourShip = fourShip,\n        this.three1Ship = three1Ship,\n        this.three2Ship = three2Ship,\n        this.twoShip = twoShip\n    }\n\n    createShips() {\n        this.fiveShip = new Ship(5)\n        this.fourShip= new Ship(4)\n        this.three1Ship = new Ship(3)\n        this.three2Ship = new Ship(3)\n        this.twoShip = new Ship(2)\n    }\n}\n\nmodule.exports = Gameboard\n\n//# sourceURL=webpack://battleship_game/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst game = new Gameboard\ngame.createShips()\n\nconsole.log(game)\n\n//# sourceURL=webpack://battleship_game/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n    constructor(length, hits = 0, sunk = false) {\n        this.length = length,\n        this.hits = hits,\n        this.sunk = sunk\n    }\n\n    hit() {\n        this.hits ++\n    }\n\n    isSunk() {\n        if (this.hits === this.length) {\n            this.sunk = true\n        }\n    }\n}\n\nmodule.exports = Ship\n\n//# sourceURL=webpack://battleship_game/./src/ship.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;