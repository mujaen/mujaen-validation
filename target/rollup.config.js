"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_typescript_1 = __importDefault(require("@rollup/plugin-typescript"));
var rollup_plugin_serve_1 = __importDefault(require("rollup-plugin-serve"));
exports.default = {
    input: 'src/js/app.ts',
    output: {
        file: 'src/js/app.js',
        format: 'cjs'
    },
    plugins: [
        plugin_typescript_1.default({ lib: ["es5", "es6", "dom"], target: "es5" }),
        rollup_plugin_serve_1.default({
            open: true,
            verbose: true,
            contentBase: ["", "src"],
            host: "localhost",
            port: 3000,
        })
    ]
};
//# sourceMappingURL=rollup.config.js.map