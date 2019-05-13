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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Atm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Atm */ \"./src/Atm.js\");\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue */ \"./src/Queue.js\");\n/* harmony import */ var _AtmUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AtmUI */ \"./src/AtmUI.js\");\n/* harmony import */ var _QueueUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueueUI */ \"./src/QueueUI.js\");\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Person */ \"./src/Person.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//#region Запускаем банкоматы и очередь\r\nclass App {\r\n    constructor() {\r\n        this.AtmArray = [];\r\n        this.QueueArray = [];\r\n        this.AtmArrayUI = [];\r\n        this.QueueArrayUI = [];\r\n        this.AtmReserved = [];\r\n        this.AtmReservedUI = [];\r\n    }\r\n\r\n    addAtm(startTime, endTime) {\r\n        let atm_1 = new _Atm__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startTime, endTime);\r\n        let atmUI_1 = new _AtmUI__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n        let f1 = atm_1.on(\"changeState\", () => {\r\n            atmUI_1.changeStateUI();\r\n            console.log(`${this.AtmArray.indexOf(atm_1)}-ый банкомат находится в состоянии ${atm_1.state}`)\r\n        })\r\n        atm_1.on('unsubscribeStateAtm', () => f1);\r\n\r\n        let f2 = atm_1.on(\"changeServedAmount\", () => {\r\n            atmUI_1.changeServedPeopleUI(atm_1.servedPeople);\r\n            console.log(`Количество людей, обслуженных ${this.AtmArray.indexOf(atm_1)}-ым банкоматом ${atm_1.servedPeople}`)\r\n        });\r\n        atm_1.on(\"unsubscribeServedAtm\", () => f2);\r\n\r\n        let closeAtm = atmUI_1.ChildAtmDivClose;\r\n        closeAtm.onclick = () => {\r\n            atm_1.unsubscribeState();\r\n            this.AtmArray.splice(this.AtmArray.indexOf(this.AtmArray), 1);\r\n            this.AtmArrayUI.splice(this.AtmArrayUI.indexOf(this.AtmArrayUI), 1);\r\n            closeAtm.parentNode.remove();\r\n        }\r\n        this.AtmArray.push(atm_1);\r\n        this.AtmArrayUI.push(atmUI_1);\r\n        realizeAtm(this.AtmArray, this.QueueArray, this.AtmArray.indexOf(atm_1));\r\n    }\r\n\r\n\r\n    addQueue(n, m) {\r\n        let queue_1 = new _Queue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        let queueUI_1 = new _QueueUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        let f1 = queue_1.on(\"ChangeAmount\", () => {\r\n            queueUI_1.ChildQueueDivContent.innerText = queue_1.PersonAmount.length;\r\n            console.log(`Количество людей в ${this.QueueArray.indexOf(queue_1)}-ой очереди очереди ${queue_1.PersonAmount.length}`);\r\n        });\r\n        queue_1.on(\"cerateOneMoreAtm\", () => {\r\n            this.addAtm(1, 1.5);\r\n        });\r\n        queue_1.on(\"unsubscribeAmount\", () => f1);\r\n\r\n        queue_1 = createGeneratorQueue(queue_1, queueUI_1, n, m, this.QueueArray.indexOf(queue_1));\r\n        this.QueueArray.push(queue_1);\r\n        this.QueueArrayUI.push(queueUI_1);\r\n    }\r\n\r\n    startProcess(n, m) {\r\n        let i = 0;\r\n        document.getElementsByClassName(\"queueUIFlexPlus\")[0].onclick = () => {\r\n            this.addQueue(n, m);\r\n        }\r\n\r\n        //#region Кнопка добавить банкомат\r\n        document.getElementsByClassName(\"atmUIFlexPlus\")[0].onclick = () => {\r\n            this.addAtm(2, 5, i);\r\n        }\r\n    }\r\n}\r\n\r\n// #region handler на изменение состояния очереди\r\nfunction realizeAtm(AtmArray, QueueArray, i) {\r\n    setTimeout(() => {\r\n        if (QueueArray.some((element) => element.PersonAmount.length > 0) && AtmArray[i]) { //Если очередь не закончилась\r\n            debugger;\r\n            AtmArray[i].changeState();\r\n            QueueArray.sort((a, b) => {\r\n                if (a.queueAmount > b.queueAmount) return 1;\r\n                if (a.queueAmount < b.queueAmount) return -1;\r\n            });\r\n            let time = QueueArray[QueueArray.length - 1].DecreaseAmount();\r\n            setTimeout(() => {\r\n                AtmArray[i].changeState();\r\n                AtmArray[i].changeServedAmount();\r\n                realizeAtm(AtmArray, QueueArray, i);\r\n                debugger;\r\n            }, time.time);\r\n        } else {\r\n            realizeAtm(AtmArray, QueueArray, i);\r\n        }\r\n    }, 1000);\r\n};\r\n// #endregion\r\n\r\n\r\n//#region Случайное число на заданном интервале\r\nfunction createInterval(min, max) {\r\n    let rand = (min + Math.random() * (max + 1 - min));\r\n    rand = Math.floor(rand) * Math.pow(10, 3);\r\n    return rand;\r\n}\r\n//#endregion\r\n\r\n//#region Генерация очереди\r\nfunction createGeneratorQueue(queue_1, queueUI_1, n, m, i) { //Генерируем очередь\r\n    function increaseQueue(n, m) { //Наращиваем очередь\r\n        setTimeout(() => {\r\n            queue_1.IncreaseAmount();\r\n            increaseQueue(n, m);\r\n        },\r\n            createInterval(n, m))\r\n    }\r\n    increaseQueue(n, m);\r\n\r\n    return queue_1;\r\n}\r\n//#endregion\r\n\r\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Atm.js":
/*!********************!*\
  !*** ./src/Atm.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Atm; });\n/* harmony import */ var _EventEmmiter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmmiter */ \"./src/EventEmmiter.js\");\n\r\n\r\n\r\n\r\nclass Atm extends _EventEmmiter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(startTime, endTime) {\r\n        super();\r\n        this.startTime = startTime;\r\n        this.endTime = endTime;\r\n        this.state = true;\r\n        this.servedPeople = 0;\r\n    }\r\n\r\n    changeState() {\r\n        this.state=this.state==true?false:true;\r\n        this.emit(\"changeState\");\r\n    }\r\n\r\n    changeServedAmount() {\r\n        this.servedPeople += 1;\r\n        this.emit(\"changeServedAmount\");\r\n    }\r\n\r\n    unsubscribeState(){\r\n        console.log(\"Выводим банкомат из работы\");\r\n        this.emit(\"unsubscribeServedAtm\");\r\n        this.emit(\"unsubscribeStateAtm\");\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Atm.js?");

