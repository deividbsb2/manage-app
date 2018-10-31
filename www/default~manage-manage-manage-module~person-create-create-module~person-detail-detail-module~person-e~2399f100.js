(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~manage-manage-manage-module~person-create-create-module~person-detail-detail-module~person-e~2399f100"],{

/***/ "./src/app/person/shared/person.service.ts":
/*!*************************************************!*\
  !*** ./src/app/person/shared/person.service.ts ***!
  \*************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract-service */ "./src/app/shared/abstract-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTE = 'people';
var PersonService = /** @class */ (function (_super) {
    __extends(PersonService, _super);
    function PersonService(api, http) {
        var _this = _super.call(this, '\people', http) || this;
        _this.api = api;
        return _this;
    }
    PersonService.prototype.getAll = function () {
        return this.getAll();
    };
    PersonService.prototype.getById = function (id) {
        return this.api.getById(ROUTE, id);
    };
    PersonService.prototype.post = function (data) {
        return this.api.post(ROUTE, data);
    };
    PersonService.prototype.put = function (id, data) {
        return this.api.put(ROUTE, id, data);
    };
    PersonService.prototype.delete = function (id) {
        return this.api.delete(ROUTE, id);
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PersonService);
    return PersonService;
}(_shared_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/shared/abstract-service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/abstract-service.ts ***!
  \********************************************/
/*! exports provided: AbstractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractService", function() { return AbstractService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




// /--------------------------------------------------\
// | AbstractService class                            |
// |--------------------------------------------------|
// | Definição de métodos/atributos default           |
// | Esta classe deverá ser extendida por todas as    |
// | classes de serviço que irão tratar modelos ou    |
// | entidades de negócio.                            |
// | Exemplo:                                         |
// |                                                  |
// | export class AlunoService                        |
// |              extends AbstractService<Aluno>      |
// |                                                  |
// \--------------------------------------------------/
var AbstractService = /** @class */ (function () {
    // utilizar o novo provider do http (@angular/common/http)
    function AbstractService(baseUrl, http, withCredentials) {
        if (withCredentials === void 0) { withCredentials = true; }
        this.http = http;
        this.withCredentials = withCredentials;
        this.jsonType = 'application/json';
        this.baseUrl = baseUrl;
    }
    AbstractService.prototype.getAll = function () {
        return this.http.get(this.getUrl(), this.headers());
    };
    /**
     * Utilizado para recuperar apenas um objeto
     * @param {number} id
     * @returns {Observable<T>}
     */
    AbstractService.prototype.get = function (id) {
        return this.http.get(this.getUrl(), this.headers());
    };
    AbstractService.prototype.add = function (entity) {
        return this.http.post(this.getUrl(), entity, this.headers());
    };
    AbstractService.prototype.update = function (entity, id) {
        return this.http.put(this.getUrl('/' + id), JSON.stringify(entity), this.headers());
        //  .subscribe(
        //  (val) => {
        //    console.log("PUT call successful value returned in body", val);
        //  },
        //    (err: HttpErrorResponse) => {
        //    console.log("PUT call in error", err);
        //  },
        //  () => {
        //    console.log("The PUT observable is now completed.");
        //  })
    };
    AbstractService.prototype.remove = function (id) {
        return this.http.delete(this.getUrl('/' + id), this.headers()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        //  .subscribe(
        //  (val) => {
        //    console.log("DELETE call successful value returned in body", val);
        //  },
        //    (err: HttpErrorResponse) => {
        //    console.log("DELETE call in error", err);
        //  },
        //  () => {
        //    console.log("The DELETE observable is now completed.");
        //  })
    };
    // /--------------------------------------------------\
    // | Métodos auxiliares                               |
    // |--------------------------------------------------|
    // | Funções de ajuda/tratamento da API http    |
    // \--------------------------------------------------/
    /**
     * Retorna a url absoluta considerando o 'contexto'  e a 'url relativa'.
     * @param relativeUrl
     * @returns string
     */
    AbstractService.prototype.getUrl = function (relativeUrl) {
        var absoluteUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + this.baseUrl;
        if (relativeUrl !== null && relativeUrl !== undefined) {
            absoluteUrl += relativeUrl;
        }
        return absoluteUrl;
    };
    AbstractService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    /**
     * Gera um objeto `options` default para ser injetado nas requisições HTTP
     *
     * @param boolean - Indica se deve utilizar credentials.
     */
    AbstractService.prototype.headers = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return httpOptions;
    };
    return AbstractService;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ApiService.prototype.extractData = function (res) {
        var body = res;
        if (body.data) {
            body = body.data;
        }
        return body || {};
    };
    ApiService.prototype.getAll = function (route) {
        return this.http.get(apiUrl + "/" + route, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getById = function (route, id) {
        var url = apiUrl + "/" + route + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.post = function (route, data) {
        var url = apiUrl + "/" + route;
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.put = function (route, id, data) {
        var url = apiUrl + "/" + route + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.delete = function (route, id) {
        var url = apiUrl + "/" + route + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=default~manage-manage-manage-module~person-create-create-module~person-detail-detail-module~person-e~2399f100.js.map