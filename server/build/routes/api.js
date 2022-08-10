"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/*  */
router.get('/', (request, response, next) => {
    response.send("In Api's Routes");
});
/*  */
router.get('/login', (request, response, next) => {
    response.send("Login Using Api");
});
exports.default = router;