/***/ }),

/***/ "./src/AtmUI.js":
/*!**********************!*\
  !*** ./src/AtmUI.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AtmUI; });\n\r\n\r\nclass AtmUI {\r\n    constructor() {\r\n        this.ChildAtmDiv = document.createElement('div');\r\n        this.ChildAtmDivContent = document.createElement('div');\r\n        this.ChildAtmDivClose = document.createElement('div');\r\n        this.ChildAtmDiv.className = \"atmUIFlex-elements\";\r\n        this.ChildAtmDivClose.className = \"close1\";\r\n        this.ChildAtmDivClose.setAttribute(\"data-title\",\"Удалить банкомат\");\r\n        this.ChildAtmDiv.appendChild(this.ChildAtmDivContent);\r\n        this.ChildAtmDiv.appendChild(this.ChildAtmDivClose);\r\n        document.getElementById(\"forUIAtm\").appendChild(this.ChildAtmDiv);\r\n        document.getElementById(\"forUIAtm\").insertBefore(this.ChildAtmDiv,document.getElementById(\"insert1\"));\r\n        this.ChildAtmDivContent.textContent = 0;\r\n    }\r\n\r\n    changeStateUI() {\r\n        this.ChildAtmDiv.style.backgroundColor = this.ChildAtmDiv.style.backgroundColor == \"red\" ? \"aquamarine\" : \"red\";\r\n    }\r\n\r\n    changeServedPeopleUI(servedpeople) {\r\n        this.ChildAtmDivContent.innerText = servedpeople;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/AtmUI.js?");

/***/ }),

