(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person-create-create-module"],{

/***/ "./node_modules/ngx-mask/fesm5/ngx-mask.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-mask/fesm5/ngx-mask.js ***!
  \*************************************************/
/*! exports provided: config, NEW_CONFIG, INITIAL_CONFIG, initialConfig, MaskDirective, MaskService, _configFactory, NgxMaskModule, MaskPipe, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskService", function() { return MaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function() { return NgxMaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskPipe", function() { return MaskPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MaskApplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
/** @type {?} */
var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
/** @type {?} */
var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
/** @type {?} */
var initialConfig = {
    sufix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
    specialCharacters: ['/', '(', ')', '.', ':', '-', ' ', '+', ',', '@', '[', ']', '\"', '\''],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true
        },
        'A': {
            pattern: new RegExp('\[a-zA-Z0-9\]')
        },
        'S': {
            pattern: new RegExp('\[a-zA-Z\]')
        },
        'd': {
            pattern: new RegExp('\\d'),
        },
        'm': {
            pattern: new RegExp('\\d'),
        },
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = '';
        this._shift = new Set();
        this.maskSpecialCharacters = /** @type {?} */ ((this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = /** @type {?} */ ((this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.sufix = this._config.sufix;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    MaskApplierService.prototype.applyMaskWithPattern = /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    function (inputValue, maskAndPattern) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskApplierService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        /** @type {?} */
        var cursor = 0;
        /** @type {?} */
        var result = "";
        /** @type {?} */
        var multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        /** @type {?} */
        var inputArray = inputValue.toString()
            .split('');
        // tslint:disable-next-line
        for (var i = 0, inputSymbol = inputArray[0]; i
            < inputArray.length; i++, inputSymbol = inputArray[i]) {
            if (cursor === maskExpression.length) {
                break;
            }
            if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                result += inputSymbol;
                cursor += 2;
            }
            else if (maskExpression[cursor + 1] === '*' && multi
                && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
                multi = false;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])
                && maskExpression[cursor + 1]
                    === '*') {
                result += inputSymbol;
                multi = true;
            }
            else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                if (maskExpression[cursor] === 'd') {
                    if (Number(inputSymbol) > 3) {
                        result += 0;
                        cursor += 1;
                        /** @type {?} */
                        var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                            ? inputArray.length
                            : cursor;
                        this._shift.add(shiftStep + this.prefix.length || 0);
                        i--;
                        continue;
                    }
                }
                if (maskExpression[cursor - 1] === 'd') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                        continue;
                    }
                }
                if (maskExpression[cursor] === 'm') {
                    if (Number(inputSymbol) > 1) {
                        result += 0;
                        cursor += 1;
                        /** @type {?} */
                        var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                            ? inputArray.length
                            : cursor;
                        this._shift.add(shiftStep + this.prefix.length || 0);
                        i--;
                        continue;
                    }
                }
                if (maskExpression[cursor - 1] === 'm') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                        continue;
                    }
                }
                result += inputSymbol;
                cursor++;
            }
            else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                /** @type {?} */
                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                    ? inputArray.length
                    : cursor;
                this._shift.add(shiftStep + this.prefix.length || 0);
                i--;
            }
            else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1
                && this.maskAvailablePatterns[maskExpression[cursor]]
                && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                cursor++;
                i--;
            }
            else if ((this.maskExpression[cursor + 1] === '*')
                && (this._findSpecialChar(this.maskExpression[cursor + 2]))
                && (this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2])) {
                cursor += 3;
                result += inputSymbol;
            }
        }
        if (result.length + 1 === maskExpression.length
            && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        /** @type {?} */
        var shift = 1;
        /** @type {?} */
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        /** @type {?} */
        var res = "" + this.prefix + result;
        res = this.sufix &&
            cursor === maskExpression.length
            ? "" + this.prefix + result + this.sufix
            : "" + this.prefix + result;
        return res;
    };
    /**
     * @param {?} inputSymbol
     * @return {?}
     */
    MaskApplierService.prototype._findSpecialChar = /**
     * @param {?} inputSymbol
     * @return {?}
     */
    function (inputSymbol) {
        /** @type {?} */
        var symbol = this.maskSpecialCharacters
            .find(function (val) { return val === inputSymbol; });
        return symbol;
    };
    /**
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    MaskApplierService.prototype._checkSymbolMask = /**
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return this.maskAvailablePatterns[maskSymbol]
            && this.maskAvailablePatterns[maskSymbol].pattern
            && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
    };
    MaskApplierService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    MaskApplierService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [config,] }] }
    ]; };
    return MaskApplierService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaskService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MaskService, _super);
    function MaskService(
    // tslint:disable-next-line
    document, _config, _elementRef, _renderer) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.maskExpression = '';
        _this.isNumberValue = false;
        _this.showMaskTyped = false;
        _this.maskIsShown = '';
        _this.onChange = function (_) { };
        _this.onTouch = function () { };
        _this._formElement = _this._elementRef.nativeElement;
        return _this;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        this.maskIsShown = this.showMaskTyped
            ? this.maskExpression.replace(/[0-9]/g, '_')
            : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        /** @type {?} */
        var result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this.isNumberValue
                    ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                    : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                : this.onChange(this._removeSufix(this._removePrefix(result)));
        /** @type {?} */
        var ifMaskIsShown = '';
        if (!this.showMaskTyped) {
            return result;
        }
        /** @type {?} */
        var resLen = result.length;
        /** @type {?} */
        var prefNmask = this.prefix + this.maskIsShown;
        ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    };
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyValueChanges = /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        /** @type {?} */
        var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    /**
     * @return {?}
     */
    MaskService.prototype.showMaskInInput = /**
     * @return {?}
     */
    function () {
        if (this.showMaskTyped) {
            this.maskIsShown = this.maskExpression.replace(/[0-9]/g, '_');
        }
    };
    /**
     * @return {?}
     */
    MaskService.prototype.clearIfNotMatchFn = /**
     * @return {?}
     */
    function () {
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    Object.defineProperty(MaskService.prototype, "formElementProperty", {
        set: /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), name = _b[0], value = _b[1];
            this._renderer.setProperty(this._formElement, name, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._removeMask = /**
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removePrefix = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.prefix) {
            return value;
        }
        return value
            ? value.replace(this.prefix, '')
            : value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removeSufix = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.sufix) {
            return value;
        }
        return value
            ? value.replace(this.sufix, '')
            : value;
    };
    /**
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._regExpForRemove = /**
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
    };
    MaskService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    MaskService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [config,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    return MaskService;
}(MaskApplierService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaskDirective = /** @class */ (function () {
    function MaskDirective(
    // tslint:disable-next-line
    document, _maskService) {
        this.document = document;
        this._maskService = _maskService;
        this._position = null;
        this.onChange = function (_) { };
        this.onTouch = function () { };
    }
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskValue = value || '';
            if (!this._maskValue) {
                return;
            }
            this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
            this._maskService.formElementProperty = [
                'value',
                this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value ||
                !Array.isArray(value) ||
                (Array.isArray(value) && !value.length)) {
                return;
            }
            this._maskService.maskSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "patterns", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskAvailablePatterns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "prefix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "sufix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.sufix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.dropSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showMaskTyped", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.showMaskTyped = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showTemplate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.showTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.clearIfNotMatch = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = /** @type {?} */ (e.target);
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        /** @type {?} */
        var position = (/** @type {?} */ (el.selectionStart)) === 1
            ? (/** @type {?} */ (el.selectionStart)) + this._maskService.prefix.length
            : /** @type {?} */ (el.selectionStart);
        /** @type {?} */
        var caretShift = 0;
        this._maskService.applyValueChanges(position, function (shift) { return (caretShift = shift); });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd =
            this._position !== null
                ? this._position
                : position +
                    // tslint:disable-next-line
                    ((/** @type {?} */ (e)).inputType === 'deleteContentBackward' ? 0 : caretShift);
        this._position = null;
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = /** @type {?} */ (e.target);
        if (el !== null && el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            (/** @type {?} */ (e)).keyCode !== 38) {
            return;
        }
        if (this._maskService.showMaskTyped) {
            this._maskService.maskIsShown = this._maskService.maskExpression.replace(/[0-9]/g, '_');
        }
        el.value = !el.value || el.value === this._maskService.prefix
            ? this._maskService.prefix + this._maskService.maskIsShown
            : el.value;
        /** fix of cursor position with prefix when mouse click occur */
        if (((/** @type {?} */ (el.selectionStart)) || (/** @type {?} */ (el.selectionEnd))) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.a = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = /** @type {?} */ (e.target);
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8) {
            if ((/** @type {?} */ (el.selectionStart)) <= this._maskService.prefix.length
                && (/** @type {?} */ (el.selectionEnd)) <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            this.onFocus(e);
            if (e.keyCode === 8
                && el.selectionStart === 0
                && el.selectionEnd === el.value.length) {
                el.value = this._maskService.prefix;
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 1;
                this.onInput(e);
            }
        }
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onPaste = /**
     * @return {?}
     */
    function () {
        this._position = Number.MAX_SAFE_INTEGER;
    };
    /**
     * It writes the value in the input
     * @param {?} inputValue
     * @return {?}
     */
    MaskDirective.prototype.writeValue = /**
     * It writes the value in the input
     * @param {?} inputValue
     * @return {?}
     */
    function (inputValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                if (typeof inputValue === 'number') {
                    inputValue = String(inputValue);
                    this._maskService.isNumberValue = true;
                }
                inputValue && this._maskService.maskExpression ||
                    this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)
                    ? (this._maskService.formElementProperty = [
                        'value',
                        this._maskService.applyMask(inputValue, this._maskService.maskExpression)
                    ])
                    : (this._maskService.formElementProperty = ['value', inputValue]);
                this._inputValue = inputValue;
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaskDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaskDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    MaskDirective.prototype.setDisabledState = /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    };
    /**
     * @param {?} maskExp
     * @return {?}
     */
    MaskDirective.prototype._repeatPatternSymbols = /**
     * @param {?} maskExp
     * @return {?}
     */
    function (maskExp) {
        var _this = this;
        return maskExp.match(/{[0-9a-zA-Z]}/)
            && maskExp.split('')
                .reduce(function (accum, currval, index) {
                _this._start = (currval === '{') ? index : _this._start;
                if (currval !== '}') {
                    return _this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                _this._end = index;
                /** @type {?} */
                var repeatNumber = Number(maskExp
                    .slice(_this._start + 1, _this._end));
                /** @type {?} */
                var repaceWith = new Array(repeatNumber + 1)
                    .join(maskExp[_this._start - 1]);
                return accum + repaceWith;
            }, '') || maskExp;
    };
    MaskDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mask]',
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MaskDirective; }),
                            multi: true
                        },
                        MaskService
                    ]
                },] }
    ];
    /** @nocollapse */
    MaskDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: MaskService }
    ]; };
    MaskDirective.propDecorators = {
        maskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mask',] }],
        specialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        patterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sufix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dropSpecialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showMaskTyped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearIfNotMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
        a: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
        onPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['paste',] }]
    };
    return MaskDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    MaskPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    function (value, mask) {
        if (!value) {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask("" + value, mask);
        }
        return this._maskService.applyMaskWithPattern("" + value, mask);
    };
    MaskPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'mask',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    MaskPipe.ctorParameters = function () { return [
        { type: MaskApplierService }
    ]; };
    return MaskPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxMaskModule = /** @class */ (function () {
    function NgxMaskModule() {
    }
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskModule.forRoot = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG]
                },
            ]
        };
    };
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskModule.forChild = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskModule,
        };
    };
    NgxMaskModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [MaskApplierService],
                    exports: [MaskDirective, MaskPipe],
                    declarations: [MaskDirective, MaskPipe]
                },] }
    ];
    return NgxMaskModule;
}());
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, initConfig, configValue);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc2suanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXNrL2FwcC9uZ3gtbWFzay9jb25maWcudHMiLCJuZzovL25neC1tYXNrL2FwcC9uZ3gtbWFzay9tYXNrLWFwcGxpZXIuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2svYXBwL25neC1tYXNrL21hc2suc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2svYXBwL25neC1tYXNrL21hc2suZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFzay9hcHAvbmd4LW1hc2svbWFzay5waXBlLnRzIiwibmc6Ly9uZ3gtbWFzay9hcHAvbmd4LW1hc2svbmd4LW1hc2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XG4gICAgc3VmaXg6IHN0cmluZztcbiAgICBwcmVmaXg6IHN0cmluZztcbiAgICBjbGVhcklmTm90TWF0Y2g6IGJvb2xlYW47XG4gICAgc2hvd1RlbXBsYXRlOiBib29sZWFuO1xuICAgIHNob3dNYXNrVHlwZWQ6IGJvb2xlYW47XG4gICAgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiBib29sZWFuIHwgc3RyaW5nW107XG4gICAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZ1tdO1xuICAgIHBhdHRlcm5zOiB7XG4gICAgICAgIFtjaGFyYWN0ZXI6IHN0cmluZ106IHtcbiAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCxcbiAgICAgICAgICAgIG9wdGlvbmFsPzogYm9vbGVhblxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUgb3B0aW9uc0NvbmZpZyA9IFBhcnRpYWw8SUNvbmZpZz47XG5leHBvcnQgY29uc3QgY29uZmlnOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+ID0gbmV3IEluamVjdGlvblRva2VuKCdjb25maWcnKTtcbmV4cG9ydCBjb25zdCBORVdfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+ID0gbmV3IEluamVjdGlvblRva2VuKCdORVdfQ09ORklHJyk7XG5leHBvcnQgY29uc3QgSU5JVElBTF9DT05GSUc6IEluamVjdGlvblRva2VuPElDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuKCdJTklUSUFMX0NPTkZJRycpO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbmZpZzogSUNvbmZpZyA9IHtcbiAgICBzdWZpeDogJycsXG4gICAgcHJlZml4OiAnJyxcbiAgICBjbGVhcklmTm90TWF0Y2g6IGZhbHNlLFxuICAgIHNob3dUZW1wbGF0ZTogZmFsc2UsXG4gICAgc2hvd01hc2tUeXBlZDogZmFsc2UsXG4gICAgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBbJy8nLCAnKCcsICcpJywgJy4nLCAnOicsICctJywgJyAnLCAnKycsICcsJywgJ0AnLCAnWycsICddJywgJ1xcXCInLCAnXFwnJ10sXG4gICAgcGF0dGVybnM6IHtcbiAgICAgICAgJzAnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxuICAgICAgICB9LFxuICAgICAgICAnOSc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXG4gICAgICAgICAgICBvcHRpb25hbDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnQSc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcW2EtekEtWjAtOVxcXScpXG4gICAgICAgIH0sXG4gICAgICAgICdTJzoge1xuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxbYS16QS1aXFxdJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2QnOiB7XG4gICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKSxcbiAgICAgICAgfSxcbiAgICAgICAgJ20nOiB7XG4gICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKSxcbiAgICAgICAgfSxcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb25maWcsIElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXNrQXBwbGllclNlcnZpY2Uge1xuXG4gICAgcHVibGljIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ107XG4gICAgcHVibGljIHNob3dUZW1wbGF0ZTogSUNvbmZpZ1snc2hvd1RlbXBsYXRlJ107XG4gICAgcHVibGljIGNsZWFySWZOb3RNYXRjaDogSUNvbmZpZ1snY2xlYXJJZk5vdE1hdGNoJ107XG4gICAgcHVibGljIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgbWFza1NwZWNpYWxDaGFyYWN0ZXJzOiBJQ29uZmlnWydzcGVjaWFsQ2hhcmFjdGVycyddO1xuICAgIHB1YmxpYyBtYXNrQXZhaWxhYmxlUGF0dGVybnM6IElDb25maWdbJ3BhdHRlcm5zJ107XG4gICAgcHVibGljIHByZWZpeDogSUNvbmZpZ1sncHJlZml4J107XG4gICAgcHVibGljIHN1Zml4OiBJQ29uZmlnWydzdWZpeCddO1xuICAgIHB1YmxpYyBjdXN0b21QYXR0ZXJuOiBJQ29uZmlnWydwYXR0ZXJucyddO1xuXG5cbiAgICBwcml2YXRlIF9zaGlmdDogU2V0PG51bWJlcj47XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoY29uZmlnKSBwcm90ZWN0ZWQgX2NvbmZpZzogSUNvbmZpZ1xuICAgICkge1xuICAgICAgICB0aGlzLl9zaGlmdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWchLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHRoaXMuX2NvbmZpZy5wYXR0ZXJucztcbiAgICAgICAgdGhpcy5jbGVhcklmTm90TWF0Y2ggPSB0aGlzLl9jb25maWcuY2xlYXJJZk5vdE1hdGNoO1xuICAgICAgICB0aGlzLmRyb3BTcGVjaWFsQ2hhcmFjdGVycyA9IHRoaXMuX2NvbmZpZy5kcm9wU3BlY2lhbENoYXJhY3RlcnM7XG4gICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5fY29uZmlnIS5zcGVjaWFsQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnMgPSB0aGlzLl9jb25maWcucGF0dGVybnM7XG4gICAgICAgIHRoaXMucHJlZml4ID0gdGhpcy5fY29uZmlnLnByZWZpeDtcbiAgICAgICAgdGhpcy5zdWZpeCA9IHRoaXMuX2NvbmZpZy5zdWZpeDtcblxuXG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBwdWJsaWMgYXBwbHlNYXNrV2l0aFBhdHRlcm4oaW5wdXRWYWx1ZTogc3RyaW5nLCBtYXNrQW5kUGF0dGVybjogW3N0cmluZywgSUNvbmZpZ1sncGF0dGVybnMnXV0pOiBzdHJpbmcge1xuICAgICAgY29uc3QgW21hc2ssIGN1c3RvbVBhdHRlcm5dID0gbWFza0FuZFBhdHRlcm47XG4gICAgICB0aGlzLmN1c3RvbVBhdHRlcm4gPSBjdXN0b21QYXR0ZXJuO1xuICAgICAgcmV0dXJuIHRoaXMuYXBwbHlNYXNrKGlucHV0VmFsdWUsIG1hc2spO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHlNYXNrKFxuICAgICAgICBpbnB1dFZhbHVlOiBzdHJpbmcsXG4gICAgICAgIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcsXG4gICAgICAgIHBvc2l0aW9uOiBudW1iZXIgPSAwLFxuICAgICAgICBjYjogRnVuY3Rpb24gPSAoKSA9PiB7fVxuICAgICAgKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbnB1dFZhbHVlID09PSBudWxsIHx8IG1hc2tFeHByZXNzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJzb3I6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IGBgO1xuICAgICAgICBsZXQgbXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAoaW5wdXRWYWx1ZS5zbGljZSgwLCB0aGlzLnByZWZpeC5sZW5ndGgpID09PSB0aGlzLnByZWZpeCkge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UodGhpcy5wcmVmaXgubGVuZ3RoLCBpbnB1dFZhbHVlLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnB1dEFycmF5OiBzdHJpbmdbXSA9IGlucHV0VmFsdWUudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnNwbGl0KCcnKTtcblxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMCwgaW5wdXRTeW1ib2w6IHN0cmluZyA9IGlucHV0QXJyYXlbMF07IGlcbiAgICAgICAgPCBpbnB1dEFycmF5Lmxlbmd0aDsgaSsrLCBpbnB1dFN5bWJvbCA9IGlucHV0QXJyYXlbaV0pIHtcbiAgICAgICAgICAgIGlmIChjdXJzb3IgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkgJiYgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09ICc/Jykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcbiAgICAgICAgICAgICAgICBjdXJzb3IgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSAnKicgJiYgbXVsdGlcbiAgICAgICAgICAgICAgJiYgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XG4gICAgICAgICAgICAgIGN1cnNvciArPSAzO1xuICAgICAgICAgICAgICBtdWx0aSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pXG4gICAgICAgICAgICAgICAgJiYgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV1cbiAgICAgICAgICAgICAgICA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xuICAgICAgICAgICAgICAgIG11bHRpID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09ICc/JyAmJiB0aGlzLl9jaGVja1N5bWJvbE1hc2soXG4gICAgICAgICAgICAgICAgaW5wdXRTeW1ib2wsXG4gICAgICAgICAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl1cbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XG4gICAgICAgICAgICAgICAgY3Vyc29yICs9IDM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gJ2QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvciArPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpKVxuICAgICAgICAgICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICA6IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKCBzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yIC0gMV0gPT09ICdkJykge1xuICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFZhbHVlLnNsaWNlKGN1cnNvciAtIDEsIGN1cnNvciArIDEpKSA+IDMxICkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gJ20nKSB7XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFN5bWJvbCkgPiAxKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgKz0gMDtcbiAgICAgICAgICAgICAgICAgIGN1cnNvciArPSAxO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QobWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKSlcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA6IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZCggc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xuICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3IgLSAxXSA9PT0gJ20nKSB7XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFZhbHVlLnNsaWNlKGN1cnNvciAtIDEsIGN1cnNvciArIDEpKSA+IDEyICkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xuICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvbltjdXJzb3JdO1xuICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcikpXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgOiBjdXJzb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzLmluZGV4T2YoaW5wdXRTeW1ib2wpID4gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrRXhwcmVzc2lvbltjdXJzb3JdXVxuICAgICAgICAgICAgICAgICYmIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tFeHByZXNzaW9uW2N1cnNvcl1dLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yKys7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggKHRoaXMubWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09ICcqJylcbiAgICAgICAgICAgICAgJiYgKHRoaXMuX2ZpbmRTcGVjaWFsQ2hhcih0aGlzLm1hc2tFeHByZXNzaW9uW2N1cnNvciArIDJdKSlcbiAgICAgICAgICAgICAgJiYgKHRoaXMuX2ZpbmRTcGVjaWFsQ2hhcihpbnB1dFN5bWJvbCkgPT09IHRoaXMubWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl0pICkge1xuICAgICAgICAgICAgICBjdXJzb3IgKz0gMztcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCArIDEgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aFxuICAgICAgICAgICAgJiYgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuaW5kZXhPZihtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXSkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gbWFza0V4cHJlc3Npb25bbWFza0V4cHJlc3Npb24ubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBzaGlmdDogbnVtYmVyID0gMTtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvbiArIDE7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuX3NoaWZ0LmhhcyhuZXdQb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHNoaWZ0Kys7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbisrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2IodGhpcy5fc2hpZnQuaGFzKHBvc2l0aW9uKSA/IHNoaWZ0IDogMCk7XG4gICAgICAgIGxldCByZXM6IHN0cmluZyA9IGAke3RoaXMucHJlZml4fSR7cmVzdWx0fWA7XG4gICAgICAgIHJlcyA9IHRoaXMuc3VmaXggJiZcbiAgICAgICAgICAgICAgY3Vyc29yID09PSBtYXNrRXhwcmVzc2lvbi5sZW5ndGhcbiAgICAgICAgICAgID8gYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9JHt0aGlzLnN1Zml4fWBcbiAgICAgICAgICAgIDogYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9YDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcHVibGljIF9maW5kU3BlY2lhbENoYXIgKGlucHV0U3ltYm9sOiBzdHJpbmcpOiB1bmRlZmluZWQgfCBzdHJpbmcge1xuICAgICAgY29uc3Qgc3ltYm9sOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVyc1xuICAgICAgICAgIC5maW5kKCAodmFsOiBzdHJpbmcpID0+IHZhbCA9PT0gaW5wdXRTeW1ib2wpO1xuICAgICAgcmV0dXJuIHN5bWJvbCA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sOiBzdHJpbmcsIG1hc2tTeW1ib2w6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnMgPSB0aGlzLmN1c3RvbVBhdHRlcm5cbiAgICAgICAgPyB0aGlzLmN1c3RvbVBhdHRlcm5cbiAgICAgICAgOiB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucztcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tTeW1ib2xdXG4gICAgICAgICAgICAmJiB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXS5wYXR0ZXJuXG4gICAgICAgICAgICAmJiB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXS5wYXR0ZXJuLnRlc3QoaW5wdXRTeW1ib2wpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb25maWcsIElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXNrQXBwbGllclNlcnZpY2UgfSBmcm9tICcuL21hc2stYXBwbGllci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hc2tTZXJ2aWNlIGV4dGVuZHMgTWFza0FwcGxpZXJTZXJ2aWNlIHtcbiAgcHVibGljIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGlzTnVtYmVyVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dNYXNrVHlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG1hc2tJc1Nob3duOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfZm9ybUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHVibGljIG9uVG91Y2ggPSAoKSA9PiB7fTtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KGNvbmZpZykgcHJvdGVjdGVkIF9jb25maWc6IElDb25maWcsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKF9jb25maWcpO1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIGFwcGx5TWFzayhcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcsXG4gICAgbWFza0V4cHJlc3Npb246IHN0cmluZyxcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcbiAgICBjYjogRnVuY3Rpb24gPSAoKSA9PiB7fVxuICApOiBzdHJpbmcgIHtcblxuICAgIHRoaXMubWFza0lzU2hvd24gPSB0aGlzLnNob3dNYXNrVHlwZWRcbiAgICAgICAgPyB0aGlzLm1hc2tFeHByZXNzaW9uLnJlcGxhY2UoL1swLTldL2csICdfJylcbiAgICAgICAgOiAnJztcbiAgICBpZiAoIWlucHV0VmFsdWUgJiYgdGhpcy5zaG93TWFza1R5cGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmVmaXggKyB0aGlzLm1hc2tJc1Nob3duO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZyAgPSBzdXBlci5hcHBseU1hc2soXG4gICAgICBpbnB1dFZhbHVlLFxuICAgICAgbWFza0V4cHJlc3Npb24sXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGNiXG4gICAgKTtcbiAgICBBcnJheS5pc0FycmF5KHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKVxuICAgICAgICA/IHRoaXMub25DaGFuZ2UodGhpcy5fcmVtb3ZlTWFzayh0aGlzLl9yZW1vdmVTdWZpeCh0aGlzLl9yZW1vdmVQcmVmaXgocmVzdWx0KSksIHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKSlcbiAgICAgICAgOiB0aGlzLmRyb3BTcGVjaWFsQ2hhcmFjdGVycyA9PT0gdHJ1ZVxuICAgICAgICAgPyB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICAgIHRoaXMuaXNOdW1iZXJWYWx1ZVxuICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuX3JlbW92ZU1hc2sodGhpcy5fcmVtb3ZlU3VmaXgodGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdCkpLCB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycykpXG4gICAgICAgICAgICAgOiB0aGlzLl9yZW1vdmVNYXNrKHRoaXMuX3JlbW92ZVN1Zml4KHRoaXMuX3JlbW92ZVByZWZpeChyZXN1bHQpKSwgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMpXG4gICAgICAgICAgICApXG4gICAgICAgICA6IHRoaXMub25DaGFuZ2UodGhpcy5fcmVtb3ZlU3VmaXgodGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdCkpKTtcbiAgICAgICAgICBsZXQgaWZNYXNrSXNTaG93bjogc3RyaW5nID0gJyc7XG4gICAgICAgICAgaWYgKCF0aGlzLnNob3dNYXNrVHlwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc0xlbjogbnVtYmVyID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBwcmVmTm1hc2s6IHN0cmluZyA9IHRoaXMucHJlZml4ICsgdGhpcy5tYXNrSXNTaG93bjtcbiAgICAgICAgICBpZk1hc2tJc1Nob3duID0gcHJlZk5tYXNrLnNsaWNlKHJlc0xlbik7XG4gICAgcmV0dXJuIHJlc3VsdCArIGlmTWFza0lzU2hvd247XG4gIH1cblxuICBwdWJsaWMgYXBwbHlWYWx1ZUNoYW5nZXMoXG4gICAgcG9zaXRpb246IG51bWJlciA9IDAsXG4gICAgY2I6IEZ1bmN0aW9uID0gKCkgPT4ge31cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgbWFza2VkSW5wdXQ6IHN0cmluZyB8IG51bWJlciA9IHRoaXMuYXBwbHlNYXNrKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUsXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBjYlxuICAgICk7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUgPSBtYXNrZWRJbnB1dDtcbiAgICBpZiAodGhpcy5fZm9ybUVsZW1lbnQgPT09IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFySWZOb3RNYXRjaEZuKCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd01hc2tJbklucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dNYXNrVHlwZWQpIHtcbiAgICAgIHRoaXMubWFza0lzU2hvd24gPSB0aGlzLm1hc2tFeHByZXNzaW9uLnJlcGxhY2UoL1swLTldL2csICdfJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFySWZOb3RNYXRjaEZuKCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2xlYXJJZk5vdE1hdGNoID09PSB0cnVlICYmXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLmxlbmd0aCAhPT0gdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUubGVuZ3RoXG4gICAgKSB7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50UHJvcGVydHkgPSBbJ3ZhbHVlJywgJyddO1xuICAgICAgdGhpcy5hcHBseU1hc2sodGhpcy5fZm9ybUVsZW1lbnQudmFsdWUsIHRoaXMubWFza0V4cHJlc3Npb24pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXQgZm9ybUVsZW1lbnRQcm9wZXJ0eShbbmFtZSwgdmFsdWVdOiBbc3RyaW5nLCBzdHJpbmcgfCBib29sZWFuXSkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2Zvcm1FbGVtZW50LCBuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVNYXNrKFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgc3BlY2lhbENoYXJhY3RlcnNGb3JSZW1vdmU6IHN0cmluZ1tdXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICA/IHZhbHVlLnJlcGxhY2UodGhpcy5fcmVnRXhwRm9yUmVtb3ZlKHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlKSwgJycpXG4gICAgICA6IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlUHJlZml4KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5wcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICA/IHZhbHVlLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKVxuICAgICAgOiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZVN1Zml4KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5zdWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgICAgID8gdmFsdWUucmVwbGFjZSh0aGlzLnN1Zml4LCAnJylcbiAgICAgIDogdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9yZWdFeHBGb3JSZW1vdmUoc3BlY2lhbENoYXJhY3RlcnNGb3JSZW1vdmU6IHN0cmluZ1tdKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBgXFxcXCR7aXRlbX1gKS5qb2luKCd8JyksXG4gICAgICAnZ2knXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXNrU2VydmljZSB9IGZyb20gJy4vbWFzay5zZXJ2aWNlJztcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXNrXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWFza0RpcmVjdGl2ZSksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTWFza1NlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXNrRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF9tYXNrVmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaW5wdXRWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwcml2YXRlIF9zdGFydDogbnVtYmVyO1xuICBwcml2YXRlIF9lbmQ6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHVibGljIG9uVG91Y2ggPSAoKSA9PiB7IH07XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfbWFza1NlcnZpY2U6IE1hc2tTZXJ2aWNlXG4gICkgeyB9XG5cblxuICBASW5wdXQoJ21hc2snKVxuICBwdWJsaWMgc2V0IG1hc2tFeHByZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXNrVmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICBpZiAoIXRoaXMuX21hc2tWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrRXhwcmVzc2lvbiA9IHRoaXMuX3JlcGVhdFBhdHRlcm5TeW1ib2xzKHRoaXMuX21hc2tWYWx1ZSk7XG4gICAgdGhpcy5fbWFza1NlcnZpY2UuZm9ybUVsZW1lbnRQcm9wZXJ0eSA9IFtcbiAgICAgICd2YWx1ZScsXG4gICAgICB0aGlzLl9tYXNrU2VydmljZS5hcHBseU1hc2soXG4gICAgICAgIHRoaXMuX2lucHV0VmFsdWUsXG4gICAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tFeHByZXNzaW9uXG4gICAgICApXG4gICAgXTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3BlY2lhbENoYXJhY3RlcnModmFsdWU6IElDb25maWdbJ3NwZWNpYWxDaGFyYWN0ZXJzJ10pIHtcbiAgICBpZiAoXG4gICAgICAhdmFsdWUgfHxcbiAgICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS5sZW5ndGgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tTcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwYXR0ZXJucyh2YWx1ZTogSUNvbmZpZ1sncGF0dGVybnMnXSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFza1NlcnZpY2UubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogSUNvbmZpZ1sncHJlZml4J10pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeCA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzdWZpeCh2YWx1ZTogSUNvbmZpZ1snc3VmaXgnXSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFza1NlcnZpY2Uuc3VmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBJQ29uZmlnWydkcm9wU3BlY2lhbENoYXJhY3RlcnMnXSkge1xuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmRyb3BTcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93TWFza1R5cGVkKHZhbHVlOiBJQ29uZmlnWydzaG93TWFza1R5cGVkJ10pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLnNob3dNYXNrVHlwZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd1RlbXBsYXRlKHZhbHVlOiBJQ29uZmlnWydzaG93VGVtcGxhdGUnXSkge1xuICAgIHRoaXMuX21hc2tTZXJ2aWNlLnNob3dUZW1wbGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbGVhcklmTm90TWF0Y2godmFsdWU6IElDb25maWdbJ2NsZWFySWZOb3RNYXRjaCddKSB7XG4gICAgdGhpcy5fbWFza1NlcnZpY2UuY2xlYXJJZk5vdE1hdGNoID0gdmFsdWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IGVsLnZhbHVlO1xuICAgIGlmICghdGhpcy5fbWFza1ZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGVsLnZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IChlbC5zZWxlY3Rpb25TdGFydCBhcyBudW1iZXIpID09PSAxXG4gICAgICA/IChlbC5zZWxlY3Rpb25TdGFydCBhcyBudW1iZXIpICsgdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aFxuICAgICAgOiBlbC5zZWxlY3Rpb25TdGFydCBhcyBudW1iZXI7XG4gICAgbGV0IGNhcmV0U2hpZnQ6IG51bWJlciA9IDA7XG4gICAgdGhpcy5fbWFza1NlcnZpY2UuYXBwbHlWYWx1ZUNoYW5nZXMoXG4gICAgICBwb3NpdGlvbixcbiAgICAgIChzaGlmdDogbnVtYmVyKSA9PiAoY2FyZXRTaGlmdCA9IHNoaWZ0KVxuICAgICk7XG4gICAgLy8gb25seSBzZXQgdGhlIHNlbGVjdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhY3RpdmVcbiAgICBpZiAodGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvbkVuZCA9XG4gICAgICB0aGlzLl9wb3NpdGlvbiAhPT0gbnVsbFxuICAgICAgICA/IHRoaXMuX3Bvc2l0aW9uXG4gICAgICAgIDogcG9zaXRpb24gK1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgKChlIGFzIGFueSkuaW5wdXRUeXBlID09PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJyA/IDAgOiBjYXJldFNoaWZ0KTtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IG51bGw7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgcHVibGljIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLl9tYXNrU2VydmljZS5jbGVhcklmTm90TWF0Y2hGbigpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Gb2N1cyhlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsOiBIVE1MSW5wdXRFbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoXG4gICAgICBlbCAhPT0gbnVsbCAmJiBlbC5zZWxlY3Rpb25TdGFydCAhPT0gbnVsbCAmJlxuICAgICAgZWwuc2VsZWN0aW9uU3RhcnQgPT09IGVsLnNlbGVjdGlvbkVuZCAmJlxuICAgICAgZWwuc2VsZWN0aW9uU3RhcnQgPiB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoICYmXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIChlIGFzIGFueSkua2V5Q29kZSAhPT0gMzhcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hc2tTZXJ2aWNlLnNob3dNYXNrVHlwZWQpIHtcbiAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tJc1Nob3duID0gdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb24ucmVwbGFjZSgvWzAtOV0vZywgJ18nKTtcbiAgICB9XG4gICAgZWwudmFsdWUgPSAhZWwudmFsdWUgfHwgZWwudmFsdWUgPT09IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeFxuICAgICAgPyB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXggKyB0aGlzLl9tYXNrU2VydmljZS5tYXNrSXNTaG93blxuICAgICAgOiBlbC52YWx1ZTtcbiAgICAvKiogZml4IG9mIGN1cnNvciBwb3NpdGlvbiB3aXRoIHByZWZpeCB3aGVuIG1vdXNlIGNsaWNrIG9jY3VyICovXG4gICAgaWYgKCgoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKSB8fCAoZWwuc2VsZWN0aW9uRW5kIGFzIG51bWJlcikpIDw9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeC5sZW5ndGgpIHtcbiAgICAgIGVsLnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGEoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsOiBIVE1MSW5wdXRFbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgIGlmICgoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKSA8PSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoXG4gICAgICAgICYmIChlbC5zZWxlY3Rpb25FbmQgYXMgbnVtYmVyKSA8PSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25Gb2N1cyhlKTtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDhcbiAgICAgICAgJiYgZWwuc2VsZWN0aW9uU3RhcnQgPT09IDBcbiAgICAgICAgJiYgZWwuc2VsZWN0aW9uRW5kID09PSBlbC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZWwudmFsdWUgPSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXg7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4ID8gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aCA6IDE7XG4gICAgICAgIHRoaXMub25JbnB1dChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScpXG4gIHB1YmxpYyBvblBhc3RlKCk6IHZvaWQge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gIH1cblxuICAvKiogSXQgd3JpdGVzIHRoZSB2YWx1ZSBpbiB0aGUgaW5wdXQgKi9cbiAgcHVibGljIGFzeW5jIHdyaXRlVmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGlucHV0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0VmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBpbnB1dFZhbHVlID0gU3RyaW5nKGlucHV0VmFsdWUpO1xuICAgICAgdGhpcy5fbWFza1NlcnZpY2UuaXNOdW1iZXJWYWx1ZSA9IHRydWU7XG4gICAgfVxuICAgIGlucHV0VmFsdWUgJiYgdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb24gfHxcbiAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tFeHByZXNzaW9uICYmICh0aGlzLl9tYXNrU2VydmljZS5wcmVmaXggfHwgdGhpcy5fbWFza1NlcnZpY2Uuc2hvd01hc2tUeXBlZClcbiAgICAgID8gKHRoaXMuX21hc2tTZXJ2aWNlLmZvcm1FbGVtZW50UHJvcGVydHkgPSBbXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFzayhcbiAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tFeHByZXNzaW9uXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgICA6ICh0aGlzLl9tYXNrU2VydmljZS5mb3JtRWxlbWVudFByb3BlcnR5ID0gWyd2YWx1ZScsIGlucHV0VmFsdWVdKTtcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIHRoaXMuX21hc2tTZXJ2aWNlLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgLyoqIEl0IGRpc2FibGVzIHRoZSBpbnB1dCBlbGVtZW50ICovXG4gIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9tYXNrU2VydmljZS5mb3JtRWxlbWVudFByb3BlcnR5ID0gWydkaXNhYmxlZCcsIGlzRGlzYWJsZWRdO1xuICB9XG4gIHByaXZhdGUgX3JlcGVhdFBhdHRlcm5TeW1ib2xzKG1hc2tFeHA6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1hc2tFeHAubWF0Y2goL3tbMC05YS16QS1aXX0vKVxuICAgICAgJiYgbWFza0V4cC5zcGxpdCgnJylcbiAgICAgICAgLnJlZHVjZSgoYWNjdW06IHN0cmluZywgY3VycnZhbDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgICB0aGlzLl9zdGFydCA9IChjdXJydmFsID09PSAneycpID8gaW5kZXggOiB0aGlzLl9zdGFydDtcblxuICAgICAgICAgIGlmIChjdXJydmFsICE9PSAnfScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXNrU2VydmljZS5fZmluZFNwZWNpYWxDaGFyKGN1cnJ2YWwpID8gYWNjdW0gKyBjdXJydmFsIDogYWNjdW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2VuZCA9IGluZGV4O1xuICAgICAgICAgIGNvbnN0IHJlcGVhdE51bWJlcjogbnVtYmVyID0gTnVtYmVyKG1hc2tFeHBcbiAgICAgICAgICAgIC5zbGljZSh0aGlzLl9zdGFydCArIDEsIHRoaXMuX2VuZCkpO1xuICAgICAgICAgIGNvbnN0IHJlcGFjZVdpdGg6IHN0cmluZyA9IG5ldyBBcnJheShyZXBlYXROdW1iZXIgKyAxKVxuICAgICAgICAgICAgLmpvaW4obWFza0V4cFt0aGlzLl9zdGFydCAtIDFdKTtcbiAgICAgICAgICByZXR1cm4gYWNjdW0gKyByZXBhY2VXaXRoO1xuICAgICAgICB9LCAnJykgfHwgbWFza0V4cDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXNrQXBwbGllclNlcnZpY2UgfSBmcm9tICcuL21hc2stYXBwbGllci5zZXJ2aWNlJztcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ21hc2snLFxuICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hc2tTZXJ2aWNlOiBNYXNrQXBwbGllclNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZ3xudW1iZXIsIG1hc2s6IHN0cmluZyB8IFtzdHJpbmcsIElDb25maWdbJ3BhdHRlcm5zJ11dKTogc3RyaW5nIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWFzayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXNrU2VydmljZS5hcHBseU1hc2soYCR7dmFsdWV9YCwgbWFzayk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tYXNrU2VydmljZS5hcHBseU1hc2tXaXRoUGF0dGVybihgJHt2YWx1ZX1gLCBtYXNrKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29uZmlnLCBJTklUSUFMX0NPTkZJRywgaW5pdGlhbENvbmZpZywgTkVXX0NPTkZJRywgb3B0aW9uc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbWFzay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFza1BpcGUgfSBmcm9tICcuL21hc2sucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW01hc2tBcHBsaWVyU2VydmljZV0sXG4gIGV4cG9ydHM6IFtNYXNrRGlyZWN0aXZlLCBNYXNrUGlwZV0sXG4gIGRlY2xhcmF0aW9uczogW01hc2tEaXJlY3RpdmUsIE1hc2tQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXNrTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnVmFsdWU/OiBvcHRpb25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hNYXNrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBORVdfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSU5JVElBTF9DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IGluaXRpYWxDb25maWdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IGNvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBfY29uZmlnRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbSU5JVElBTF9DT05GSUcsIE5FV19DT05GSUddXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKGNvbmZpZ1ZhbHVlPzogb3B0aW9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4TWFza01vZHVsZSxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY29uZmlnRmFjdG9yeVxuKGluaXRDb25maWc6IG9wdGlvbnNDb25maWcsIGNvbmZpZ1ZhbHVlOiBvcHRpb25zQ29uZmlnIHwgKCgpID0+IG9wdGlvbnNDb25maWcpKTogRnVuY3Rpb24gfCBvcHRpb25zQ29uZmlnIHtcbiAgcmV0dXJuICh0eXBlb2YgY29uZmlnVmFsdWUgPT09ICdmdW5jdGlvbicpID8gY29uZmlnVmFsdWUoKSA6IHsgLi4uaW5pdENvbmZpZywgLi4uY29uZmlnVmFsdWUgfTtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFtQkEsSUFBYSxNQUFNLEdBQTJCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUMzRSxJQUFhLFVBQVUsR0FBMkIsSUFBSSxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBQ25GLElBQWEsY0FBYyxHQUE0QixJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUU1RixJQUFh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

