(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

  /***/ "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

    /***/
  }),

  /***/ "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

    /***/
  }),

  /***/ "./src/app/app.component.html":
  /*!************************************!*\
    !*** ./src/app/app.component.html ***!
    \************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<main>\r\n\t<router-outlet></router-outlet>\r\n</main>\r\n\r\n"

    /***/
  }),

  /***/ "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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


    /***/
  }),

  /***/ "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
    /* harmony import */
    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
    /* harmony import */
    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
    /* harmony import */
    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
    /* harmony import */
    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
    /* harmony import */
    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
    /* harmony import */
    var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/pages/user/user.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */
    var _app_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
    /* harmony import */
    var _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user/user.resolver */ "./src/app/pages/user/user.resolver.ts");
    /* harmony import */
    var _core_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
    /* harmony import */
    var _core_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
    /* harmony import */
    var _core_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/user.service */ "./src/app/core/user.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
    /* harmony import */
    var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
    /* harmony import */
    var _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/google-map/google-map.component */ "./src/app/pages/google-map/google-map.component.ts");
    /* harmony import */
    var _pages_first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/first-page-component/first-page-component.component */ "./src/app/pages/first-page-component/first-page-component.component.ts");
    /* harmony import */
    var _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/second-page/second-page.component */ "./src/app/pages/second-page/second-page.component.ts");
    /* harmony import */
    var _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tab1/tab1.component */ "./src/app/tab1/tab1.component.ts");
    /* harmony import */
    var _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tab2/tab2.component */ "./src/app/tab2/tab2.component.ts");
    /* harmony import */
    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
    /* harmony import */
    var _pages_acceuil_acceuil_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/acceuil/acceuil.component */ "./src/app/pages/acceuil/acceuil.component.ts");
    /* harmony import */
    var _pages_notif_notif_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/notif/notif.component */ "./src/app/pages/notif/notif.component.ts");


