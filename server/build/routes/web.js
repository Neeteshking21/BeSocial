"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/*  */
router.get('/', (request, response, next) => {
    response.send("this Is Main Dashboard");
});
/*  */
router.post('/login', (request, response, next) => {
    response.send("this Is Login Page");
});
exports.default = router;