/***/ "./src/EventEmmiter.js":
/*!*****************************!*\
  !*** ./src/EventEmmiter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nfunction EventEmmiter() {\r\n    this.eventTable = {};\r\n}\r\n\r\nEventEmmiter.prototype.on = function (eventName, handler) {//Реализация подписки на событие\r\n    if (!this.eventTable.hasOwnProperty(eventName)) {//Если ранее на событие не подписывались\r\n        this.eventTable[eventName] = [];\r\n    }\r\n    this.eventTable[eventName].push(handler);\r\n    function unsubscribe() {//Реализация отписки от события\r\n        this.eventTable[eventName] = this.eventTable[eventName].filter(function (hand) {\r\n            return hand != handler;//Перезаписали массив\r\n        });\r\n    }\r\n    return unsubscribe.bind(this);\r\n}\r\n\r\nEventEmmiter.prototype.emit = function (eventName, ...params) {//Реализуем генерацию события\r\n    if (this.eventTable !== undefined && this.eventTable.hasOwnProperty(eventName)) {//Если на это событие ранее подписывались\r\n        this.eventTable[eventName].forEach(function (elem) { elem(...params) })\r\n    }\r\n}\r\n\r\nEventEmmiter.prototype.clearTable = function () {//Очищаем eventTable \r\n    delete this.eventTable;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventEmmiter);\n\n//# sourceURL=webpack:///./src/EventEmmiter.js?");

/***/ }),

/***/ "./src/Person.js":
/*!***********************!*\
  !*** ./src/Person.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\nclass Person {\r\n    constructor() {\r\n        this.time = 1000 * (Math.floor(Math.random() * (5 - 2 + 1)) + 2);\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Person.js?");

/***/ }),

/***/ "./src/Queue.js":
/*!**********************!*\
  !*** ./src/Queue.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\n/* harmony import */ var _EventEmmiter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmmiter */ \"./src/EventEmmiter.js\");\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Person */ \"./src/Person.js\");\n\r\n\r\n\r\n\r\n\r\nclass Queue extends _EventEmmiter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.PersonAmount = [];//Изначально ни кого в очереди нет\r\n    }\r\n\r\n    IncreaseAmount() {\r\n        this.PersonAmount.push(new _Person__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\r\n        this.emit(\"ChangeAmount\");\r\n        if (this.PersonAmount.length >= 8) {\r\n            this.emit(\"cerateOneMoreAtm\");\r\n        }\r\n    }\r\n\r\n    DecreaseAmount() {\r\n        let first = this.PersonAmount.shift();\r\n        this.emit(\"ChangeAmount\");\r\n        return first;\r\n    }\r\n    \r\n    unsubscribeAmount(){\r\n        console.log(\"Выводим очередь из работы\");\r\n        this.emit(\"unsubscribeAmount\");\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Queue.js?");

/***/ }),

/***/ "./src/QueueUI.js":
/*!************************!*\
  !*** ./src/QueueUI.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QueueUI; });\nclass QueueUI{\r\n    constructor() {\r\n        this.ChildQueueDiv = document.createElement('div');\r\n        this.ChildQueueDivContent = document.createElement('div');\r\n        this.ChildQueueDivClose = document.createElement('div');\r\n        this.ChildQueueDiv.className = \"queueUIFlex-elements\";\r\n        this.ChildQueueDivClose.className = \"close2\";\r\n        this.ChildQueueDivClose.setAttribute(\"data-title\",\"Убрать очередь\");\r\n        this.ChildQueueDiv.appendChild(this.ChildQueueDivContent);\r\n        this.ChildQueueDiv.appendChild(this.ChildQueueDivClose);\r\n        document.getElementById(\"forUIQueue\").insertBefore(this.ChildQueueDiv,document.getElementById(\"insert2\"));\r\n        this.ChildQueueDivContent.textContent = 0;\r\n    }\r\n    \r\n    showLenght(QueueLength){\r\n        this.ChildQueueDivContent.innerText=QueueLength;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/QueueUI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\r\n\r\n\r\nlet app1 = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n// app1.addAtm(5, 10);\r\n// app1.addAtm(5, 8);\r\n// app1.addAtm(7, 8);\r\n// app1.addQueue();\r\napp1.startProcess(1, 2);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });