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

module.exports = "<main>\r\n\t<router-outlet></router-outlet>\r\n</main>\r\n"

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
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/user/user.resolver */ "./src/app/pages/user/user.resolver.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/google-map/google-map.component */ "./src/app/pages/google-map/google-map.component.ts");
/* harmony import */ var _pages_first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/first-page-component/first-page-component.component */ "./src/app/pages/first-page-component/first-page-component.component.ts");
/* harmony import */ var _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/second-page/second-page.component */ "./src/app/pages/second-page/second-page.component.ts");








//import { AngularFireModule } from 'angularfire2';

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _pages_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_21__["GoogleMapComponent"],
                _pages_first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_22__["FirstPageComponentComponent"],
                _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_23__["SecondPageComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_14__["rootRouterConfig"], { useHash: false }),
                ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["OnsenModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].googleMapsKey
                })
            ],
            providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _core_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_15__["UserResolver"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["FirestoreSettingsToken"], useValue: {} }],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user/user.resolver */ "./src/app/pages/user/user.resolver.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/google-map/google-map.component */ "./src/app/pages/google-map/google-map.component.ts");
/* harmony import */ var _pages_first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/first-page-component/first-page-component.component */ "./src/app/pages/first-page-component/first-page-component.component.ts");
/* harmony import */ var _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/second-page/second-page.component */ "./src/app/pages/second-page/second-page.component.ts");








var rootRouterConfig = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'user', component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"], resolve: { data: _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] } },
    { path: 'map', component: _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"] },
    { path: 'beforeStreaming', component: _pages_first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_6__["FirstPageComponentComponent"] },
    { path: 'streaming', component: _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_7__["SecondPageComponent"] }
];


/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (user) {
                _this.router.navigate(['/user']);
                return resolve(false);
            }, function (err) {
                return resolve(true);
            });
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/user.model.ts":
/*!************************************!*\
  !*** ./src/app/core/user.model.ts ***!
  \************************************/
/*! exports provided: FirebaseUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
var FirebaseUserModel = /** @class */ (function () {
    function FirebaseUserModel() {
        this.image = "";
        this.name = "";
        this.provider = "";
    }
    return FirebaseUserModel;
}());



/***/ }),

