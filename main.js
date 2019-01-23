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

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ApiService.prototype.login = function (user) {
        console.log(user);
        return this.http.post('http://chehir.tn:3000/emna/login', user.value);
    };
    ApiService.prototype.register = function (user) {
        return this.http.post('http://chehir.tn:3000/emna/register', user.value);
    };
    ApiService.prototype.getUser = function (id) {
        return this.http.get('http://chehir.tn:3000/emna/user/' + id);
    };
    ApiService.prototype.updateUser = function (user) {
        return this.http.post('http://chehir.tn:3000/emna/update/' + user._id, user);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ApiService);
    return ApiService;
}());



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

module.exports = "\n<app-home></app-home>\n\n\n"

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
        this.title = 'myApp';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _uppercase_uppercase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uppercase/uppercase.component */ "./src/app/uppercase/uppercase.component.ts");
/* harmony import */ var _rest_rest_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rest/rest.component */ "./src/app/rest/rest.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./to-do-list/to-do-list.component */ "./src/app/to-do-list/to-do-list.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./currencies/currencies.component */ "./src/app/currencies/currencies.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ "./node_modules/@angular/common/locales/extra/fr.js");
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






















Object(_angular_common__WEBPACK_IMPORTED_MODULE_21__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_19___default.a, 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_20___default.a);
var appRoutes = [
    { path: 'uppercase', component: _uppercase_uppercase_component__WEBPACK_IMPORTED_MODULE_10__["UppercaseComponent"] },
    { path: 'rest', component: _rest_rest_component__WEBPACK_IMPORTED_MODULE_11__["RestComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'toDoList', component: _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_14__["ToDoListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'toDoList/:task', component: _task_task_component__WEBPACK_IMPORTED_MODULE_16__["TaskComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'currencies', component: _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_17__["CurrenciesComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _uppercase_uppercase_component__WEBPACK_IMPORTED_MODULE_10__["UppercaseComponent"],
                _rest_rest_component__WEBPACK_IMPORTED_MODULE_11__["RestComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_14__["ToDoListComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_16__["TaskComponent"],
                _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_17__["CurrenciesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isAuth()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(toastr, router) {
        this.toastr = toastr;
        this.router = router;
        this.toDoList = [];
        this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    }
    AuthService.prototype.login = function (user) {
        var message = '';
        console.log(user);
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
            var existEmail = users.find(function (element) { return element.email == user.value.email; });
            if (existEmail) {
                var pwdValid = users.find(function (element) { return element.password == user.value.password; });
                if (pwdValid) {
                    this.connectedUser = pwdValid;
                    localStorage.setItem('connectedUser', JSON.stringify(this.connectedUser));
                    console.log('connected');
                    message = 'succesfully connected';
                    this.toastr.success('succesfully connected', 'Success!');
                    this.router.navigateByUrl('/toDoList');
                }
                else {
                    message = 'your password is not valid';
                    this.toastr.error('your password is not valid', 'Oops!');
                    console.log('pwd not valid');
                }
            }
            else {
                console.log('email not valid');
                message = 'your email is not valid';
                this.toastr.error('your email is not valid', 'Oops!');
            }
        }
        else {
            console.log('users not found');
            this.toastr.error('users not found', 'Oops!');
        }
    };
    AuthService.prototype.addUser = function (user) {
        console.log(user);
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
            var exist = users.find(function (element) { return element.email = user.email; });
            if (exist) {
                users.push(user.value);
                localStorage.setItem('users', JSON.stringify(users));
            }
            else {
                console.log('email exist');
            }
        }
        else {
            users.push(user.value);
            localStorage.setItem('users', JSON.stringify(users));
        }
    };
    AuthService.prototype.addToDoList = function (element) {
        var _this = this;
        var item = {
            title: element.task,
            date: Date.now(),
            done: false
        };
        this.toDoList.push(item);
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
            users.forEach(function (element) {
                element.toDoList = _this.toDoList;
            });
            localStorage.setItem('users', JSON.stringify(users));
        }
        return this.toDoList;
    };
    AuthService.prototype.isAuth = function () {
        return (JSON.parse(localStorage.getItem('connectedUser')) ? true : false);
    };
    AuthService.prototype.editToDo = function (element, indx) {
        var _this = this;
        var users = JSON.parse(localStorage.getItem('users'));
        console.log(users);
        var user = users.find(function (element) { return element.email === _this.connectedUser.email; });
        user.toDoList[indx] = element;
        var i = users.indexOf(334);
        if (i !== -1) {
            users[i] = user;
        }
        localStorage.setItem('users', JSON.stringify(users));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/currencies/api.service.ts":
/*!*******************************************!*\
  !*** ./src/app/currencies/api.service.ts ***!
  \*******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getCurrencies = function () {
        return this.http.get('http://chehir.tn:3000/currencies');
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/currencies/currencies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/currencies/currencies.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbmNpZXMvY3VycmVuY2llcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/currencies/currencies.component.html":
/*!******************************************************!*\
  !*** ./src/app/currencies/currencies.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Currencies</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- ===============================================================================================-->\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/images/icons/favicon.ico\" />\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/bootstrap/css/bootstrap.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/animate/animate.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/css-hamburgers/hamburgers.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/select2/select2.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/util.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/main.css\">\n  <!--=============================================================================================== -->\n\n</head>\n<!------ Include the above in your HEAD tag ---------->\n\n<body>\n\n  <div class=\"container\">\n    <div class=\"row py-md-5 mx-auto\">\n      <div class=\"col-md-6 mx-auto\">\n        <select class=\"form-control\" (change)=\"selectCurr($event)\">\n          <option *ngFor='let item of currenciesList; let i = index' [value]=\"i\">{{i}} - {{item.Code}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row py-md-5\">\n      <div class=\"col-md-6\">\n        <div class=\"todolist not-done\">\n          <h5>currencies</h5>\n          <table class=\"table table-striped custab\">\n            <thead>\n              <tr>\n                <th>language</th>\n                <th>name</th>\n              </tr>\n            </thead>\n            <!-- <tr *ngFor='let country of countriesList'>\n              <td>{{country.lang}}</td>\n              <td>{{country.value}}</td>\n            </tr> -->\n            <tr *ngFor='let lang of keys(currCounSelected)'>\n              <td>{{lang }}</td>\n              <td>{{currCounSelected[lang]}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"todolist not-done\">\n          <h5>countries</h5>\n          <table class=\"table table-striped custab\">\n            <thead>\n              <tr>\n                <th>language</th>\n                <th>name</th>\n              </tr>\n            </thead>\n            <tr *ngFor='let name of nameLang'>\n              <td>{{name.lang}}</td>\n              <td>{{name.value}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/currencies/currencies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/currencies/currencies.component.ts ***!
  \****************************************************/
/*! exports provided: CurrenciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrenciesComponent", function() { return CurrenciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/currencies/api.service.ts");



var CurrenciesComponent = /** @class */ (function () {
    function CurrenciesComponent(apiService) {
        this.apiService = apiService;
        this.currenciesList = [];
        this.keys = Object.keys;
        this.currCounSelected = {};
    }
    CurrenciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getCurrencies().subscribe(function (data) {
            console.log(data);
            _this.currenciesList = data;
            _this.currCounSelected = _this.currenciesList[0].Countries[0];
        });
    };
    CurrenciesComponent.prototype.selectCurr = function (ev) {
        var _this = this;
        console.log("====>");
        var i = ev.target.value;
        this.currCounSelected = this.currenciesList[i].Countries[0];
        console.log(i);
        var countries = this.currenciesList[i].Countries[0];
        console.log(countries);
        this.countriesList = Object.keys(countries).map(function (elem) { return ({ lang: elem, value: countries[elem] }); });
        console.log(this.countriesList);
        this.nameLang = Object.keys(this.currenciesList[i].Name).map(function (elem) { return ({ lang: elem, value: _this.currenciesList[i].Name[elem] }); });
    };
    CurrenciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currencies',
            template: __webpack_require__(/*! ./currencies.component.html */ "./src/app/currencies/currencies.component.html"),
            styles: [__webpack_require__(/*! ./currencies.component.css */ "./src/app/currencies/currencies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CurrenciesComponent);
    return CurrenciesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Contact V1</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- ===============================================================================================-->\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/images/icons/favicon.ico\" />\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/bootstrap/css/bootstrap.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/animate/animate.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/css-hamburgers/hamburgers.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/select2/select2.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/util.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/main.css\">\n  <!--=============================================================================================== -->\n\n</head>\n\n<body>\n\n  <div class=\"contact1\">\n    <div class=\"container-contact1\">\n      <div class=\"contact1-pic js-tilt\" data-tilt>\n        <img src=\"assets/images/img-01.png\" alt=\"IMG\">\n      </div>\n\n      <form class=\"contact1-form validate-form\" [formGroup]=\"formLogin\" (ngSubmit)=\"login(formLogin)\">\n        <span class=\"contact1-form-title\">\n          Get in touch\n        </span>\n\n\n        <div class=\"wrap-input1 validate-input\" data-validate=\"Subject is required\">\n          <input class=\"input1\" type=\"email\" name=\"subject\" placeholder=\"Email\" formControlName='Email' required>\n          <span class=\"shadow-input1\"></span>\n        </div>\n\n        <div class=\"wrap-input1 validate-input\" data-validate=\"Message is required\">\n          <input class=\"input1\" name=\"message\" placeholder=\"Password\" formControlName='Password' required>\n          <span class=\"shadow-input1\"></span>\n        </div>\n\n        <div class=\"container-contact1-form-btn\">\n          <button class=\"contact1-form-btn\" type=\"submit\" [disabled]=\"!formLogin.valid\">\n            <span>\n              Login\n              <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n\n        </div>\n        <div class=\"container-contact1-form-btn\" *ngIf=\"message\">\n          {{message}}\n        </div>\n      </form>\n    </div>\n  </div>\n\n\n\n\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/jquery/jquery-3.2.1.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/bootstrap/js/popper.js\"></script>\n  <script src=\"assets/vendor2/bootstrap/js/bootstrap.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/select2/select2.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/tilt/tilt.jquery.min.js\"></script>\n  <script>\n    $('.js-tilt').tilt({\n      scale: 1.1\n    })\n  </script>\n\n  <!-- Global site tag (gtag.js) - Google Analytics -->\n  <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-23581568-13\"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag() { dataLayer.push(arguments); }\n    gtag('js', new Date());\n\n    gtag('config', 'UA-23581568-13');\n  </script>\n\n  <!--===============================================================================================-->\n  <script src=\"assets/js/main.js\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, apiService, toastr) {
        this.authService = authService;
        this.router = router;
        this.apiService = apiService;
        this.toastr = toastr;
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(!this.authService.connectedUser);
        if (this.authService.isAuth()) {
            this.router.navigateByUrl('/toDoList');
        }
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.apiService.login(user).subscribe(function (data) {
            console.log(data);
            _this.toastr.info(data.message, 'Info!');
            localStorage.setItem('connectedUser', JSON.stringify(data));
            _this.router.navigateByUrl('/toDoList');
            _this.authService.connectedUser = user;
        });
        // this.authService.login(user);
        // this.message = '';
        // console.log(user)
        // let users = []
        // if (localStorage.getItem('users')) {
        //   users = JSON.parse(localStorage.getItem('users'));
        //   var existEmail = users.find((element) => element.email == user.value.email);
        //   if (existEmail) {
        //     var pwdValid = users.find((element) => element.password == user.value.password);
        //     if (pwdValid) {
        //       console.log('connected')
        //       this.message = 'succesfully connected'
        //       this.toastr.success('succesfully connected', 'Success!')
        //     }
        //     else {
        //       this.message = 'your password is not valid'
        //       this.toastr.error('your password is not valid', 'Oops!')
        //       console.log('pwd not valid');
        //     }
        //   }
        //   else {
        //     console.log('email not valid');
        //     this.message = 'your email is not valid';
        //     this.toastr.error('your email is not valid', 'Oops!');
        //   }
        // }
        // else {
        //   console.log('users not found');
        //   this.toastr.error('users not found', 'Oops!');
        // }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n  <head>\n\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>Logo Nav - Start Bootstrap Template</title>\n\n    <!-- Bootstrap core CSS -->\n    <link href=\"assets/vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <!-- Custom styles for this template -->\n    <link href=\"assets/css/logo-nav.css\" rel=\"stylesheet\">\n\n  </head>\n\n  <body>\n\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"http://placehold.it/300x60?text=Logo\" width=\"150\" height=\"30\" alt=\"\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">LOGIN\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">REGISTER\n                    </a>\n                  </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/toDoList\" routerLinkActive=\"active\">TO DO LIST\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" routerLink=\"/currencies\" routerLinkActive=\"active\">CURRENCIES\n                      </a>\n                    </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/uppercase\" routerLinkActive=\"active\">UPPERCASE\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/rest\">REST</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n    <!-- Page Content -->\n  \n    <!-- /.container -->\n\n    <!-- Bootstrap core JavaScript -->\n    <script src=\"assets/vendor/jquery/jquery.min.js\"></script>\n    <script src=\"assets/vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n  </body>\n\n</html>\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Contact V1</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!--===============================================================================================-->\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/images/icons/favicon.ico\" />\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/bootstrap/css/bootstrap.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/animate/animate.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/css-hamburgers/hamburgers.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/select2/select2.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/util.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/main.css\">\n  <!--===============================================================================================-->\n</head>\n\n<body>\n\n  <div class=\"contact1\">\n    <div class=\"container-contact1\">\n      <div class=\"contact1-pic js-tilt\" data-tilt>\n        <img src=\"assets/images/img-01.png\" alt=\"IMG\">\n      </div>\n\n      <form class=\"contact1-form validate-form\" [formGroup]=\"myform\" (ngSubmit)=\"addUser(myform)\">\n        <span class=\"contact1-form-title\">\n          Get in touch\n        </span>\n\n        <div class=\"wrap-input1 validate-input\" data-validate=\"Name is required\">\n          <input class=\"input1\" type=\"text\" name=\"name\" placeholder=\"Name\"formControlName='name'>\n          <span class=\"shadow-input1\"></span>\n        </div>\n\n        <div class=\"wrap-input1 validate-input\" data-validate=\"Valid email is required: ex@abc.xyz\">\n          <input class=\"input1\" type=\"text\" name=\"email\" placeholder=\"Last Name\" formControlName='lastName' required>\n          <span class=\"shadow-input1\"></span>\n        </div>\n\n        <div class=\"wrap-input1 validate-input\" data-validate=\"Subject is required\">\n          <input class=\"input1\" type=\"email\" name=\"subject\" placeholder=\"Email\" formControlName='Email' required>\n          <span class=\"shadow-input1\"></span>\n        </div>\n\n        <div class=\"wrap-input1 validate-input\" data-validate=\"Message is required\">\n          <input class=\"input1\" name=\"message\" placeholder=\"Password\" formControlName='Password' required>\n          <span class=\"shadow-input1\"></span>\n        </div>\n\n        <div class=\"container-contact1-form-btn\">\n          <button class=\"contact1-form-btn\" type=\"submit\" [disabled]=\"!myform.valid\">\n            <span>\n              Register\n              <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n\n\n\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/jquery/jquery-3.2.1.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/bootstrap/js/popper.js\"></script>\n  <script src=\"assets/vendor2/bootstrap/js/bootstrap.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/select2/select2.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/tilt/tilt.jquery.min.js\"></script>\n  <script>\n    $('.js-tilt').tilt({\n      scale: 1.1\n    })\n  </script>\n\n  <!-- Global site tag (gtag.js) - Google Analytics -->\n  <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-23581568-13\"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag() { dataLayer.push(arguments); }\n    gtag('js', new Date());\n\n    gtag('config', 'UA-23581568-13');\n  </script>\n\n  <!--===============================================================================================-->\n  <script src=\"assets/js/main.js\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, apiService, toastr) {
        this.authService = authService;
        this.apiService = apiService;
        this.toastr = toastr;
        this.user = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    RegisterComponent.prototype.addUser = function (user) {
        var _this = this;
        this.apiService.register(user).subscribe(function (data) {
            console.log(data);
            _this.toastr.info(data.message, 'Info!');
        });
        // this.authService.addUser(user);
        // console.log(user)
        // let users = []
        // if (localStorage.getItem('users')) {
        //   users = JSON.parse(localStorage.getItem('users'));
        //   var exist = users.find((element) => element.email = user.email);
        //   if (exist) {
        //     users.push(user.value);
        //     localStorage.setItem('users', JSON.stringify(users));
        //   }
        //   else {
        //     console.log('email exist');
        //   }
        // }
        // else {
        //   users.push(user.value);
        //   localStorage.setItem('users', JSON.stringify(users));
        // }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rest/rest.component.css":
/*!*****************************************!*\
  !*** ./src/app/rest/rest.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QvcmVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rest/rest.component.html":
/*!******************************************!*\
  !*** ./src/app/rest/rest.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rest works!\n</p>\n"

/***/ }),

/***/ "./src/app/rest/rest.component.ts":
/*!****************************************!*\
  !*** ./src/app/rest/rest.component.ts ***!
  \****************************************/
/*! exports provided: RestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestComponent", function() { return RestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestComponent = /** @class */ (function () {
    function RestComponent() {
    }
    RestComponent.prototype.ngOnInit = function () {
    };
    RestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rest',
            template: __webpack_require__(/*! ./rest.component.html */ "./src/app/rest/rest.component.html"),
            styles: [__webpack_require__(/*! ./rest.component.css */ "./src/app/rest/rest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestComponent);
    return RestComponent;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>To Do Edit</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- ===============================================================================================-->\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/images/icons/favicon.ico\" />\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/bootstrap/css/bootstrap.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/animate/animate.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/css-hamburgers/hamburgers.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/select2/select2.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/util.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/main.css\">\n  <!--=============================================================================================== -->\n\n</head>\n<!------ Include the above in your HEAD tag ---------->\n\n<body>\n  <form class=\"form-horizontal\" [formGroup]=\"formEditTodo\" (ngSubmit)=\"editToDo(formEditTodo.value)\">\n    <fieldset>\n\n      <!-- Form Name -->\n      <legend>EDIT TASK</legend>\n\n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"DSD\">TITLE</label>\n        <div class=\"col-md-4\">\n          <input id=\"DSD\" name=\"DSD\" type=\"text\" placeholder=\"\" class=\"form-control input-md\" formControlName='title'\n            required>\n\n        </div>\n      </div>\n\n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"DSD\">DATE</label>\n        <div class=\"col-md-4\">\n          <input id=\"DSD\" name=\"DSD\" type=\"datetime\" format=\"yyyy-MM-ddThh:mm\" placeholder=\"\" class=\"form-control input-md\"\n            formControlName='date' [value]=\"formEditTodo.value.date | date:'fullDate':'GMT-0':'fr-FR' \" required>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"checkbox\">\n          <label class=\"col-md-4 control-label\">\n            <input type=\"checkbox\" value=\"\" formControlName='done' required />Done</label>\n        </div>\n      </div>\n\n      <!-- Button (Double) -->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"button1idDDSA\"></label>\n        <div class=\"col-md-8\">\n          <button id=\"button1idDDSA\" name=\"button1idDDSA\" class=\"btn btn-success\">SUBMIT</button>\n          <button id=\"button2id\" name=\"button2id\" class=\"btn btn-danger\">CANCEL</button>\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n\n  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n  <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");






var TaskComponent = /** @class */ (function () {
    function TaskComponent(activatedRoute, authService, apiService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.apiService = apiService;
        this.formEditTodo = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            done: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.index = this.activatedRoute.snapshot.params.task;
        console.log(this.index);
        // let users = JSON.parse(localStorage.getItem('users'));
        // console.log(users);
        // const user = users.find((element) => element.email === this.authService.connectedUser.email);
        // console.log(user);
        // this.task = user.toDoList[this.index];
        this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
        this.apiService.getUser(this.connectedUser._id).subscribe(function (data) {
            console.log(data);
            _this.task = data.todos[_this.index];
            // this.task.date = new Date(this.task.date).toLocaleDateString()
            _this.formEditTodo.setValue(_this.task);
        });
        // this.task = this.connectedUser.todos[this.index];
        // this.index
    };
    TaskComponent.prototype.editToDo = function (element) {
        this.authService.editToDo(element, this.index);
    };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvLWRvLWxpc3QvdG8tZG8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Contact V1</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- ===============================================================================================-->\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/images/icons/favicon.ico\" />\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/bootstrap/css/bootstrap.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/animate/animate.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/css-hamburgers/hamburgers.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor2/select2/select2.min.css\">\n  <!--===============================================================================================-->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/util.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css2/main.css\">\n  <!--=============================================================================================== -->\n\n</head>\n\n<body>\n\n   <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <div class=\"todolist not-done\">\n               <h1>Todos</h1>\n               <form [formGroup]=\"formTodoList\" (ngSubmit)=\"addToDoList(formTodoList.value)\">\n                  <input type=\"text\" class=\"form-control add-todo\" placeholder=\"Add todo\" formControlName='task' required>\n                      <button id=\"checkAll\" class=\"btn btn-success\" type=\"submit\" [disabled]=\"!formTodoList.valid\">Mark all as done</button>\n              </form>\n                      \n                      <hr>\n                      <ul id=\"sortable\" class=\"list-unstyled\">\n                    <li class=\"ui-state-default\" *ngFor='let item of toDoList; let i = index'>\n                        <div class=\"checkbox\" *ngIf='!item.done'>\n                    \n                            <label>\n                                <input type=\"checkbox\" value=\"\" (click)='item.done = !item.done'/>\n                                <a class=\"nav-link\" routerLink=\"/toDoList/{{i}}\" routerLinkActive=\"active\">\n                                {{item.title}} - {{item.date | date:'medium'}}</a></label>\n                        </div>\n                    </li>\n                      \n                  </ul>\n                  <div class=\"todo-footer\">\n                      <strong><span class=\"count-todos\"></span></strong> Items Left\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-6\">\n              <div class=\"todolist\">\n               <h1>Already Done</h1>\n                  <ul id=\"done-items\" class=\"list-unstyled\" *ngFor='let item of toDoList; let i = index'>\n                      <li *ngIf='item.done'>{{item.title}} - {{item.date | date:'medium'}} <button class=\"remove-item btn btn-default btn-xs pull-right\"><span class=\"glyphicon glyphicon-remove\"></span></button></li>\n                      \n                  </ul>\n              </div>\n          </div>\n      </div>\n  </div>\n\n\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/jquery/jquery-3.2.1.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/bootstrap/js/popper.js\"></script>\n  <script src=\"assets/vendor2/bootstrap/js/bootstrap.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/select2/select2.min.js\"></script>\n  <!--===============================================================================================-->\n  <script src=\"assets/vendor2/tilt/tilt.jquery.min.js\"></script>\n  <script>\n    $('.js-tilt').tilt({\n      scale: 1.1\n    })\n  </script>\n\n  <!-- Global site tag (gtag.js) - Google Analytics -->\n  <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-23581568-13\"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag() { dataLayer.push(arguments); }\n    gtag('js', new Date());\n\n    gtag('config', 'UA-23581568-13');\n  </script>\n\n  <!--===============================================================================================-->\n  <script src=\"assets/js/main.js\"></script>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.ts ***!
  \****************************************************/
/*! exports provided: ToDoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoListComponent", function() { return ToDoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");





var ToDoListComponent = /** @class */ (function () {
    function ToDoListComponent(authService, apiService) {
        this.authService = authService;
        this.apiService = apiService;
        this.toDoList = [];
        this.formTodoList = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ToDoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('connectedUser')) {
            this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
            this.apiService.getUser(this.connectedUser._id).subscribe(function (data) {
                if (data.todos)
                    _this.toDoList = data.todos;
            });
        }
    };
    ToDoListComponent.prototype.addToDoList = function (element) {
        var item = {
            title: element.task,
            date: Date.now(),
            done: false
        };
        this.toDoList.push(item);
        this.connectedUser['todos'] = this.toDoList;
        this.apiService.updateUser(this.connectedUser).subscribe(function (data) {
            console.log(data);
        });
        // this.toDoList = this.authService.addToDoList(element);
        // let item = {
        //   title: element.task,
        //   date : Date.now(),
        //   done : false
        // };
        // this.toDoList.push(item);
        // let users = []
        // if (localStorage.getItem('users')) {
        //   users = JSON.parse(localStorage.getItem('users'));
        //   users.forEach(element => {
        //     element.toDoList = this.toDoList;
        //   });
        //     localStorage.setItem('users', JSON.stringify(users));
        // }
    };
    ToDoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-to-do-list',
            template: __webpack_require__(/*! ./to-do-list.component.html */ "./src/app/to-do-list/to-do-list.component.html"),
            styles: [__webpack_require__(/*! ./to-do-list.component.css */ "./src/app/to-do-list/to-do-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ToDoListComponent);
    return ToDoListComponent;
}());



/***/ }),

/***/ "./src/app/uppercase/uppercase.component.css":
/*!***************************************************!*\
  !*** ./src/app/uppercase/uppercase.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwcGVyY2FzZS91cHBlcmNhc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/uppercase/uppercase.component.html":
/*!****************************************************!*\
  !*** ./src/app/uppercase/uppercase.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)] = 'string'>\n<button (click) = 'string = upper(string)'>uppercase</button>\n"

/***/ }),

/***/ "./src/app/uppercase/uppercase.component.ts":
/*!**************************************************!*\
  !*** ./src/app/uppercase/uppercase.component.ts ***!
  \**************************************************/
/*! exports provided: UppercaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseComponent", function() { return UppercaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UppercaseComponent = /** @class */ (function () {
    function UppercaseComponent() {
        this.string = 'text';
    }
    UppercaseComponent.prototype.ngOnInit = function () {
    };
    UppercaseComponent.prototype.upper = function (string) {
        return string.toUpperCase();
    };
    UppercaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uppercase',
            template: __webpack_require__(/*! ./uppercase.component.html */ "./src/app/uppercase/uppercase.component.html"),
            styles: [__webpack_require__(/*! ./uppercase.component.css */ "./src/app/uppercase/uppercase.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UppercaseComponent);
    return UppercaseComponent;
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

module.exports = __webpack_require__(/*! C:\Users\chino info\Desktop\myApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map