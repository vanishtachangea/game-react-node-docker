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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AppRouter.ts":
/*!**************************!*\
  !*** ./src/AppRouter.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppRouter = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar AppRouter = /** @class */ (function () {\n    function AppRouter() {\n    }\n    AppRouter.getInstance = function () {\n        if (!AppRouter.instance) {\n            AppRouter.instance = express_1.default.Router();\n        }\n        return AppRouter.instance;\n    };\n    return AppRouter;\n}());\nexports.AppRouter = AppRouter;\n\n\n//# sourceURL=webpack:///./src/AppRouter.ts?");

/***/ }),

/***/ "./src/controllers/GameController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/GameController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar decorators_1 = __webpack_require__(/*! ./decorators */ \"./src/controllers/decorators/index.ts\");\nvar Board_1 = __importDefault(__webpack_require__(/*! ../entities/Board */ \"./src/entities/Board.ts\"));\nvar GameServicesClass_1 = __importDefault(__webpack_require__(/*! ../services/game/GameServicesClass */ \"./src/services/game/GameServicesClass.ts\"));\nfunction logger(req, res, next) {\n    console.log('Request has been made!');\n    next();\n}\nvar GameController = /** @class */ (function () {\n    function GameController() {\n    }\n    GameController.prototype.getBoard = function (req, res) {\n        /*         console.log(\"bd inside GetBoard Game controller\");\n                let bd: Board = new Board(3, 2);\n                console.log(\"Before calling Get final Board\");\n                for (let i = 0; i < bd.tiles.length; i++) {\n                    for (let j = 0; j < bd.tiles[i].length; j++) {\n                        console.log(\"(\"+i+\",\"+j+\") \"+bd.tiles[i][j].colour);\n                    }\n                }\n                let gameService = new GameServicesClass(bd);\n               \n                let bd2 = gameService.getfinalBoard();\n                console.log(\"After calling Get final Board\");\n                console.log(bd.tiles);\n                for (let i = 0; i < bd2.tiles.length; i++) {\n                    for (let j = 0; j < bd2.tiles[i].length; j++) {\n                        console.log(bd2.tiles[i][j].colour);\n                    }\n                } */\n        console.log(\"heeeeeeeeeeeeeeeeeelo\");\n        var initialBoard = new Board_1.default(6, 7);\n        //initialBoard.testBoard();\n        // for (let i = 0; i < initialBoard.tiles.length; i++) {\n        //     for (let j = 0; j < initialBoard.tiles[i].length; j++) {\n        //         console.log(\"(\"+i+\",\"+j+\") \"+initialBoard.tiles[i][j].colour);\n        //     }\n        // }\n        var gameService = new GameServicesClass_1.default(initialBoard);\n        var finalBoard = gameService.getfinalBoardNonRecur();\n        for (var i = 0; i < finalBoard.tiles.length; i++) {\n            for (var j = 0; j < finalBoard.tiles[i].length; j++) {\n                console.log(\"(\" + i + \",\" + j + \") \" + finalBoard.tiles[i][j].colour);\n            }\n        }\n        res.send(\"\\n        <form method=\\\"POST\\\">\\n        <div>\\n\\n        </div>\\n        <button>Play</button>\\n        </form>\\n       \");\n    };\n    __decorate([\n        decorators_1.get('/board'),\n        decorators_1.use(logger)\n    ], GameController.prototype, \"getBoard\", null);\n    GameController = __decorate([\n        decorators_1.controller('/game')\n    ], GameController);\n    return GameController;\n}());\n\n\n//# sourceURL=webpack:///./src/controllers/GameController.ts?");

/***/ }),

