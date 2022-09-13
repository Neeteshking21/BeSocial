"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const authentication_1 = __importDefault(require("../Middleware/authentication"));
const logger_1 = __importDefault(require("../configs/logger"));
const web_1 = __importDefault(require("../routes/web"));
const api_1 = __importDefault(require("../routes/api"));
/**
 * Class Handels The Server Instances.
 * @class {initiliServes}
 */
class initilizeServer {
    configuration;
    constructor(configuration) {
        this.configuration = configuration;
    }
}
const router = express_1.default.Router();
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT;
const ENV = process.env.ENV;
/* Parse Body */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/* Use Cors */
let corsOptions = {
    origin: ["http://127.0.0.1:3000"],
    optionsSuccessStatus: 200 // For legacy browser support
};
app.use((0, cors_1.default)(corsOptions));
/* Authentication Middleware */
app.use(authentication_1.default);
/* Logger Middleware */
app.use(logger_1.default);
/* Api Routes */
app.use("/api", api_1.default);
/* Web Apis */
app.use(web_1.default);
app.listen(port, () => {
    if (ENV == "dev")
        console.log(`You're In Development Server`);
    console.log(`Server Is Running On 127.0.0.1:${port}`);
});