/***/ "./src/app/core/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var UserService = /** @class */ (function () {
    function UserService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService.prototype.updateCurrentUser = function (value) {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/pages/first-page-component/first-page-component.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/first-page-component/first-page-component.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0LXBhZ2UtY29tcG9uZW50L2ZpcnN0LXBhZ2UtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/first-page-component/first-page-component.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/first-page-component/first-page-component.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\n  <div class=\"left\">\n    <ons-toolbar-button (click)=\"goToMap()\">\n      Map\n    </ons-toolbar-button>\n  </div>\n  <div class=\"center\">\n    <ons-toolbar-button  (click)=\"goToProfile()\">\n      Profile\n    </ons-toolbar-button>\n    <ons-toolbar-button>\n      <ons-icon icon=\"ion-ios-camera-outline\"></ons-icon>\n    </ons-toolbar-button>\n  </div>\n  <div class=\"right\">\n    <ons-toolbar-button (click)=\"logout()\">\n      Logout\n    </ons-toolbar-button>\n  </div>\n</ons-toolbar>\n\n<div class=\"background\"></div>\n<div class=\"content\">\n  First page<br>\n  <ons-button (click)=\"push()\">Push</ons-button>\n  <div>\n    <br>\n    <br>\n    <ons-button (click)=\"createStreaming()\">Create Streaming !</ons-button>\n    <br> <br>\n  </div>\n  <div>\n    <ons-button (click)=\"startStreaming()\">Start Streaming !</ons-button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/first-page-component/first-page-component.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/first-page-component/first-page-component.component.ts ***!
  \******************************************************************************/
/*! exports provided: FirstPageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponentComponent", function() { return FirstPageComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var FirstPageComponentComponent = /** @class */ (function () {
    function FirstPageComponentComponent(location, router, http, authService) {
        this.location = location;
        this.router = router;
        this.http = http;
        this.authService = authService;
    }
    FirstPageComponentComponent.prototype.ngOnInit = function () {
    };
    FirstPageComponentComponent.prototype.push = function () {
        // Push SecontPageComponent to `ons-navigator
        //this.navigator.element.pushPage(SecondPageComponent, {data: {val: 1234}});
        this.router.navigate(['/streaming']);
    };
    FirstPageComponentComponent.prototype.createStreaming = function () {
        console.log("createStreaming !!");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_ID + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_SECRET)
            })
        };
        var data = JSON.stringify({
            playback_policy: "public",
            new_asset_settings: {
                playback_policy: "public"
            }
        });
        this.http.post('https://api.mux.com/video/v1/live-streams', data, httpOptions).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    FirstPageComponentComponent.prototype.startStreaming = function () {
        console.log("startStreaming !");
        videoStreamer.streamRTMPAuth('rtmp://live.mux.com/app/faa08c02-a2a4-42db-1928-8248b04f0bad',
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_ID,
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_SECRET,
        this.successStreaming, this.failedStreaming);
    };
    FirstPageComponentComponent.prototype.failedStreaming = function (err) {
        console.log(err);
    };
    FirstPageComponentComponent.prototype.successStreaming = function (res) {
        console.log(res);
    };
    FirstPageComponentComponent.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.location.back();
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    FirstPageComponentComponent.prototype.goToProfile = function () {
        console.log("Profile");
        this.router.navigate(['/user']);
    };
    FirstPageComponentComponent.prototype.goToMap = function () {
        console.log("map");
        this.router.navigate(['/map']);
    };
    FirstPageComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-first-page-component',
            template: __webpack_require__(/*! ./first-page-component.component.html */ "./src/app/pages/first-page-component/first-page-component.component.html"),
            styles: [__webpack_require__(/*! ./first-page-component.component.css */ "./src/app/pages/first-page-component/first-page-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], FirstPageComponentComponent);
    return FirstPageComponentComponent;
}());



/***/ }),

/***/ "./src/app/pages/google-map/google-map.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/google-map/google-map.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZ2xlLW1hcC9nb29nbGUtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/google-map/google-map.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/google-map/google-map.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"left\">\r\n    <ons-toolbar-button active>\r\n      Map\r\n    </ons-toolbar-button>\r\n  </div>\r\n  <div class=\"center\">\r\n    <ons-toolbar-button (click)=\"goToProfile()\">\r\n      Profile\r\n    </ons-toolbar-button>\r\n    <ons-toolbar-button (click)=\"startStreaming()\">\r\n      <ons-icon icon=\"ion-ios-camera-outline\"></ons-icon>\r\n    </ons-toolbar-button>\r\n  </div>\r\n  <div class=\"right\">\r\n    <ons-toolbar-button (click)=\"logout()\">\r\n      Logout\r\n    </ons-toolbar-button>\r\n  </div>\r\n</ons-toolbar>\r\n\r\n\r\n<div *ngIf=\"lat && lng\">\r\n\r\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n\r\n      <agm-info-window>\r\n        <p>You are here!</p>\r\n      </agm-info-window>\r\n\r\n    </agm-marker>\r\n  </agm-map>\r\n\r\n<div>"

/***/ }),

/***/ "./src/app/pages/google-map/google-map.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/google-map/google-map.component.ts ***!
  \**********************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//import { GeoService } from '../geo.service';



