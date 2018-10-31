(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-manage-manage-module"],{

/***/ "./src/app/manage/manage/manage.module.ts":
/*!************************************************!*\
  !*** ./src/app/manage/manage/manage.module.ts ***!
  \************************************************/
/*! exports provided: ManagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePageModule", function() { return ManagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _manage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage.page */ "./src/app/manage/manage/manage.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _manage_page__WEBPACK_IMPORTED_MODULE_5__["ManagePage"]
    }
];
var ManagePageModule = /** @class */ (function () {
    function ManagePageModule() {
    }
    ManagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_manage_page__WEBPACK_IMPORTED_MODULE_5__["ManagePage"]]
        })
    ], ManagePageModule);
    return ManagePageModule;
}());



/***/ }),

/***/ "./src/app/manage/manage/manage.page.html":
/*!************************************************!*\
  !*** ./src/app/manage/manage/manage.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Gerenciar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>{{app.name}}</ion-card-title>\n      <ion-card-subtitle>{{app.bundle_id}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-list-header>Vincular Pessoa</ion-list-header>\n        <ion-item>\n          <ion-label>Perfil</ion-label>\n          <ion-select value=\"1\" okText=\"Escolher\" cancelText=\"Fechar\">\n            <ion-select-option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{profile.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pessoas</ion-label>\n          <ion-select value=\"1\" okText=\"Escolher\" cancelText=\"Fechar\">\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n            <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n            <ion-select-option value=\"black\">Black</ion-select-option>\n            <ion-select-option value=\"red\">Red</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/manage/manage/manage.page.scss":
/*!************************************************!*\
  !*** ./src/app/manage/manage/manage.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manage/manage/manage.page.ts":
/*!**********************************************!*\
  !*** ./src/app/manage/manage/manage.page.ts ***!
  \**********************************************/
/*! exports provided: ManagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePage", function() { return ManagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apps_shared_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apps/shared/app.service */ "./src/app/apps/shared/app.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_shared_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../person/shared/profile.service */ "./src/app/person/shared/profile.service.ts");
/* harmony import */ var _person_shared_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../person/shared/person.service */ "./src/app/person/shared/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ManagePage = /** @class */ (function () {
    function ManagePage(appService, profileService, personService, loadingController, route, router, toastController, actionSheetController, alertController) {
        this.appService = appService;
        this.profileService = profileService;
        this.personService = personService;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.app = {};
    }
    ManagePage.prototype.ngOnInit = function () {
        this.getApp();
    };
    ManagePage.prototype.getApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.appService.getById(+this.route.snapshot.paramMap.get('id'))
                                .subscribe(function (res) {
                                console.log(res);
                                _this.app = res;
                                loading.dismiss();
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                                _this.presentToast('Erro ao consultar. Tente novamente!');
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePage.prototype.getProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.profileService.getAll()
                                .subscribe(function (res) {
                                console.log(res);
                                _this.profiles = res;
                                loading.dismiss();
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                                _this.presentToast('Erro ao consultar. Tente novamente!');
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            showCloseButton: true,
                            closeButtonText: 'Fechar'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePage.prototype.getPeopleByProfile = function (profileId) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.profileService.getAll()
                                .subscribe(function (res) {
                                console.log(res);
                                _this.profiles = res;
                                loading.dismiss();
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                                _this.presentToast('Erro ao consultar. Tente novamente!');
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.page.html */ "./src/app/manage/manage/manage.page.html"),
            styles: [__webpack_require__(/*! ./manage.page.scss */ "./src/app/manage/manage/manage.page.scss")],
        }),
        __metadata("design:paramtypes", [_apps_shared_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _person_shared_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _person_shared_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ManagePage);
    return ManagePage;
}());



/***/ })

}]);
//# sourceMappingURL=manage-manage-manage-module.js.map