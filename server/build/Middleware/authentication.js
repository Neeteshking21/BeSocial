"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Middleare For Authentication */
let Authenticate = (req, res, next) => {
    console.log(`You're Authenticated`);
    next();
};
exports.default = Authenticate;