/***/ }),

/***/ "./src/app/person/create/create.module.ts":
/*!************************************************!*\
  !*** ./src/app/person/create/create.module.ts ***!
  \************************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create.page */ "./src/app/person/create/create.page.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_5__["CreatePage"]
    }
];
var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
    CreatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_page__WEBPACK_IMPORTED_MODULE_5__["CreatePage"]]
        })
    ], CreatePageModule);
    return CreatePageModule;
}());



/***/ }),

/***/ "./src/app/person/create/create.page.html":
/*!************************************************!*\
  !*** ./src/app/person/create/create.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Adicionar Pessoa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"personForm\">\n    <ion-item>\n      <ion-label position=\"floating\">Nome</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">CPF</ion-label>\n      <ion-input type=\"text\" formControlName=\"cpf\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">RG</ion-label>\n      <ion-input type=\"text\" formControlName=\"rg\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Aniversário</ion-label>\n      <ion-datetime cancel-text=\"Fechar\" done-text=\"Escolher\" display-format=\"DD/MM/YYYY\" picker-format=\"DD MM YYYY\"\n        formControlName=\"birthday\" required></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Perfil</ion-label>\n      <ion-select value=\"1\" okText=\"Escolher\" cancelText=\"Fechar\" formControlName=\"profile_id\" required>\n        <ion-select-option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{profile.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button shape=\"round\" color=\"primary\" expand=\"block\" [disabled]=\"!personForm.valid\" (click)=\"save()\">Salvar</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/person/create/create.page.scss":
/*!************************************************!*\
  !*** ./src/app/person/create/create.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/person/create/create.page.ts":
/*!**********************************************!*\
  !*** ./src/app/person/create/create.page.ts ***!
  \**********************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/person.service */ "./src/app/person/shared/person.service.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/person/shared/profile.service.ts");
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







var CreatePage = /** @class */ (function () {
    function CreatePage(personService, profileService, loadingController, route, router, formBuilder, toastController) {
        this.personService = personService;
        this.profileService = profileService;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.personForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'cpf': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'rg': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'birthday': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'profile_id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    CreatePage.prototype.ngOnInit = function () {
        this.getProfiles();
    };
    CreatePage.prototype.getProfiles = function () {
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
    CreatePage.prototype.presentToast = function (message) {
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
    CreatePage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.personForm.value);
                        return [4 /*yield*/, this.personService.post(this.personForm.value)
                                .subscribe(function (res) {
                                var id = res['id'];
                                _this.router.navigate(['/detail-person/' + id]);
                            }, function (err) {
                                console.log(err);
                                _this.presentToast('Erro ao salvar. Tente novamente!');
                            }, function () {
                                _this.presentToast('Pessoa cadastrada com sucesso!');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.page.html */ "./src/app/person/create/create.page.html"),
            styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/person/create/create.page.scss")],
        }),
        __metadata("design:paramtypes", [_shared_person_service__WEBPACK_IMPORTED_MODULE_4__["PersonService"],
            _shared_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], CreatePage);
    return CreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=person-create-create-module.js.map