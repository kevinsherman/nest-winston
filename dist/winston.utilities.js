"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilities = void 0;
const cli_color_1 = __importDefault(require("cli-color"));
const winston_1 = require("winston");
const fast_safe_stringify_1 = __importDefault(require("fast-safe-stringify"));
const nestLikeColorScheme = {
    info: cli_color_1.default.greenBright,
    error: cli_color_1.default.red,
    warn: cli_color_1.default.yellow,
    debug: cli_color_1.default.magentaBright,
    verbose: cli_color_1.default.cyanBright,
};
const nestLikeConsoleFormat = (appName = 'NestWinston') => winston_1.format.printf((_a) => {
    var { context, level, timestamp, message, ms } = _a, meta = __rest(_a, ["context", "level", "timestamp", "message", "ms"]);
    if ('undefined' !== typeof timestamp) {
        try {
            if (timestamp === (new Date(timestamp)).toISOString()) {
                timestamp = (new Date(timestamp)).toLocaleString();
            }
        }
        catch (error) {
        }
    }
    const color = nestLikeColorScheme[level] || ((text) => text);
    return `${color(`[${appName}]`)} ` +
        `${cli_color_1.default.yellow(level.charAt(0).toUpperCase() + level.slice(1))}\t` +
        ('undefined' !== typeof timestamp ? `${timestamp} ` : '') +
        ('undefined' !== typeof context ? `${cli_color_1.default.yellow('[' + context + ']')} ` : '') +
        `${color(message)} - ` +
        `${(0, fast_safe_stringify_1.default)(meta)}` +
        ('undefined' !== typeof ms ? ` ${cli_color_1.default.yellow(ms)}` : '');
});
exports.utilities = {
    format: {
        nestLike: nestLikeConsoleFormat,
    },
};
