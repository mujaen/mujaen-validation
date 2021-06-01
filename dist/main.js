"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation = /** @class */ (function () {
    function Validation(form) {
        this.form = document.querySelector(form);
        this.list = [];
        this.check = false;
        this.valid = true;
    }
    Validation.prototype.methods = function (element, options) {
        var _this = this;
        if (!options)
            this.valid = true;
        if (options) {
            Object.keys(options).forEach(function (key) {
                switch (key) {
                    case 'required':
                        _this.valid = !(element === null || element === void 0 ? void 0 : element.value.trim()) ? false : true;
                        break;
                    case 'email':
                        _this.valid = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test("" + (element === null || element === void 0 ? void 0 : element.value));
                        break;
                    case 'checked':
                        _this.valid = !(element === null || element === void 0 ? void 0 : element.checked) ? false : true;
                        break;
                    case 'min':
                        _this.valid = Number(element === null || element === void 0 ? void 0 : element.value.length) <= options[key] ? false : true;
                        break;
                    case 'max':
                        _this.valid = Number(element === null || element === void 0 ? void 0 : element.value.length) >= options[key] ? false : true;
                        break;
                    default:
                        _this.valid = true;
                }
            });
        }
        return this.valid;
    };
    Validation.prototype.isValid = function (result, message, focus, element) {
        switch (result) {
            case true:
                return true;
                break;
            default:
                if (message)
                    alert(message);
                if (focus)
                    element === null || element === void 0 ? void 0 : element.focus();
                return false;
        }
    };
    Validation.prototype.validate = function () {
        var _this = this;
        this.check = true;
        this.list.some(function (item) {
            var _a, _b;
            if (!_this.isValid((item.custom ? item.custom() : _this.methods((_a = _this.form) === null || _a === void 0 ? void 0 : _a.querySelector("" + item.field), item.options)), item.message, item.focus, (_b = _this.form) === null || _b === void 0 ? void 0 : _b.querySelector("" + item.field))) {
                _this.check = false;
                return true;
            }
        });
        return this.check == true ? true : false;
    };
    Validation.prototype.submit = function () {
        var _a;
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.submit();
    };
    Validation.prototype.add = function (items) {
        var _this = this;
        items.validate.forEach(function (item) {
            if (Object.keys(item).length)
                _this.list.push(item);
        });
    };
    return Validation;
}());
exports.default = Validation;
;