var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent(location, route, router, authService) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.authService = authService;
    } //private geo: GeoService
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.getUserLocation();
        /* this.subscription = this.geo.hits
             .subscribe(hits => this.markers = hits); */
    };
    GoogleMapComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe() 
    };
    GoogleMapComponent.prototype.getUserLocation = function () {
        var _this = this;
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                console.log(_this.lat);
                console.log(_this.lng);
                //  this.geo.getLocations(100, [this.lat, this.lng]);
            });
        }
    };
    GoogleMapComponent.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.location.back();
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    GoogleMapComponent.prototype.goToProfile = function () {
        console.log("Profile");
        this.router.navigate(['/user']);
    };
    GoogleMapComponent.prototype.startStreaming = function () {
        console.log("streaming");
        this.router.navigate(['/beforeStreaming']);
    };
    GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__(/*! ./google-map.component.html */ "./src/app/pages/google-map/google-map.component.html"),
            styles: [__webpack_require__(/*! ./google-map.component.css */ "./src/app/pages/google-map/google-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page >\r\n  <ons-toolbar>\r\n    <div class=\"center\"> Login </div>\r\n  </ons-toolbar>\r\n  <div class=\"content\">\r\n <div class=\"card\">\r\n\r\n    <div class=\"container-logo\">\r\n      <img src=\"./../../assets/imgs/logo.png\" height=\"110px\" width=\"200px\" />\r\n    </div>\r\n\r\n    <form [formGroup]=\"loginForm\" class=\"form1\">\r\n      <div class=\"form-group\">\r\n        <div>\r\n          <ons-input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Type your e-mail here\" ></ons-input></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div><ons-input  type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Type password here\"></ons-input></div>\r\n        <label class=\"error\">{{errorMessage}}</label>\r\n      </div>\r\n\r\n      <div style=\"text-align:center; \">\r\n          <ons-button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-yellow\">Sign in</ons-button>\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"lbl\">\r\n        - OR -\r\n      </div>\r\n\r\n    <div class=\"socialLogin\"style=\"text-align: center; margin: 10px;\">\r\n      <ons-button  full class=\"google\" (click)=\"tryGoogleLogin()\" ><ons-icon  icon=\"md-google\" style=\"margin-right: 12px;\"></ons-icon> Sign in with Google   </ons-button >\r\n    </div>\r\n    <div class=\"socialLogin\"style=\"text-align: center; margin: 10px;\">\r\n      <ons-button  full class=\"facebook\" (click)=\"tryFacebookLogin()\"><ons-icon icon=\"md-facebook\" style=\"margin-right: 12px;\"></ons-icon>Sign in with Facebook</ons-button >\r\n    </div>\r\n    <div padding text-center class=\"form-bottom-text\">\r\n        <label>Don't have an Account? <a  href=\"/register\">Sign up</a></label>\r\n    </div>\r\n  </div>    \r\n\r\n\r\n  </div>\r\n</ons-page>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.localpath = '../../../assets/logofinal.png';
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        });
    };
    LoginComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        });
    };
    LoginComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        });
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.scss */ "./src/app/pages/login/login.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px; }\n\n.row {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n\n.lbl {\n  font-size: 16px;\n  color: #555;\n  text-align: center;\n  margin: 10px 0 20px 0; }\n\n.socialLogin {\n  margin: 50px 0;\n  width: 95%; }\n\n.form1 {\n  width: 90%;\n  margin: auto; }\n\n.form-group {\n  margin: 10px auto;\n  padding: 3px 10px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px; }\n\n.facebook {\n  background-color: #3b5998; }\n\n.google {\n  background-color: #d13d35; }\n\n.container-logo {\n  display: inline-block;\n  width: 100%;\n  text-align: center; }\n\n.container-logo img {\n    max-width: 250px; }\n\n.form-bottom-text {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin-top: 10px; }\n\n.form-bottom-text label,\na {\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxUSElOSyBQQUQgVDQ2MFxcRGVza3RvcFxcZ2VuaWUgbG9naWNpZWxcXG9uc2VuXFx0ZXN0QXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVUsRUFBQTs7QUFJWjtFQUNFLGVBQWM7RUFDZCxXQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLHFCQUFvQixFQUFBOztBQUd0QjtFQUNFLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxVQUFTO0VBQ1QsWUFBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSHBCO0lBS0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWUsRUFBQTs7QUFFakI7O0VBRUUsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnJvd3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5sYmx7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgY29sb3I6IzU1NTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW46MTBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLnNvY2lhbExvZ2luIHtcclxuICBtYXJnaW46IDUwcHggMDtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbi5mb3JtMXtcclxuICB3aWR0aDo5MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gO1xyXG4gIHBhZGRpbmc6M3B4IDEwcHggO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuXHJcbi5mYWNlYm9va3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG5cclxufVxyXG4uZ29vZ2xle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTNkMzU7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9nbyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9XHJcbn1cclxuLmZvcm0tYm90dG9tLXRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi5mb3JtLWJvdHRvbS10ZXh0IGxhYmVsLFxyXG5hIHtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ons-page>\r\n  <ons-toolbar>\r\n    <div class=\"center\">Sign up </div>\r\n  </ons-toolbar>\r\n\r\n  <div class=\"background\"></div>\r\n  <div class=\"content\">\r\n      <div class=\"card\">\r\n        <div style=\"text-align:center;\">\r\n          <h1>Create your account</h1>\r\n        </div>\r\n        \r\n      <form [formGroup]=\"registerForm\" class=\"form1\">\r\n        <div class=\"lbl\">\r\n          <label>Please fill in the following form in order to create your O'Live account.</label>\r\n        </div>\r\n          <div class=\"form-group\">\r\n            <ons-input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Type your e-mail here\" required></ons-input>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div><ons-input  type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Type password here\" required></ons-input></div>\r\n            <label class=\"error\">{{errorMessage}}</label>\r\n            <label class=\"success\">{{successMessage}}</label>\r\n          </div>\r\n          \r\n        <div style=\"text-align: center; margin: 30px auto  ;\">\r\n          <ons-button type=\"submit\" (click)=\"tryRegister(registerForm.value)\" class=\"btn btn-yellow\">Sign up</ons-button>\r\n        </div>\r\n       </form>       \r\n      \r\n       <div class=\"lbl\">\r\n         - OR -\r\n       </div>\r\n    <div class=\"socialLogin\"style=\"text-align: center; margin: 10px 0;\">\r\n      <ons-button  full class=\"google\" (click)=\"tryGoogleLogin()\" ><ons-icon  icon=\"md-google\" style=\"margin-right: 12px;\"></ons-icon> Sign up with Google   </ons-button >\r\n    </div>\r\n    <div class=\"socialLogin\"style=\"text-align: center; margin: 10px 0;\">\r\n      <ons-button  full class=\"facebook\" (click)=\"tryFacebookLogin()\"><ons-icon icon=\"md-facebook\" style=\"margin-right: 12px;\"></ons-icon>Sign up with Facebook</ons-button >\r\n    </div>\r\n     <div style=\"text-align: center; margin: 10px;\">\r\n      Already have an account? <a href=\"/login\">Login</a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</ons-page>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px; }\n\n.row {\n  margin-top: 10px; }\n\n.lbl {\n  font-size: 16px;\n  color: #555;\n  text-align: center;\n  margin: 10px 0 20px 0; }\n\n.error {\n  color: red; }\n\n.success {\n  color: green; }\n\n.form1 {\n  width: 90%;\n  margin: auto; }\n\n.form-group {\n  margin: 10px auto;\n  padding: 3px 10px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px; }\n\n.socialLogin {\n  margin: 30px 0;\n  width: 100%; }\n\n.facebook {\n  background-color: #3b5998; }\n\n.google {\n  background-color: #d13d35; }\n\n.container-logo {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px; }\n\n.container-logo img {\n    max-width: 250px; }\n\n.form-bottom-text {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin-top: 10px; }\n\n.form-bottom-text label,\na {\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxUSElOSyBQQUQgVDQ2MFxcRGVza3RvcFxcZ2VuaWUgbG9naWNpZWxcXG9uc2VuXFx0ZXN0QXBwL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFjO0VBQ2QsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFBQTs7QUFJdEI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFTO0VBQ1QsWUFBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFKbEI7SUFPSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZSxFQUFBOztBQUVqQjs7RUFFRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmxibHtcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjojNTU1O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbjoxMHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG5cclxuLmVycm9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zdWNjZXNze1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmZvcm0xe1xyXG4gIHdpZHRoOjkwJTtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICBtYXJnaW46IDEwcHggYXV0byA7XHJcbiAgcGFkZGluZzozcHggMTBweCA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4gXHJcbi5zb2NpYWxMb2dpbiB7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mYWNlYm9va3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG59XHJcbi5nb29nbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxM2QzNTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1sb2dvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4uZm9ybS1ib3R0b20tdGV4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuLmZvcm0tYm90dG9tLXRleHQgbGFiZWwsXHJcbmEge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.successMessage = '';
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    RegisterComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created";
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/second-page/second-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/second-page/second-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/second-page/second-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/second-page/second-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\n  <div class=\"center\">Second</div>\n</ons-toolbar>\n<div class=\"background\"></div>\n<div class=\"content\">\n  <ons-button (click)=\"takePic()\">Take Picture</ons-button>\n  <br>\n  <br>\n  <br>\n  <ons-button (click)=\"pop()\">Pop</ons-button>\n  <img *ngIf=\"base64Image!=null\" alt=\"\" [src]=\"base64Image\" height=\"500\" width=\"500\"/>\n</div>"

