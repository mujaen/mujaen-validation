"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var app = function () {
    var button = document.getElementById('button');
    var zero = document.querySelector('[name=zero]');
    var form = new main_1.Validation('.form');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function (event) {
        event.preventDefault();
        if (form.validate()) {
            form.submit();
        }
    });
    (function () {
        form.add({
            validate: [
                {
                    field: '[name=id]',
                    options: {
                        checked: true
                    },
                    message: '아이디를 입력해 주세요',
                    focus: true
                },
                {
                    field: '[name=address]',
                    message: '주소를 입력해 주세요',
                    options: {
                        required: true
                    },
                    focus: true
                }
            ]
        });
    })();
};
document.addEventListener('DOMContentLoaded', function () { return app(); }, false);
//# sourceMappingURL=app.js.map