"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loggerMiddleWare(request, response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}
exports.default = loggerMiddleWare;