/***/ }),

/***/ "./src/app/pages/second-page/second-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/second-page/second-page.component.ts ***!
  \************************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var _self;
var SecondPageComponent = /** @class */ (function () {
    function SecondPageComponent(router, params) {
        this.router = router;
        this.params = params;
        console.log(JSON.stringify(params.data));
        _self = this;
    }
    SecondPageComponent_1 = SecondPageComponent;
    SecondPageComponent.prototype.ngOnInit = function () {
    };
    SecondPageComponent.prototype.pop = function () {
        // pop SecontPageComponent to `ons-navigator
        // this.navigator.element.pushPage(FirstPageComponentComponent, {data: {val: 9999}});
        this.router.navigate(['/beforeStreaming']);
    };
    SecondPageComponent.prototype.takePic = function () {
        console.log(cordova);
        // console.log(navigator);
        var pictureParams = {
            destinationType: navigator.camera.DestinationType.FILE_URI,
            targetWidth: 500,
            targetHeight: 500,
            mediaType: navigator.camera.MediaType.VIDEO
        };
        navigator.camera.getPicture(SecondPageComponent_1.cameraSuccess, SecondPageComponent_1.cameraError, pictureParams);
    };
    SecondPageComponent.cameraSuccess = function (imageData) {
        // imageData is a base64 encoded string
        console.log("cameraSuccess");
        _self.base64Image = "data:image/jpeg;base64," + imageData;
    };
    SecondPageComponent.cameraError = function (err) {
        console.log("cameraError");
        console.log(err);
    };
    var SecondPageComponent_1;
    SecondPageComponent = SecondPageComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-second-page',
            template: __webpack_require__(/*! ./second-page.component.html */ "./src/app/pages/second-page/second-page.component.html"),
            styles: [__webpack_require__(/*! ./second-page.component.css */ "./src/app/pages/second-page/second-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["Params"]])
    ], SecondPageComponent);
    return SecondPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"left\">\r\n    <ons-toolbar-button (click)=\"goToMap()\">\r\n      Map\r\n    </ons-toolbar-button>\r\n  </div>\r\n  <div class=\"center\">\r\n    <ons-toolbar-button>\r\n      Profile\r\n    </ons-toolbar-button>\r\n    <ons-toolbar-button (click)=\"startStreaming()\">\r\n      <ons-icon icon=\"ion-ios-camera-outline\"></ons-icon>\r\n    </ons-toolbar-button>\r\n  </div>\r\n  <div class=\"right\">\r\n    <ons-toolbar-button (click)=\"logout()\">\r\n      Logout\r\n    </ons-toolbar-button>\r\n  </div>\r\n</ons-toolbar>\r\n<!-- <h1 class=\"header\">Profile</h1> -->\r\n<ons-page>\r\n\r\n<h1 class=\"header\">Logged User Page</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top image\" [src]=\"user.image\" *ngIf=\"user.image\" alt=\"User image\">\r\n      <img class=\"card-img-top image\" src=\"https://via.placeholder.com/400x300\" *ngIf=\"!user.image\" alt=\"User image\">\r\n      <div *ngIf='user.provider != \"password\"'class=\"card-body\">\r\n        <h4 class=\"card-title\">{{user.name}}</h4>\r\n        <p class=\"card-text\">This is an example of Social Authentication using Firebase in an Angular 7 web app. </p>\r\n      </div>\r\n\r\n      <div *ngIf='user.provider == \"password\"'class=\"card-body\">\r\n        <form [formGroup]=\"profileForm\">\r\n          <div class=\"form-group\">\r\n            <label>Your name : </label>\r\n            <ons-input type=\"text\" formControlName=\"name\" class=\"form-control\" required></ons-input>\r\n\r\n          </div>\r\n        </form>\r\n        <ons-button (click)=\"save(profileForm.value)\" class=\"btn btn-primary\">Save</ons-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</ons-page>\r\n"

/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/user.model */ "./src/app/core/user.model.ts");








var UserComponent = /** @class */ (function () {
    function UserComponent(userService, authService, route, location, fb, router) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.router = router;
        this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserModel"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                _this.createForm(_this.user.name);
            }
        });
    };
    UserComponent.prototype.createForm = function (name) {
        this.profileForm = this.fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    UserComponent.prototype.save = function (value) {
        this.userService.updateCurrentUser(value)
            .then(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    UserComponent.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.location.back();
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    UserComponent.prototype.goToMap = function () {
        console.log("map");
        this.router.navigate(['/map']);
    };
    UserComponent.prototype.startStreaming = function () {
        console.log("streaming");
        this.router.navigate(['/beforeStreaming']);
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.scss */ "./src/app/pages/user/user.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/user/user.resolver.ts ***!
  \*********************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/user.model */ "./src/app/core/user.model.ts");





var UserResolver = /** @class */ (function () {
    function UserResolver(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserResolver.prototype.resolve = function (route) {
        var _this = this;
        var user = new _core_user_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseUserModel"]();
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (res) {
                if (res.providerData[0].providerId == 'password') {
                    user.image = 'https://via.placeholder.com/400x300';
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
                else {
                    user.image = res.photoURL;
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
            }, function (err) {
                _this.router.navigate(['/login']);
                return reject(err);
            });
        });
    };
    UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/pages/user/user.scss":
/*!**************************************!*\
  !*** ./src/app/pages/user/user.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin: 60px 0 20px 0; }\n\n.row {\n  margin-top: 30px; }\n\n.image {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9DOlxcVXNlcnNcXFRISU5LIFBBRCBUNDYwXFxEZXNrdG9wXFxnZW5pZSBsb2dpY2llbFxcb25zZW5cXHRlc3RBcHAvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyXFx1c2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbjogNjBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLnJvd3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuIl19 */"

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
    production: false,
    firebase: {
        apiKey: "AIzaSyBLO5Aj7Rg9VKbb8-HspYzrCs54ZDlokfg",
        authDomain: "auth-a2297.firebaseapp.com",
        databaseURL: "https://auth-a2297.firebaseio.com",
        projectId: "auth-a2297",
        storageBucket: "auth-a2297.appspot.com",
        messagingSenderId: "232561020745"
    },
    googleMapsKey: 'AIzaSyDlJe79GK9TneKergO80KLPGVrwf6FbP4s',
    MUX_TOKEN_ID: '10093d35-fa49-453d-b164-ae79de8bb173',
    MUX_TOKEN_SECRET: 'o0syGsVtIvy4GG5lnp4hzrdFEFTfcgFknXWjOSI3KylVzvVgrA8qfRoZ5lKj2kWNgwr4+xzv8X6'
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

module.exports = __webpack_require__(/*! C:\Users\THINK PAD T460\Desktop\genie logiciel\onsen\testApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map