//import { AngularFireModule } from 'angularfire2';


    var AppModule = /** @class */ (function () {
      function AppModule() {
      }

      AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
          declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _pages_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
            _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_22__["GoogleMapComponent"],
            _pages_first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_23__["FirstPageComponentComponent"],
            _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_24__["SecondPageComponent"],
            _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_25__["Tab1Component"],
            _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_26__["Tab2Component"],
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_27__["TabsComponent"],
            _pages_acceuil_acceuil_component__WEBPACK_IMPORTED_MODULE_28__["AcceuilComponent"],
            _pages_notif_notif_component__WEBPACK_IMPORTED_MODULE_29__["NotifComponent"],
          ],
          imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_15__["rootRouterConfig"], {useHash: false}),
            ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["OnsenModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
              apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleMapsKey
            })
          ],
          providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _core_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"], _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_16__["UserResolver"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], {
            provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["FirestoreSettingsToken"],
            useValue: {}
          }],
          schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
          ],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          entryComponents: [_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_25__["Tab1Component"], _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_26__["Tab2Component"], _pages_notif_notif_component__WEBPACK_IMPORTED_MODULE_29__["NotifComponent"]],
        })
      ], AppModule);
      return AppModule;
    }());

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__["platformBrowserDynamic"])().bootstrapModule(AppModule);


    /***/
  }),

  /***/ "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/
  /*! exports provided: rootRouterConfig */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function () {
      return rootRouterConfig;
    });
    /* harmony import */
    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
    /* harmony import */
    var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/pages/user/user.component.ts");
    /* harmony import */
    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
    /* harmony import */
    var _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user/user.resolver */ "./src/app/pages/user/user.resolver.ts");
    /* harmony import */
    var _core_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
    /* harmony import */
    var _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/google-map/google-map.component */ "./src/app/pages/google-map/google-map.component.ts");
    /* harmony import */
    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");


    var rootRouterConfig = [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      },
      {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      },
      {
        path: 'user',
        component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        resolve: {data: _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"]}
      },
      {
        path: 'map',
        component: _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"],
        resolve: {data: _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"]}
      },
      {
        path: 'tabs',
        component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
        resolve: {data: _pages_user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"]}
      },
    ];


    /***/
  }),

  /***/ "./src/app/core/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/core/auth.guard.ts ***!
    \************************************/
  /*! exports provided: AuthGuard */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */
    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
    /* harmony import */
    var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");


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


    /***/
  }),

  /***/ "./src/app/core/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/core/auth.service.ts ***!
    \**************************************/
  /*! exports provided: AuthService */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);


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
            }, function (err) {
              return reject(err);
            });
        });
      };
      AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
            .then(function (res) {
              resolve(res);
            }, function (err) {
              return reject(err);
            });
        });
      };
      AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
          if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
            _this.afAuth.auth.signOut();
            resolve();
          } else {
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


    /***/
  }),

  /***/ "./src/app/core/user.model.ts":
  /*!************************************!*\
    !*** ./src/app/core/user.model.ts ***!
    \************************************/
  /*! exports provided: FirebaseUserModel */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function () {
      return FirebaseUserModel;
    });
    var FirebaseUserModel = /** @class */ (function () {
      function FirebaseUserModel() {
        this.image = "";
        this.name = "";
        this.provider = "";
      }

      return FirebaseUserModel;
    }());


    /***/
  }),

  /***/ "./src/app/core/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/core/user.service.ts ***!
    \**************************************/
  /*! exports provided: UserService */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
    /* harmony import */
    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);


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
            } else {
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
          }, function (err) {
            return reject(err);
          });
        });
      };
      UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
          _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
      ], UserService);
      return UserService;
    }());


    /***/
  }),

  /***/ "./src/app/pages/acceuil/acceuil.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pages/acceuil/acceuil.component.css ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = ".search_box {\r\n    width: 90%;\r\n    padding-top: 7px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjZXVpbC9hY2NldWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjZXVpbC9hY2NldWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoX2JveCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICB9XHJcbiJdfQ== */"

    /***/
  }),

  /***/ "./src/app/pages/acceuil/acceuil.component.html":
  /*!******************************************************!*\
    !*** ./src/app/pages/acceuil/acceuil.component.html ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\"><ons-search-input class=\"search_box\"  placeholder=\"Search\"></ons-search-input></div>\n  </ons-toolbar>\n  <div class=\"background\"></div>\n  <div class=\"content\" class=\"initial-page\">\n      <br>\n      <ons-list-header>Diffusions</ons-list-header>\n      <br>\n    <ons-list-item>\n      <div class=\"left\">\n        <img class=\"list-item__thumbnail\" src=\"https://placekitten.com/g/40/40\">\n      </div>\n      <div class=\"center\">\n        <span class=\"list-item__title\">Cutest kitty <span class=\"list-item__subtitle\">@kitty</span></span>\n        <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n      </div>\n      <div class=\"right\">\n        <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n      </div>\n    </ons-list-item>\n\n    <ons-list-item>\n      <div class=\"left\">\n        <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic1.jpg\">\n      </div>\n      <div class=\"center\">\n        <span class=\"list-item__title\">Bella lufy <span class=\"list-item__subtitle\">@lufy</span></span>\n        <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n      </div>\n      <div class=\"right\">\n        <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n      </div>\n    </ons-list-item>\n\n    <ons-list-item>\n      <div class=\"left\">\n        <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic2.jpg\">\n      </div>\n      <div class=\"center\">\n        <span class=\"list-item__title\">Pika Pika <span class=\"list-item__subtitle\">@pika</span></span>\n        <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n      </div>\n      <div class=\"right\">\n        <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n      </div>\n    </ons-list-item>\n\n    <ons-list-item>\n      <div class=\"left\">\n        <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic3.jpg\">\n      </div>\n      <div class=\"center\">\n        <span class=\"list-item__title\">Zinour ZN <span class=\"list-item__subtitle\">@nour</span></span>\n        <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n      </div>\n      <div class=\"right\">\n        <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n      </div>\n    </ons-list-item>\n\n    <ons-list-item>\n      <div class=\"left\">\n        <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic4.jpg\">\n      </div>\n      <div class=\"center\">\n        <span class=\"list-item__title\">Amelia Es <span class=\"list-item__subtitle\">@amelia</span></span>\n        <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n      </div>\n      <div class=\"right\">\n        <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n      </div>\n    </ons-list-item>\n\n    <ons-list-item>\n      <div class=\"left\">\n        <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic5.jpg\">\n      </div>\n      <div class=\"center\">\n        <span class=\"list-item__title\">Sarah sh  <span class=\"list-item__subtitle\">@sarah</span></span>\n        <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n      </div>\n      <div class=\"right\">\n        <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n      </div>\n    </ons-list-item>\n\n    <ons-list-item>\n      <div class=\"left\">\n        <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic6.jpg\">\n      </div>\n      <div class=\"center\">\n        <span class=\"list-item__title\">Sofia sofia <span class=\"list-item__subtitle\">@sofi</span></span>\n        <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n      </div>\n      <div class=\"right\">\n        <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n      </div>\n    </ons-list-item>\n\n  </div>\n  </ons-page>\n"

    /***/
  }),

  /***/ "./src/app/pages/acceuil/acceuil.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/acceuil/acceuil.component.ts ***!
    \****************************************************/
  /*! exports provided: AcceuilComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AcceuilComponent", function () {
      return AcceuilComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


    var AcceuilComponent = /** @class */ (function () {
      function AcceuilComponent() {
      }

      AcceuilComponent.prototype.ngOnInit = function () {
      };
      AcceuilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ons-page[app-acceuil]',
          template: __webpack_require__(/*! ./acceuil.component.html */ "./src/app/pages/acceuil/acceuil.component.html"),
          styles: [__webpack_require__(/*! ./acceuil.component.css */ "./src/app/pages/acceuil/acceuil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
      ], AcceuilComponent);
      return AcceuilComponent;
    }());


    /***/
  }),

  /***/ "./src/app/pages/first-page-component/first-page-component.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/first-page-component/first-page-component.component.css ***!
    \*******************************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0LXBhZ2UtY29tcG9uZW50L2ZpcnN0LXBhZ2UtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

    /***/
  }),

  /***/ "./src/app/pages/first-page-component/first-page-component.component.html":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/first-page-component/first-page-component.component.html ***!
    \********************************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-toolbar>\n  <div class=\"center\">First</div>\n</ons-toolbar>\n<div class=\"background\"></div>\n<div class=\"content\">\n  First page<br>\n  <ons-button (click)=\"push()\">Push</ons-button>\n  <div>\n    <br>\n    <br>\n    <ons-button (click)=\"createStreaming()\">Create Streaming !</ons-button>\n    <br> <br>\n  </div>\n  <div>\n    <ons-button (click)=\"startStreaming()\">Start Streaming !</ons-button>\n  </div>\n</div>\n"

    /***/
  }),

  /***/ "./src/app/pages/first-page-component/first-page-component.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/first-page-component/first-page-component.component.ts ***!
    \******************************************************************************/
  /*! exports provided: FirstPageComponentComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FirstPageComponentComponent", function () {
      return FirstPageComponentComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
    /* harmony import */
    var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../second-page/second-page.component */ "./src/app/pages/second-page/second-page.component.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


    var FirstPageComponentComponent = /** @class */ (function () {
      function FirstPageComponentComponent(navigator, http) {
        this.navigator = navigator;
        this.http = http;
      }

      FirstPageComponentComponent.prototype.ngOnInit = function () {
      };
      FirstPageComponentComponent.prototype.push = function () {
        // Push SecontPageComponent to `ons-navigator
        this.navigator.element.pushPage(_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_4__["SecondPageComponent"], {data: {val: 1234}});
      };
      FirstPageComponentComponent.prototype.createStreaming = function () {
        console.log("createStreaming !!");
        var httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].MUX_TOKEN_ID + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].MUX_TOKEN_SECRET)
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
        videoStreamer.streamRTMPAuth('rtmp://live.mux.com/app/28372226-3a35-bde4-3b8a-b70656dfd775',
          src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_ID,
          src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_SECRET,
          this.successStreaming, this.failedStreaming);
      };
      FirstPageComponentComponent.prototype.failedStreaming = function (err) {
        console.log(err);
      };
      FirstPageComponentComponent.prototype.successStreaming = function (res) {
        console.log(res);
      };
      FirstPageComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ons-page[first]',
          template: __webpack_require__(/*! ./first-page-component.component.html */ "./src/app/pages/first-page-component/first-page-component.component.html"),
          styles: [__webpack_require__(/*! ./first-page-component.component.css */ "./src/app/pages/first-page-component/first-page-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["OnsNavigator"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
      ], FirstPageComponentComponent);
      return FirstPageComponentComponent;
    }());


    /***/
  }),

  /***/ "./src/app/pages/google-map/google-map.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/pages/google-map/google-map.component.css ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "agm-map{\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZ2xlLW1hcC9nb29nbGUtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

    /***/
  }),

  /***/ "./src/app/pages/google-map/google-map.component.html":
  /*!************************************************************!*\
    !*** ./src/app/pages/google-map/google-map.component.html ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-page>\r\n  <ons-toolbar>\r\n    <div class=\"center\">Carte</div>\r\n  </ons-toolbar>\r\n  <div class=\"background\"></div>\r\n  <div class=\"content\" class=\"initial-page\">\r\n    <div *ngIf=\"lat && lng\">\r\n\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n\r\n          <agm-info-window>\r\n            <p>You are here!</p>\r\n          </agm-info-window>\r\n\r\n        </agm-marker>\r\n      </agm-map>\r\n\r\n    </div>\r\n  </div>\r\n  </ons-page>\r\n\r\n\r\n\r\n"

    /***/
  }),

  /***/ "./src/app/pages/google-map/google-map.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/google-map/google-map.component.ts ***!
    \**********************************************************/
  /*! exports provided: GoogleMapComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function () {
      return GoogleMapComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
    /* harmony import */
    var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


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
            //this.lat = 34.0419777;
            //this.lng = -4.9888921;
            //console.log(this.lat);
            //console.log(this.lng);
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
        this.router.navigate(['/tabs']);
      };
      GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ons-page[app-google-map]',
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


    /***/
  }),

  /***/ "./src/app/pages/login/login.component.html":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.html ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-page >\r\n  <ons-toolbar>\r\n    <div class=\"center\"> Login </div>\r\n  </ons-toolbar>\r\n  <div class=\"content\">\r\n    <div class=\"card\">\r\n\r\n      <div class=\"container-logo\">\r\n        <img src=\"assets/imgs/logo.png\" height=\"110px\" width=\"200px\" />\r\n      </div>\r\n  \r\n      <form [formGroup]=\"loginForm\" class=\"form1\">\r\n        <div class=\"form-group\">\r\n          <div>\r\n            <ons-input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Type your e-mail here\" ></ons-input></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div><ons-input  type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Type password here\"></ons-input></div>\r\n          <label class=\"error\">{{errorMessage}}</label>\r\n        </div>\r\n  \r\n        \r\n        <ons-button modifier=\"large\" type=\"submit\" class=\"login-button\"  (click)=\"tryLogin(loginForm.value)\">Log In</ons-button>\r\n        <ons-button modifier=\"quiet\" class=\"forgot-password\">Forgot password?</ons-button>\r\n  \r\n      </form>\r\n  \r\n      <div class=\"lbl\">\r\n          - OR -\r\n        </div>\r\n  \r\n      <div class=\"socialLogin\"style=\"text-align: center; margin: 10px;\">\r\n        <ons-button   modifier=\"large\" full class=\"google\" (click)=\"tryGoogleLogin()\" ><ons-icon  icon=\"md-google\" style=\"margin-right: 12px;\"></ons-icon> Sign in with Google   </ons-button >\r\n      </div>\r\n      <div class=\"socialLogin\"style=\"text-align: center; margin: 10px;\">\r\n        <ons-button   modifier=\"large\" full class=\"facebook\" (click)=\"tryFacebookLogin()\"><ons-icon icon=\"md-facebook\" style=\"margin-right: 12px;\"></ons-icon>Sign in with Facebook</ons-button >\r\n      </div>\r\n      <div padding text-center class=\"form-bottom-text\">\r\n          <label>Don't have an Account? <a routerLink=\"/register\">Sign up</a></label>\r\n      </div>\r\n    </div>     \r\n\r\n\r\n  </div>\r\n</ons-page>\r\n"

    /***/
  }),

  /***/ "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/
  /*! exports provided: LoginComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


    var LoginComponent = /** @class */ (function () {
      function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
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
            _this.router.navigate(['/tabs']);
          });
      };
      LoginComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
          .then(function (res) {
            _this.router.navigate(['/tabs']);
          });
      };
      LoginComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
          .then(function (res) {
            _this.router.navigate(['/tabs']);
          });
      };
      LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
          .then(function (res) {
            _this.router.navigate(['/tabs']);
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


    /***/
  }),

  /***/ "./src/app/pages/login/login.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/login/login.scss ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = ".header {\n  text-align: center;\n  font-size: 30px; }\n\n.row {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n\n.lbl {\n  font-size: 16px;\n  color: #555;\n  text-align: center;\n  margin: 10px 0 20px 0; }\n\n.socialLogin {\n  margin: 50px 0;\n  width: 95%; }\n\n.form1 {\n  width: 90%;\n  margin: auto; }\n\n.form-group {\n  margin: 10px auto;\n  padding: 3px 10px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px; }\n\n.facebook {\n  background-color: #3b5998; }\n\n.google {\n  background-color: #d13d35; }\n\n.container-logo {\n  display: inline-block;\n  width: 100%;\n  text-align: center; }\n\n.container-logo img {\n    max-width: 250px; }\n\n.form-bottom-text {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin-top: 10px; }\n\n.form-bottom-text label,\na {\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxUSElOSyBQQUQgVDQ2MFxcRGVza3RvcFxcZ2VuaWUgbG9naWNpZWxcXG9uc2VuXFx0ZXN0QXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVUsRUFBQTs7QUFJWjtFQUNFLGVBQWM7RUFDZCxXQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLHFCQUFvQixFQUFBOztBQUd0QjtFQUNFLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxVQUFTO0VBQ1QsWUFBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSHBCO0lBS0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWUsRUFBQTs7QUFFakI7O0VBRUUsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnJvd3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5sYmx7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgY29sb3I6IzU1NTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW46MTBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLnNvY2lhbExvZ2luIHtcclxuICBtYXJnaW46IDUwcHggMDtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbi5mb3JtMXtcclxuICB3aWR0aDo5MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gO1xyXG4gIHBhZGRpbmc6M3B4IDEwcHggO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuXHJcbi5mYWNlYm9va3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG5cclxufVxyXG4uZ29vZ2xle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTNkMzU7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9nbyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9XHJcbn1cclxuLmZvcm0tYm90dG9tLXRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi5mb3JtLWJvdHRvbS10ZXh0IGxhYmVsLFxyXG5hIHtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuIl19 */"

    /***/
  }),

  /***/ "./src/app/pages/notif/notif.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/notif/notif.component.css ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmL25vdGlmLmNvbXBvbmVudC5jc3MifQ== */"

    /***/
  }),

  /***/ "./src/app/pages/notif/notif.component.html":
  /*!**************************************************!*\
    !*** ./src/app/pages/notif/notif.component.html ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-page>\n    <ons-toolbar>\n        <div class=\"center\">Nottifications</div>\n      </ons-toolbar>\n    <div class=\"background\"></div>\n    <div class=\"content\" class=\"normal-page\">\n        <ons-list-item class=\"notification-post\">\n            <div class=\"left\">\n              <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic1.jpg\" >\n            </div>\n            <div class=\"center\">\n              <div>\n                <b>david_graham </b>est En Direct Now. <span style=\"opacity: 0.4;\">1 hour ago</span>\n              </div>\n\n            </div>\n\n          </ons-list-item>\n          <ons-list-item class=\"notification-post\">\n            <div class=\"left\">\n              <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic2.jpg\" >\n            </div>\n            <div class=\"center\">\n\n              <div>\n                <b>Pika Pika </b>est En Direct Now. <span style=\"opacity: 0.4;\">2 hour ago</span>\n              </div>\n\n            </div>\n\n          </ons-list-item>\n          <ons-list-item class=\"notification-post\">\n            <div class=\"left\">\n              <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic3.jpg\" >\n            </div>\n            <div class=\"center\">\n              <div>\n                <b>Zinour ZN </b>est En Direct Now. <span style=\"opacity: 0.4;\">1 hour ago</span>\n              </div>\n\n            </div>\n\n          </ons-list-item>\n          <ons-list-item class=\"notification-post\">\n            <div class=\"left\">\n              <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic4.jpg\" >\n            </div>\n            <div class=\"center\">\n                   <div>\n                <b>Bella lufy </b>est En Direct Now. <span style=\"opacity: 0.4;\">1 hour ago</span>\n              </div>\n            </div>\n\n          </ons-list-item>\n    </div>\n</ons-page>\n"

    /***/
  }),

  /***/ "./src/app/pages/notif/notif.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/notif/notif.component.ts ***!
    \************************************************/
  /*! exports provided: NotifComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NotifComponent", function () {
      return NotifComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


    var NotifComponent = /** @class */ (function () {
      function NotifComponent() {
      }

      NotifComponent.prototype.ngOnInit = function () {
      };
      NotifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ons-page[page-notif]',
          template: __webpack_require__(/*! ./notif.component.html */ "./src/app/pages/notif/notif.component.html"),
          styles: [__webpack_require__(/*! ./notif.component.css */ "./src/app/pages/notif/notif.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
      ], NotifComponent);
      return NotifComponent;
    }());


    /***/
  }),

  /***/ "./src/app/pages/register/register.component.html":
  /*!********************************************************!*\
    !*** ./src/app/pages/register/register.component.html ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\r\n<ons-page>\r\n  <ons-toolbar>\r\n    <div class=\"center\">Sign up </div>\r\n  </ons-toolbar>\r\n\r\n  <div class=\"background\"></div>\r\n  <div class=\"content\">\r\n    <div class=\"card\">\r\n      <div style=\"text-align:center;\">\r\n        <h1>Create your account</h1>\r\n      </div>\r\n      \r\n    <form [formGroup]=\"registerForm\" class=\"form1\">\r\n      <div class=\"lbl\">\r\n        <label>Please fill in the following form in order to create your O'Live account.</label>\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <ons-input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Type your e-mail here\" required></ons-input>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div><ons-input  type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Type password here\" required></ons-input></div>\r\n          <label class=\"error\">{{errorMessage}}</label>\r\n          <label class=\"success\">{{successMessage}}</label>\r\n        </div>\r\n        \r\n        <ons-button modifier=\"large\" class=\"login-button\" type=\"submit\" (click)=\"tryRegister(registerForm.value)\">Register</ons-button>\r\n\r\n     </form>       \r\n    \r\n     <div class=\"lbl\">\r\n       - OR -\r\n     </div>\r\n  <div class=\"socialLogin\"style=\"text-align: center; margin: 10px auto;\">\r\n    <ons-button  full class=\"google\" modifier=\"large\" (click)=\"tryGoogleLogin()\" ><ons-icon  icon=\"md-google\" style=\"margin-right: 12px;\"></ons-icon> Sign up with Google   </ons-button >\r\n  </div>\r\n  <div class=\"socialLogin\"style=\"text-align: center; margin: 10px auto;\">\r\n    <ons-button  full class=\"facebook\" modifier=\"large\" (click)=\"tryFacebookLogin()\"><ons-icon icon=\"md-facebook\" style=\"margin-right: 12px;\"></ons-icon>Sign up with Facebook</ons-button >\r\n  </div>\r\n   <div style=\"text-align: center; margin: 10px;\">\r\n    Already have an account? <a routerLink=\"/login\">Login</a>\r\n  </div>\r\n    </div>\r\n  </div>\r\n</ons-page>\r\n"

    /***/
  }),

  /***/ "./src/app/pages/register/register.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/register/register.component.scss ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px; }\n\n.row {\n  margin-top: 10px; }\n\n.lbl {\n  font-size: 16px;\n  color: #555;\n  text-align: center;\n  margin: 10px 0 20px 0; }\n\n.error {\n  color: red; }\n\n.success {\n  color: green; }\n\n.form1 {\n  width: 90%;\n  margin: auto; }\n\n.form-group {\n  margin: 10px auto;\n  padding: 3px 10px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px; }\n\n.socialLogin {\n  margin: 30px auto;\n  width: 90%; }\n\n.facebook {\n  background-color: #3b5998; }\n\n.google {\n  background-color: #d13d35; }\n\n.container-logo {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px; }\n\n.container-logo img {\n    max-width: 250px; }\n\n.form-bottom-text {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin-top: 10px; }\n\n.form-bottom-text label,\na {\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxUSElOSyBQQUQgVDQ2MFxcRGVza3RvcFxcZ2VuaWUgbG9naWNpZWxcXG9uc2VuXFx0ZXN0QXBwL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFjO0VBQ2QsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFBQTs7QUFJdEI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFTO0VBQ1QsWUFBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBR1o7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFKbEI7SUFPSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZSxFQUFBOztBQUVqQjs7RUFFRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmxibHtcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjojNTU1O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbjoxMHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG5cclxuLmVycm9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zdWNjZXNze1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmZvcm0xe1xyXG4gIHdpZHRoOjkwJTtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICBtYXJnaW46IDEwcHggYXV0byA7XHJcbiAgcGFkZGluZzozcHggMTBweCA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4gXHJcbi5zb2NpYWxMb2dpbiB7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmZhY2Vib29re1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn1cclxuLmdvb2dsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzZDM1O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG59XHJcbi5mb3JtLWJvdHRvbS10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uZm9ybS1ib3R0b20tdGV4dCBsYWJlbCxcclxuYSB7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbiJdfQ== */"

    /***/
  }),

  /***/ "./src/app/pages/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/register/register.component.ts ***!
    \******************************************************/
  /*! exports provided: RegisterComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


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
          }, function (err) {
            return console.log(err);
          });
      };
      RegisterComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
          .then(function (res) {
            _this.router.navigate(['/user']);
          }, function (err) {
            return console.log(err);
          });
      };
      RegisterComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
          .then(function (res) {
            _this.router.navigate(['/user']);
          }, function (err) {
            return console.log(err);
          });
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


    /***/
  }),

  /***/ "./src/app/pages/second-page/second-page.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pages/second-page/second-page.component.css ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

    /***/
  }),

  /***/ "./src/app/pages/second-page/second-page.component.html":
  /*!**************************************************************!*\
    !*** ./src/app/pages/second-page/second-page.component.html ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-toolbar>\n  <div class=\"center\">Second</div>\n</ons-toolbar>\n<div class=\"background\"></div>\n<div class=\"content\">\n  <ons-button (click)=\"takePic()\">Take Picture</ons-button>\n  <br>\n  <br>\n  <br>\n  <ons-button (click)=\"pop()\">Pop</ons-button>\n  <img *ngIf=\"base64Image!=null\" alt=\"\" [src]=\"base64Image\" height=\"500\" width=\"500\"/>\n</div>"

    /***/
  }),

  /***/ "./src/app/pages/second-page/second-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/second-page/second-page.component.ts ***!
    \************************************************************/
  /*! exports provided: SecondPageComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function () {
      return SecondPageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
    /* harmony import */
    var _first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../first-page-component/first-page-component.component */ "./src/app/pages/first-page-component/first-page-component.component.ts");


    var _self;
    var SecondPageComponent = /** @class */ (function () {
      function SecondPageComponent(params, navigator) {
        this.params = params;
        this.navigator = navigator;
        console.log(JSON.stringify(params.data));
        _self = this;
      }

      SecondPageComponent_1 = SecondPageComponent;
      SecondPageComponent.prototype.ngOnInit = function () {
      };
      SecondPageComponent.prototype.pop = function () {
        // pop SecontPageComponent to `ons-navigator
        this.navigator.element.pushPage(_first_page_component_first_page_component_component__WEBPACK_IMPORTED_MODULE_3__["FirstPageComponentComponent"], {data: {val: 9999}});
      };
      SecondPageComponent.prototype.takePic = function () {
        console.log(cordova);
        console.log(navigator);
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
          selector: 'ons-page[second]',
          template: __webpack_require__(/*! ./second-page.component.html */ "./src/app/pages/second-page/second-page.component.html"),
          styles: [__webpack_require__(/*! ./second-page.component.css */ "./src/app/pages/second-page/second-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["Params"], ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["OnsNavigator"]])
      ], SecondPageComponent);
      return SecondPageComponent;
    }());


    /***/
  }),

  /***/ "./src/app/pages/user/user.component.html":
  /*!************************************************!*\
    !*** ./src/app/pages/user/user.component.html ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\r\n<ons-page>\r\n  <ons-toolbar>\r\n    <div class=\"center\">Profile</div>\r\n  </ons-toolbar>\r\n  <div class=\"background\"></div>\r\n  <div class=\"content\" class=\"initial-page\">\r\n    <div class=\"profile-card\"> \r\n      <img class=\"profile-image\" [src]=\"user.image\" *ngIf=\"user.image\" alt=\"User image\">\r\n      <img class=\"profile-image\" src=\"https://via.placeholder.com/400x300\" *ngIf=\"!user.image\" alt=\"User image\">\r\n      <div *ngIf='user.provider != \"password\"'class=\"card-body\">\r\n        <div class=\"profile-name\">{{user.name}}</div>\r\n        <div class=\"profile-id\">@esmail</div>\r\n        <div class=\"profile-desc\">Freelance designer, MEAN stack developer</div>\r\n     </div>\r\n  </div>\r\n  \r\n \r\n <div *ngIf='user.provider == \"password\"'class=\"card-body\">\r\n    <form [formGroup]=\"profileForm\">\r\n      <div class=\"form-group\">\r\n        <label>Your name : </label>\r\n        <ons-input type=\"text\" formControlName=\"name\" class=\"form-control\" required></ons-input>\r\n\r\n      </div>\r\n    </form>\r\n    <ons-button (click)=\"save(profileForm.value)\" class=\"btn btn-primary\">Save</ons-button>\r\n  </div>\r\n\r\n  <ons-list>\r\n      <ons-list-item modifier=\"chevron tappable\" ng-click=\"myNavTab3.pushPage('profile.html')\">\r\n          <div class=\"list__item__left\">\r\n              <ons-icon icon=\"ion-person\" size=\"20px\"></ons-icon>\r\n          </div>\r\n          <div class=\"list__item__center\">Profile </div>\r\n      </ons-list-item>\r\n      <ons-list-item modifier=\"chevron tappable\" (click)=\"goToMap()\">\r\n        <div class=\"list__item__left\">\r\n            <ons-icon icon=\"ion-map\" size=\"20px\"></ons-icon>\r\n        </div>\r\n        <div class=\"list__item__center\">Search on the map </div>\r\n    </ons-list-item>\r\n      <ons-list-item modifier=\"chevron tappable\">\r\n          <div class=\"list__item__left\">\r\n              <ons-icon icon=\"ion-stats-bars\" size=\"20px\"></ons-icon>\r\n          </div>\r\n          <div class=\"list__item__center\">Go Live!</div>\r\n      </ons-list-item>\r\n      <ons-list-item modifier=\"chevron tappable\">\r\n          <div class=\"list__item__left\">\r\n              <ons-icon icon=\"ion-play\" size=\"20px\"></ons-icon>\r\n          </div>\r\n          <div class=\"list__item__center\">Saved Videos </div>\r\n      </ons-list-item>\r\n      <ons-list-item modifier=\"chevron tappable\">\r\n        <div class=\"list__item__left\">\r\n            <ons-icon icon=\"ion-person\" size=\"20px\"></ons-icon>\r\n        </div>\r\n        <div class=\"list__item__center\">Friends List </div>\r\n    </ons-list-item>\r\n    <ons-list-item modifier=\"chevron tappable\">\r\n      <div class=\"list__item__left\">\r\n          <ons-icon icon=\"ion-settings\" size=\"20px\"></ons-icon>\r\n      </div>\r\n      <div class=\"list__item__center\">Settings </div>\r\n  </ons-list-item>\r\n  <ons-list-item modifier=\"chevron tappable\">\r\n          <div class=\"list__item__left\">\r\n              <ons-icon icon=\"ion-log-out\" size=\"20px\"></ons-icon>\r\n          </div>\r\n          <div class=\"list__item__center\" ><a (click)=\"logout()\">Log out</a></div>\r\n      </ons-list-item>\r\n  </ons-list>\r\n  </div>\r\n  </ons-page>\r\n\r\n"

    /***/
  }),

  /***/ "./src/app/pages/user/user.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/user/user.component.ts ***!
    \**********************************************/
  /*! exports provided: UserComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
    /* harmony import */
    var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
    /* harmony import */
    var _core_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/user.model */ "./src/app/core/user.model.ts");


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
          }, function (err) {
            return console.log(err);
          });
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
      UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ons-page[page-user]',
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


    /***/
  }),

  /***/ "./src/app/pages/user/user.resolver.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/user/user.resolver.ts ***!
    \*********************************************/
  /*! exports provided: UserResolver */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserResolver", function () {
      return UserResolver;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */
    var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
    /* harmony import */
    var _core_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/user.model */ "./src/app/core/user.model.ts");


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
              } else {
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


    /***/
  }),

  /***/ "./src/app/pages/user/user.scss":
  /*!**************************************!*\
    !*** ./src/app/pages/user/user.scss ***!
    \**************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin: 60px 0 20px 0; }\n\n.row {\n  margin-top: 30px; }\n\n.image {\n  width: 100%; }\n\n.profile-card {\n  width: 100%;\n  text-align: center;\n  color: white;\n  padding: 30px 0;\n  line-height: 1.4;\n  background-color: #33393c;\n  text-shadow: rgba(0, 0, 0, 0.4) 0px 1px 0px; }\n\n.profile-image {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  background-color: black;\n  border: 1px solid white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; }\n\n.myInput {\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 8x;\n  font-size: 16px; }\n\n.wrapper {\n  text-align: center;\n  width: 80%;\n  margin: 0 auto 0; }\n\n.profile-name {\n  margin: 20px 0 0 0;\n  font-weight: 600;\n  font-size: 17px; }\n\n.list-item-container {\n  line-height: 2;\n  padding-top: 5px;\n  /*15px 0px 15px 15px; */ }\n\n.list-item-wrapper {\n  line-height: 6; }\n\n.list__item__left {\n  margin-right: 5px; }\n\n.profile-id {\n  margin: 0 0 5px 0;\n  font-size: 14px;\n  opacity: 0.6; }\n\n.profile-desc {\n  font-size: 15px;\n  opacity: 0.6;\n  width: 90%;\n  text-align: center;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9DOlxcVXNlcnNcXFRISU5LIFBBRCBUNDYwXFxEZXNrdG9wXFxnZW5pZSBsb2dpY2llbFxcb25zZW5cXHRlc3RBcHAvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyXFx1c2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQ0YsRUFBQTs7QUFHQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDJDQUEyQyxFQUFBOztBQUc3QztFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QyxzREFBc0QsRUFBQTs7QUFFeEQ7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixnQ0FBZ0M7RUFFaEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBSWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFakI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUFBLEVBQXdCOztBQUc1QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyL3VzZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW46IDYwcHggMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOTNjO1xyXG4gIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDFweCAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyIDoxcHggc29saWQgd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAycHggMHB4IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMnB4IDBweCAwcHg7XHJcbn1cclxuLm15SW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIFxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMDtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5saXN0LWl0ZW0tY29udGFpbmVyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIC8qMTVweCAwcHggMTVweCAxNXB4OyAqL1xyXG59XHJcblxyXG4ubGlzdC1pdGVtLXdyYXBwZXIge1xyXG4gIGxpbmUtaGVpZ2h0OiA2O1xyXG59XHJcblxyXG4ubGlzdF9faXRlbV9fbGVmdHtcclxuICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gIH1cclxuXHJcbi5wcm9maWxlLWlkIHtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ucHJvZmlsZS1kZXNjIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"

    /***/
  }),

  /***/ "./src/app/tab1/tab1.component.css":
  /*!*****************************************!*\
    !*** ./src/app/tab1/tab1.component.css ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = ".search_box {\r\n  width: 90%;\r\n  padding-top: 7px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoX2JveCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcbiJdfQ== */"

    /***/
  }),

  /***/ "./src/app/tab1/tab1.component.html":
  /*!******************************************!*\
    !*** ./src/app/tab1/tab1.component.html ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-page>\n    <ons-toolbar>\n        <div class=\"center\">Diffusions</div>\n    </ons-toolbar>\n    <div class=\"background\"></div>\n    <div class=\"content\" class=\"initial-page\">\n        <br>\n\n        <ons-list-header><ons-search-input class=\"search_box\"  placeholder=\"Search\"></ons-search-input></ons-list-header>\n        <br>\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"https://placekitten.com/g/40/40\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Cutest kitty <span class=\"list-item__subtitle\">@kitty</span></span>\n          <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n        </div>\n        <div class=\"right\">\n          <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n        </div>\n      </ons-list-item>\n\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic1.jpg\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Bella lufy <span class=\"list-item__subtitle\">@lufy</span></span>\n          <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n        </div>\n        <div class=\"right\">\n          <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n        </div>\n      </ons-list-item>\n\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic2.jpg\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Pika Pika <span class=\"list-item__subtitle\">@pika</span></span>\n          <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n        </div>\n        <div class=\"right\">\n          <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n        </div>\n      </ons-list-item>\n\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic3.jpg\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Zinour ZN <span class=\"list-item__subtitle\">@nour</span></span>\n          <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n        </div>\n        <div class=\"right\">\n          <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n        </div>\n      </ons-list-item>\n\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic4.jpg\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Amelia Es <span class=\"list-item__subtitle\">@amelia</span></span>\n          <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n        </div>\n        <div class=\"right\">\n          <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n        </div>\n      </ons-list-item>\n\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic5.jpg\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Sarah sh  <span class=\"list-item__subtitle\">@sarah</span></span>\n          <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n        </div>\n        <div class=\"right\">\n          <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n        </div>\n      </ons-list-item>\n\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"./../../assets/imgs/pic6.jpg\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Sofia sofia <span class=\"list-item__subtitle\">@sofi</span></span>\n          <span class=\"list-item__subtitle\">LIVE NOW #2019</span>\n        </div>\n        <div class=\"right\">\n          <ons-toolbar-button ><ons-icon class=\"right\" icon=\"ion-person-add\"></ons-icon></ons-toolbar-button>\n        </div>\n      </ons-list-item>\n\n    </div>\n    </ons-page>\n"

    /***/
  }),

  /***/ "./src/app/tab1/tab1.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tab1/tab1.component.ts ***!
    \****************************************/
  /*! exports provided: Tab1Component */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Tab1Component", function () {
      return Tab1Component;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


    var Tab1Component = /** @class */ (function () {
      function Tab1Component() {
      }

      Tab1Component.prototype.ngOnInit = function () {
      };
      Tab1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ons-page[app-tab1]',
          template: __webpack_require__(/*! ./tab1.component.html */ "./src/app/tab1/tab1.component.html"),
          styles: [__webpack_require__(/*! ./tab1.component.css */ "./src/app/tab1/tab1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
      ], Tab1Component);
      return Tab1Component;
    }());


    /***/
  }),

  /***/ "./src/app/tab2/tab2.component.css":
  /*!*****************************************!*\
    !*** ./src/app/tab2/tab2.component.css ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = ".camera-view {\r\n  width: 100%;\r\n  height: 60%;\r\n  text-align: center;\r\n  background-color: #cacaca;\r\n  display: table;\r\n}\r\n\r\n.camera-icon {\r\n  vertical-align: middle !important;\r\n  font-size: 100px;\r\n  opacity: 0.4;\r\n  display: table-cell;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbWVyYS12aWV3IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmNhbWVyYS1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuIl19 */"

    /***/
  }),

  /***/ "./src/app/tab2/tab2.component.html":
  /*!******************************************!*\
    !*** ./src/app/tab2/tab2.component.html ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-page class=\"main_pages\"  id=\"camera-page\">\n  <ons-toolbar>\n    <div class=\"center\" id=\"toolbar-title\">Diffusion</div>\n  </ons-toolbar>\n  <div class=\"background\"></div>\n  <div class=\"content\" class=\"normal-page\">\n    <div style=\"text-align: center; margin: 10px\">\n        <div class=\"camera-view\"><ons-icon class=\"camera-icon\" icon=\"ion-android-camera\"></ons-icon></div>\n    </div>\n    <div>\n      <ons-button (click)=\"startStreaming()\">Start Streaming !</ons-button>\n    </div>\n  </div>\n</ons-page>\n"

    /***/
  }),

  /***/ "./src/app/tab2/tab2.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tab2/tab2.component.ts ***!
    \****************************************/
  /*! exports provided: Tab2Component */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Tab2Component", function () {
      return Tab2Component;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


    var Tab2Component = /** @class */ (function () {
      function Tab2Component(http) {
        this.http = http;
      }

      Tab2Component.prototype.ngOnInit = function () {
      };
      Tab2Component.prototype.createStreaming = function () {
        console.log("createStreaming !!");
        var httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_ID + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_SECRET)
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
        ß
      };
      Tab2Component.prototype.startStreaming = function () {
        console.log("startStreaming !");
        videoStreamer.streamRTMPAuth('rtmp://live.mux.com/app/28372226-3a35-bde4-3b8a-b70656dfd775',
          src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_ID,
          src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MUX_TOKEN_SECRET,
          this.successStreaming, this.failedStreaming);
      };
      Tab2Component.prototype.failedStreaming = function (err) {
        console.log(err);
      };
      Tab2Component.prototype.successStreaming = function (res) {
        console.log(res);
      };
      Tab2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ons-page[app-tab2]',
          template: __webpack_require__(/*! ./tab2.component.html */ "./src/app/tab2/tab2.component.html"),
          styles: [__webpack_require__(/*! ./tab2.component.css */ "./src/app/tab2/tab2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
      ], Tab2Component);
      return Tab2Component;
    }());


    /***/
  }),

  /***/ "./src/app/tabs/tabs.component.css":
  /*!*****************************************!*\
    !*** ./src/app/tabs/tabs.component.css ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5jb21wb25lbnQuY3NzIn0= */"

    /***/
  }),

  /***/ "./src/app/tabs/tabs.component.html":
  /*!******************************************!*\
    !*** ./src/app/tabs/tabs.component.html ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ons-page>\n  <ons-tabbar>\n    <div class=\"tabbar__content\"></div>\n    <div class=\"tabbar\">\n      <ons-tab label=\"Accueil\" icon=\"ion-home\" [page]=\"home\" ></ons-tab>\n      <ons-tab label=\"Diffusion\" icon=\"ion-camera\" [page]=\"streaming\"></ons-tab>\n      <ons-tab label=\"Carte\"  icon=\"fa-map-marked-alt\" [page]=\"map\"></ons-tab>\n      <ons-tab label=\"Profile\"  icon=\"ion-person\" [page]=\"user\" active></ons-tab>\n      <ons-tab label=\"Notification\" icon=\"md-notifications\" [page]=\"notif\" ></ons-tab>\n    </div>\n  </ons-tabbar>\n  </ons-page>\n\n"

    /***/
  }),

  /***/ "./src/app/tabs/tabs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/tabs.component.ts ***!
    \****************************************/
  /*! exports provided: TabsComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
      return TabsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab1/tab1.component */ "./src/app/tab1/tab1.component.ts");
    /* harmony import */
    var _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab2/tab2.component */ "./src/app/tab2/tab2.component.ts");
    /* harmony import */
    var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/user/user.component */ "./src/app/pages/user/user.component.ts");
    /* harmony import */
    var _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/google-map/google-map.component */ "./src/app/pages/google-map/google-map.component.ts");
    /* harmony import */
    var _pages_notif_notif_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/notif/notif.component */ "./src/app/pages/notif/notif.component.ts");


    var TabsComponent = /** @class */ (function () {
      function TabsComponent() {
        this.home = _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_2__["Tab1Component"];
        this.streaming = _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_3__["Tab2Component"];
        this.user = _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"];
        this.map = _pages_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"];
        this.notif = _pages_notif_notif_component__WEBPACK_IMPORTED_MODULE_6__["NotifComponent"];
      }

      TabsComponent.prototype.ngOnInit = function () {
      };
      TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-tabs',
          template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/tabs/tabs.component.html"),
          styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/tabs/tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
      ], TabsComponent);
      return TabsComponent;
    }());


    /***/
  }),

  /***/ "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
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


    /***/
  }),

  /***/ "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
      .catch(function (err) {
        return console.error(err);
      });


    /***/
  }),

  /***/ 0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! C:\Users\THINK PAD T460\Desktop\genie logiciel\onsen\testApp\src\main.ts */"./src/main.ts");


    /***/
  })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map