/***/ "./src/controllers/LoginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/LoginController.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* import { get } from './decorators/routes';\nimport { controller } from './decorators/controller'; */\nvar decorators_1 = __webpack_require__(/*! ./decorators */ \"./src/controllers/decorators/index.ts\");\nfunction logger(req, res, next) {\n    console.log('Request has been made');\n    next();\n}\nvar LoginController = /** @class */ (function () {\n    function LoginController() {\n    }\n    LoginController.prototype.getLogin = function (req, res) {\n        res.send(\"\\n        <form method=\\\"POST\\\">\\n            <div>\\n                <label>Email</label>\\n                <input name=\\\"email\\\"/>\\n            </div>\\n            <div>\\n                <label>Password</label>\\n                <input name=\\\"password\\\" type=\\\"password\\\"/>\\n            </div>\\n            <button>Submit</button>\\n        </form>\\n       \");\n    };\n    LoginController.prototype.postLogin = function (req, res) {\n        var _a = req.body, email = _a.email, password = _a.password;\n        if (email && password && email === 'hi@vc.com' && password === 'pw') {\n            req.session = { loggedIn: true };\n            res.redirect('/');\n        }\n        else\n            res.send(\"Invalid email or password\");\n    };\n    ;\n    LoginController.prototype.getLogout = function (req, res) {\n        req.session = { loggedIn: undefined };\n        res.redirect('/auth/login');\n    };\n    ;\n    __decorate([\n        decorators_1.get('/login'),\n        decorators_1.use(logger)\n    ], LoginController.prototype, \"getLogin\", null);\n    __decorate([\n        decorators_1.post('/login'),\n        decorators_1.bodyValidator('email', 'password')\n    ], LoginController.prototype, \"postLogin\", null);\n    __decorate([\n        decorators_1.get('/logout')\n    ], LoginController.prototype, \"getLogout\", null);\n    LoginController = __decorate([\n        decorators_1.controller('/auth')\n    ], LoginController);\n    return LoginController;\n}());\n\n\n//# sourceURL=webpack:///./src/controllers/LoginController.ts?");

/***/ }),

/***/ "./src/controllers/RootController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/RootController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar decorators_1 = __webpack_require__(/*! ./decorators */ \"./src/controllers/decorators/index.ts\");\nfunction logger(req, res, next) {\n    console.log('Request has been made');\n    next();\n}\nvar RootController = /** @class */ (function () {\n    function RootController() {\n    }\n    RootController.prototype.getRoot = function (req, res) {\n        res.send(\"\\n            <div>\\n            <div>Welcome to a very Popular Game</div>\\n            <a href=\\\"/game/board\\\">Start Game</a>\\n            <div>brought to you by Everreal!!!</div>\\n            </div>\\n            \");\n    };\n    __decorate([\n        decorators_1.get('/'),\n        decorators_1.use(logger)\n    ], RootController.prototype, \"getRoot\", null);\n    RootController = __decorate([\n        decorators_1.controller('')\n    ], RootController);\n    return RootController;\n}());\n\n\n//# sourceURL=webpack:///./src/controllers/RootController.ts?");

/***/ }),

/***/ "./src/controllers/decorators/MetadataKeys.ts":
/*!****************************************************!*\
  !*** ./src/controllers/decorators/MetadataKeys.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MetadataKeys = void 0;\nvar MetadataKeys;\n(function (MetadataKeys) {\n    MetadataKeys[\"method\"] = \"method\";\n    MetadataKeys[\"path\"] = \"path\";\n    MetadataKeys[\"middleware\"] = \"middleware\";\n    MetadataKeys[\"validator\"] = \"validator\";\n})(MetadataKeys = exports.MetadataKeys || (exports.MetadataKeys = {}));\n\n\n//# sourceURL=webpack:///./src/controllers/decorators/MetadataKeys.ts?");

/***/ }),

/***/ "./src/controllers/decorators/Methods.ts":
/*!***********************************************!*\
  !*** ./src/controllers/decorators/Methods.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Methods = void 0;\nvar Methods;\n(function (Methods) {\n    Methods[\"get\"] = \"get\";\n    Methods[\"put\"] = \"put\";\n    Methods[\"post\"] = \"post\";\n    Methods[\"patch\"] = \"patch\";\n    Methods[\"del\"] = \"delete\";\n})(Methods = exports.Methods || (exports.Methods = {}));\n\n\n//# sourceURL=webpack:///./src/controllers/decorators/Methods.ts?");

/***/ }),

/***/ "./src/controllers/decorators/bodyValidator.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/decorators/bodyValidator.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.bodyValidator = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/controllers/decorators/MetadataKeys.ts\");\nfunction bodyValidator() {\n    var keys = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        keys[_i] = arguments[_i];\n    }\n    return function (target, key, desc) {\n        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);\n    };\n}\nexports.bodyValidator = bodyValidator;\n\n\n//# sourceURL=webpack:///./src/controllers/decorators/bodyValidator.ts?");

/***/ }),

