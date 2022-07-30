(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <header>\n    <h1>Todo List</h1>\n  </header>\n  <app-todos></app-todos>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Todo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todos_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todos/todos.component */ "./src/app/todo/todos/todos.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _todo_todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo/todos/todos.component.css":
/*!************************************************!*\
  !*** ./src/app/todo/todos/todos.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo {\r\n    display: flex;\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.todo:nth-child(even) {\r\n    background-color: #eee;\r\n}\r\n\r\n.todo:last-of-type {\r\n    border-bottom: 0;\r\n}\r\n\r\n.todo .id {\r\n    flex: 1 1 50px;\r\n}\r\n\r\n.todo .content {\r\n    flex: 1 1 100%;\r\n}\r\n\r\n.todo.done .content {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todo-input {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 10px 15px;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    border: none;\r\n    background-color: #F3F3F3;\r\n    margin-top: 15px;\r\n    font-size: 20px;\r\n    outline: none;\r\n}\r\n\r\n.todo-submit {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 200px;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    background-color: #fe4880;\r\n    color: #fff;\r\n    margin: 15px auto;\r\n    padding: 10px 15px;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2Rvcy90b2Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3QkFBZ0I7T0FBaEIscUJBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2Rvcy90b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnRvZG86bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi50b2RvOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG59XHJcblxyXG4udG9kbyAuaWQge1xyXG4gICAgZmxleDogMSAxIDUwcHg7XHJcbn1cclxuXHJcbi50b2RvIC5jb250ZW50IHtcclxuICAgIGZsZXg6IDEgMSAxMDAlO1xyXG59XHJcblxyXG4udG9kby5kb25lIC5jb250ZW50IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4udG9kby1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tc3VibWl0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNDg4MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/todo/todos/todos.component.html":
/*!*************************************************!*\
  !*** ./src/app/todo/todos/todos.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todos\">\n  <form (submit)=\"addTodo()\">\n    <input type=\"text\" name=\"inputTodo\" placeholder=\"Enter Todo....\" class=\"todo-input\" [(ngModel)]=\"inputTodo\">\n    <input type=\"submit\" class=\"todo-submit\" value=\"Add Todo\">\n  </form>\n\n  <div *ngFor=\"let todo of todos; let i = index;\" class=\"todo {{(todo.completed ? 'done' : '')}}\">\n    <div class=\"id\">{{i}}</div>\n    <div class=\"content\" (click)=\"toggleDone(i)\">{{todo.content}}</div>\n    <button class=\"delete\" (click)=\"deleteTodo(i)\">Remove</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo/todos/todos.component.ts":
/*!***********************************************!*\
  !*** ./src/app/todo/todos/todos.component.ts ***!
  \***********************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
        this.inputTodo = "";
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.todos = [
            {
                content: 'First todo',
                completed: false
            },
            {
                content: 'Second todo',
                completed: false
            }
        ];
    };
    TodosComponent.prototype.toggleDone = function (id) {
        this.todos.map(function (v, i) {
            if (i == id)
                v.completed = !v.completed;
            return v;
        });
    };
    TodosComponent.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (v, i) { return i !== id; });
    };
    TodosComponent.prototype.addTodo = function () {
        this.todos.push({
            content: this.inputTodo,
            completed: false
        });
        this.inputTodo = "";
    };
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todo/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todo/todos/todos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map