/***/ "./src/controllers/decorators/controller.ts":
/*!**************************************************!*\
  !*** ./src/controllers/decorators/controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.controller = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar AppRouter_1 = __webpack_require__(/*! ../../AppRouter */ \"./src/AppRouter.ts\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/controllers/decorators/MetadataKeys.ts\");\n//Middleware\nfunction bodyValidators(keys) {\n    return function (req, res, next) {\n        console.log(keys);\n        if (!req.body) {\n            res.status(422).send('Invalid Request');\n            return;\n        }\n        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {\n            var key = keys_1[_i];\n            if (!req.body[key]) {\n                res.status(422).send(\"Missing \" + key);\n                return;\n            }\n        }\n        next();\n    };\n}\nfunction controller(routePrefix) {\n    return function (target) {\n        var router = AppRouter_1.AppRouter.getInstance();\n        for (var key in target.prototype) {\n            var routeHandler = target.prototype[key];\n            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);\n            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);\n            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];\n            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];\n            var validator = bodyValidators(requiredBodyProps);\n            if (path) {\n                router[method].apply(router, __spreadArrays([\"\" + routePrefix + path], middlewares, [validator, routeHandler]));\n            }\n        }\n    };\n}\nexports.controller = controller;\n\n\n//# sourceURL=webpack:///./src/controllers/decorators/controller.ts?");

/***/ }),

/***/ "./src/controllers/decorators/index.ts":
/*!*********************************************!*\
  !*** ./src/controllers/decorators/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./controller */ \"./src/controllers/decorators/controller.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./routes */ \"./src/controllers/decorators/routes.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./use */ \"./src/controllers/decorators/use.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./bodyValidator */ \"./src/controllers/decorators/bodyValidator.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/controllers/decorators/index.ts?");

/***/ }),

/***/ "./src/controllers/decorators/routes.ts":
/*!**********************************************!*\
  !*** ./src/controllers/decorators/routes.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.path = exports.del = exports.post = exports.put = exports.get = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar Methods_1 = __webpack_require__(/*! ./Methods */ \"./src/controllers/decorators/Methods.ts\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/controllers/decorators/MetadataKeys.ts\");\nfunction routeBinder(method) {\n    return function (path) {\n        return function (target, key, desc) {\n            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);\n            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);\n        };\n    };\n}\nexports.get = routeBinder(Methods_1.Methods.get);\nexports.put = routeBinder(Methods_1.Methods.put);\nexports.post = routeBinder(Methods_1.Methods.post);\nexports.del = routeBinder(Methods_1.Methods.del);\nexports.path = routeBinder(Methods_1.Methods.patch);\n\n\n//# sourceURL=webpack:///./src/controllers/decorators/routes.ts?");

/***/ }),

/***/ "./src/controllers/decorators/use.ts":
/*!*******************************************!*\
  !*** ./src/controllers/decorators/use.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.use = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/controllers/decorators/MetadataKeys.ts\");\nfunction use(middleware) {\n    return function (target, key, desc) {\n        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];\n        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, __spreadArrays(middlewares, [middleware]), target, key);\n    };\n}\nexports.use = use;\n\n\n//# sourceURL=webpack:///./src/controllers/decorators/use.ts?");

/***/ }),

/***/ "./src/entities/Board.ts":
/*!*******************************!*\
  !*** ./src/entities/Board.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tile_1 = __importDefault(__webpack_require__(/*! ./Tile */ \"./src/entities/Tile.ts\"));\nvar Board = /** @class */ (function () {\n    function Board(rows, columns, tiles, colourPalette, randomise) {\n        this.rows = 0;\n        this.columns = 0;\n        this.tiles = [];\n        //public initialBoard: IBoard;\n        //public boardTransitions: { chosenColour: string, newBoard: IBoard }[];\n        //public boardTransitions: { chosenColour: string, board: IPlayable }[] = [];\n        //public colourPalette: string[] = [\"#fb1700\", \"#f8dd7d\", \"#95c4cc\"];\n        this.colourPalette = [\"red\", \"blue\", \"green\"];\n        this.coloursHashTable = {};\n        this.rows = rows;\n        this.columns = columns;\n        if (tiles) {\n            this.tiles = tiles;\n        }\n        if (colourPalette) {\n            this.colourPalette = colourPalette;\n        }\n        if (randomise || !tiles) {\n            this.newBoard();\n        }\n        //this.initialBoard = this;\n    }\n    Board.prototype.newBoard = function () {\n        var id = 1;\n        this.tiles = new Array();\n        if (this.rows > 0 && this.columns > 0) {\n            for (var i = 0; i < this.rows; i++) {\n                this.tiles[i] = new Array();\n                for (var j = 0; j < this.columns; j++) {\n                    this.tiles[i][j] = new Tile_1.default(String(id++), this.getRandomArrayItem(this.colourPalette), i, j);\n                }\n            }\n        }\n    };\n    Board.prototype.testBoard = function () {\n        var id = 1;\n        this.tiles = new Array();\n        this.rows = 3;\n        this.columns = 3;\n        if (this.rows > 0 && this.columns > 0) {\n            for (var i = 0; i < this.rows; i++) {\n                this.tiles[i] = new Array();\n                for (var j = 0; j < this.columns; j++) {\n                    this.tiles[i][j] = new Tile_1.default(String(id++), this.colourPalette[0], i, j);\n                }\n            }\n            this.tiles[2][0].colour = this.colourPalette[1];\n            this.tiles[2][2].colour = this.colourPalette[2];\n        }\n    };\n    Board.prototype.testresultBoard = function () {\n        var id = 1;\n        this.tiles = new Array();\n        this.rows = 3;\n        this.columns = 4;\n        if (this.rows > 0 && this.columns > 0) {\n            for (var i = 0; i < this.rows; i++) {\n                this.tiles[i] = new Array();\n                for (var j = 0; j < this.columns; j++) {\n                    this.tiles[i][j] = new Tile_1.default(String(id++), this.colourPalette[2], i, j);\n                }\n            }\n        }\n    };\n    Board.prototype.getRandomArrayItem = function (items) {\n        return items[Math.floor(Math.random() * items.length)];\n    };\n    return Board;\n}());\nexports.default = Board;\n\n\n//# sourceURL=webpack:///./src/entities/Board.ts?");

/***/ }),

/***/ "./src/entities/BoardTransitions.ts":
/*!******************************************!*\
  !*** ./src/entities/BoardTransitions.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BoardTransitions = exports.BoardTransition = void 0;\nvar BoardTransition = /** @class */ (function () {\n    function BoardTransition(chosenColour, board) {\n        this.chosenColour = chosenColour;\n        this.board = board;\n    }\n    return BoardTransition;\n}());\nexports.BoardTransition = BoardTransition;\nvar BoardTransitions = /** @class */ (function () {\n    function BoardTransitions(boardTransitions) {\n        this.transitions = boardTransitions;\n    }\n    return BoardTransitions;\n}());\nexports.BoardTransitions = BoardTransitions;\n\n\n//# sourceURL=webpack:///./src/entities/BoardTransitions.ts?");

/***/ }),

/***/ "./src/entities/Queue.ts":
/*!*******************************!*\
  !*** ./src/entities/Queue.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/*\nA queue that can be of type T\nGenerics are great in any language\n*/\nvar Queue = /** @class */ (function () {\n    function Queue() {\n        var _this = this;\n        this.items = [];\n        this.add = function (item) { return _this.items.push(item); };\n    }\n    Queue.prototype.pop = function () {\n        return this.items.shift();\n    };\n    Queue.prototype.isEmpty = function () {\n        return this.items.length == 0;\n    };\n    Queue.prototype.Size = function () {\n        return this.items.length;\n    };\n    return Queue;\n}());\nexports.default = Queue;\n\n\n//# sourceURL=webpack:///./src/entities/Queue.ts?");

/***/ }),

/***/ "./src/entities/Tile.ts":
/*!******************************!*\
  !*** ./src/entities/Tile.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tile = /** @class */ (function () {\n    function Tile(id, colour, x, y, isMarked, isVisited) {\n        this.isMarked = false;\n        this.isVisited = false;\n        this.id = id;\n        this.colour = colour;\n        this.xPos = x;\n        this.yPos = y;\n        if (isMarked)\n            this.isMarked = isMarked;\n        if (isVisited)\n            this.isVisited = isVisited;\n    }\n    return Tile;\n}());\nexports.default = Tile;\n\n\n//# sourceURL=webpack:///./src/entities/Tile.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nvar cookie_session_1 = __importDefault(__webpack_require__(/*! cookie-session */ \"cookie-session\"));\nvar AppRouter_1 = __webpack_require__(/*! ./AppRouter */ \"./src/AppRouter.ts\");\n__webpack_require__(/*! ./controllers/LoginController */ \"./src/controllers/LoginController.ts\");\n__webpack_require__(/*! ./controllers/RootController */ \"./src/controllers/RootController.ts\");\n__webpack_require__(/*! ./controllers/GameController */ \"./src/controllers/GameController.ts\");\n__webpack_require__(/*! module-alias/register */ \"module-alias/register\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar app = express_1.default();\napp.use(body_parser_1.default.urlencoded({ extended: true }));\napp.use(cookie_session_1.default({ keys: ['log'] }));\napp.use(AppRouter_1.AppRouter.getInstance());\napp.use('/css', express_1.default.static(path.join(__dirname, 'public/css')));\napp.listen(3000, function () {\n    console.log('Listening on port 3000!');\n});\nexports.default = app;\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/services/game/GameServicesClass.ts":
/*!************************************************!*\
  !*** ./src/services/game/GameServicesClass.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Queue_1 = __importDefault(__webpack_require__(/*! ../../entities/Queue */ \"./src/entities/Queue.ts\"));\nvar BoardTransitions_1 = __webpack_require__(/*! ../../entities/BoardTransitions */ \"./src/entities/BoardTransitions.ts\");\n// interface BoardTransitions {\n//     chosenColour: string;\n//     board: IPlayable;\n// }\nvar GameServicesClass = /** @class */ (function () {\n    function GameServicesClass(board) {\n        this.tileMarkedCount = 0;\n        this.tileMarkedMaxJ = 0;\n        this.chosenColour1 = \"\";\n        this.chosenColour2 = \"\";\n        this.previousColour1 = \"\";\n        this.firstLoop = false;\n        this.col = 0;\n        this.k = 0;\n        this.selectedColorToMark = \"\";\n        this.newColor = \"\";\n        this.board = board;\n        this.originalBoard = this.board;\n        //this.boardTransitions[0] = { chosenColour: \"\", board: this.board };\n        this.boardTransitions = new BoardTransitions_1.BoardTransitions([]);\n        this.selectedColorToMark = this.board.colourPalette[0];\n    }\n    GameServicesClass.prototype.getfinalBoard = function () {\n        this.tileMarkedCount = 0;\n        this.tileMarkedMaxJ = 0;\n        this.col = 0;\n        this.k = 0;\n        this.previousColour1 = \"\";\n        this.firstLoop = true;\n        var col = this.col;\n        while (this.k < this.board.tiles[0].length) {\n            this.getMostPopularColorInColumnAlgo();\n            console.log(\"this.chosenColour1: \" + this.chosenColour1);\n            console.log(\"this.chosenColour2: \" + this.chosenColour2);\n            console.log(\"this.k: \" + this.k);\n            //console.log(\"this.board.coloursHashTable[this.chosenColour1]\" + this.board.coloursHashTable[this.chosenColour1]);\n            if (this.board.coloursHashTable[this.chosenColour1] == this.board.tiles.length) {\n                this.k += 1;\n                continue;\n            }\n            this.resetColumnCount();\n            this.selectColourToChange();\n            //this.markConnTilesByColourAlgo(0, col);\n            this.markConnTilesByBFSNonRecur();\n            this.nextBoard();\n            if (this.k == this.board.tiles[0].length - 1) {\n                this.k = 0;\n                break;\n            }\n            else {\n                this.k += 1;\n            }\n        }\n        return this.board;\n    };\n    GameServicesClass.prototype.selectColourToChange = function () {\n        if (this.firstLoop)\n            this.selectedColorToMark = this.chosenColour2;\n        else\n            this.selectedColorToMark = this.previousColour1;\n        this.firstLoop = false;\n    };\n    GameServicesClass.prototype.resetColumnCount = function () {\n        this.tileMarkedCount = 0;\n        this.tileMarkedMaxJ = 0;\n    };\n    GameServicesClass.prototype.markConnTilesByColourAlgo = function (i, j) {\n        //console.log(\"color \" + this.selectedColorToMark);\n        //console.log(\"this.board.tiles[i][j].colour \" + i + \" \" + j + \" \" + this.board.tiles[i][j].colour);\n        if (!this.board.tiles[i][j].isVisited)\n            this.board.tiles[i][j].isVisited = true;\n        else\n            return;\n        if (this.board.tiles[i][j].colour == this.selectedColorToMark) {\n            this.board.tiles[i][j].isMarked = true;\n            this.tileMarkedMaxJ = j > this.tileMarkedMaxJ ? j : this.tileMarkedMaxJ;\n            this.tileMarkedCount += 1;\n            //console.log(\"this.tileMarkedMaxJ \" + this.tileMarkedMaxJ);\n            //console.log(\"this.tileMarkedCount \" + this.tileMarkedCount);\n            if (j < this.board.tiles[0].length - 1) {\n                this.markConnTilesByColourAlgo(i, j + 1);\n            }\n            if (j >= 1) {\n                this.markConnTilesByColourAlgo(i, j - 1);\n            }\n            if (i < this.board.tiles.length - 1) {\n                this.markConnTilesByColourAlgo(i + 1, j);\n            }\n            if (i >= 1) {\n                this.markConnTilesByColourAlgo(i - 1, j);\n            }\n        }\n        else {\n            if (i < this.board.tiles.length - 1 && j == 0) {\n                this.markConnTilesByColourAlgo(i + 1, j);\n            }\n        }\n    };\n    GameServicesClass.prototype.markConnTilesByBFSNonRecur = function () {\n        console.log(\"markConnTilesByBFSNonRecur\");\n        var queue = new Queue_1.default();\n        var i = 0;\n        var j = 0;\n        var s = this.board.tiles[i][j];\n        this.board.tiles[i][j].isVisited = true;\n        queue.add(this.board.tiles[i][j]);\n        console.log(queue);\n        console.log(\"queue.Size\" + queue.Size());\n        console.log(\"queue.isEmpty\" + queue.isEmpty());\n        while (!queue.isEmpty()) {\n            //Removing that vertex from queue,whose neighbour will be visited now\n            var v = queue.pop();\n            console.log(\"V\" + v);\n            //console.log(\"V\"+v.colour); \n            console.log(\"this.selectedColorToMark \" + this.selectedColorToMark);\n            console.log(\"queue.Size\" + queue.Size());\n            if (v) {\n                console.log(v.colour);\n                this.board.tiles[v.xPos][v.yPos].isVisited = true;\n                if (this.board.tiles[v.xPos][v.yPos].colour == this.selectedColorToMark) {\n                    this.tileMarkedMaxJ = v.yPos > this.tileMarkedMaxJ ? v.yPos : this.tileMarkedMaxJ;\n                    this.tileMarkedCount += 1;\n                    console.log(v.xPos + \",\" + v.yPos);\n                    this.board.tiles[v.xPos][v.yPos].isMarked = true;\n                    var rightv = this.getRightTile(v.xPos, v.yPos);\n                    if (rightv && !rightv.isVisited)\n                        queue.add(rightv);\n                    var topv = this.getTopTile(v.xPos, v.yPos);\n                    if (topv && !topv.isVisited)\n                        queue.add(topv);\n                    var bottomv = this.getBottomTile(v.xPos, v.yPos);\n                    if (bottomv && !bottomv.isVisited)\n                        queue.add(bottomv);\n                }\n                else if (v.yPos == 0) {\n                    var bottomv = this.getBottomTile(v.xPos, v.yPos);\n                    if (bottomv && !bottomv.isVisited)\n                        queue.add(bottomv);\n                }\n                console.log(\"queue.Size\" + queue.Size());\n            }\n            //processing all the neighbours of v  for all neighbours w of v in Graph G\n            // if w is not visited \n            //     Q.enqueue( w )             //Stores w in Q to further visit its neighbour\n            // mark w as visited.\n        }\n    };\n    GameServicesClass.prototype.getBottomTile = function (i, j) {\n        if (i < this.board.tiles.length - 1) {\n            return this.board.tiles[i + 1][j];\n        }\n        return undefined;\n    };\n    GameServicesClass.prototype.getRightTile = function (i, j) {\n        if (j < this.board.tiles[0].length - 1) {\n            return this.board.tiles[i][j + 1];\n        }\n        return undefined;\n    };\n    GameServicesClass.prototype.getTopTile = function (i, j) {\n        if (i > 0) {\n            return this.board.tiles[i - 1][j];\n        }\n        return undefined;\n    };\n    GameServicesClass.prototype.getfinalBoardNonRecur = function () {\n        this.tileMarkedCount = 0;\n        this.tileMarkedMaxJ = 0;\n        this.col = 0;\n        this.k = 0;\n        this.previousColour1 = \"\";\n        this.firstLoop = true;\n        var col = this.col;\n        while (this.k < this.board.tiles[0].length) {\n            this.getMostPopularColorInColumnAlgo();\n            console.log(\"this.chosenColour1: \" + this.chosenColour1);\n            console.log(\"this.chosenColour2: \" + this.chosenColour2);\n            console.log(\"this.k: \" + this.k);\n            //console.log(\"this.board.coloursHashTable[this.chosenColour1]\" + this.board.coloursHashTable[this.chosenColour1]);\n            if (this.board.coloursHashTable[this.chosenColour1] == this.board.tiles.length) {\n                this.k += 1;\n                continue;\n            }\n            this.resetColumnCount();\n            this.selectColourToChange();\n            //this.markConnTilesByColourAlgo(0, col);\n            this.markConnTilesByBFSNonRecur();\n            this.nextBoard();\n            if (this.k == this.board.tiles[0].length - 1) {\n                this.k = 0;\n                //break;\n            }\n            else {\n                this.k += 1;\n            }\n        }\n        return this.board;\n    };\n    GameServicesClass.prototype.getMostPopularColorInColumnAlgo = function () {\n        this.board.coloursHashTable = {};\n        for (var i = 0; i < this.board.tiles.length; i++) {\n            var colour = this.board.tiles[i][this.k].colour;\n            if (this.board.coloursHashTable[colour] == undefined) {\n                this.board.coloursHashTable[colour] = 1;\n            }\n            else {\n                this.board.coloursHashTable[colour] += 1;\n            }\n        }\n        this.getChosenColorsAlgo();\n    };\n    GameServicesClass.prototype.getChosenColorsAlgo = function () {\n        var dict_sorted = this.sortDictionary();\n        this.chosenColour1 = dict_sorted[0] == undefined ? \"\" : String(dict_sorted[0][0]);\n        this.chosenColour2 = dict_sorted[1] == undefined ? \"\" : String(dict_sorted[1][0]);\n    };\n    GameServicesClass.prototype.sortDictionary = function () {\n        var dict = this.board.coloursHashTable;\n        // Create items array\n        var items = Object.keys(dict).map(function (key) {\n            return [key, dict[key]];\n        });\n        // Sort the array based on the second element\n        items.sort(function (first, second) {\n            // return second[1] - first[1];\n            return new Number(second[1]).valueOf() - new Number(first[1]).valueOf();\n        });\n        return items;\n    };\n    GameServicesClass.prototype.selectNewColour = function () {\n        //let newColor: string = \"\";\n        if (this.previousColour1 == this.chosenColour1) {\n            this.newColor = this.chosenColour2;\n        }\n        else {\n            this.newColor = this.chosenColour1;\n        }\n    };\n    GameServicesClass.prototype.nextBoard = function () {\n        this.selectNewColour();\n        this.previousColour1 = this.newColor;\n        for (var i = 0; i < this.board.tiles.length; i++) {\n            for (var j = 0; j < this.board.tiles[i].length; j++) {\n                console.log(\"this.board.tiles[i][j]\" + this.board.tiles[i][j].isMarked + \" -\" + this.board.tiles[i][j].colour);\n                if (this.board.tiles[i][j].isMarked) {\n                    this.board.tiles[i][j].isMarked = false;\n                    this.board.tiles[i][j].colour = this.newColor;\n                    if (j > this.tileMarkedMaxJ) {\n                        this.tileMarkedMaxJ = j;\n                    }\n                }\n                this.board.tiles[i][j].isVisited = false;\n            }\n        }\n        //console.log(\"boardtrnsitions\"+this.board.boardTransitions.length);\n        //this.board.boardTransitions.push({ chosenColour: newColor, board: this.board })\n        ///this.boardTransitions.push({ chosenColour: this.newColor, board: this.board })\n        this.boardTransitions.transitions.push({ chosenColour: this.newColor, board: this.board });\n    };\n    GameServicesClass.prototype.getBoardTransitions = function () {\n        return this.boardTransitions;\n    };\n    return GameServicesClass;\n}());\nexports.default = GameServicesClass;\n\n\n//# sourceURL=webpack:///./src/services/game/GameServicesClass.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "module-alias/register":
/*!****************************************!*\
  !*** external "module-alias/register" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"module-alias/register\");\n\n//# sourceURL=webpack:///external_%22module-alias/register%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");\n\n//# sourceURL=webpack:///external_%22reflect-metadata%22?");

/***/ })

/******/ });