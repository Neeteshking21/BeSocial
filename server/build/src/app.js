"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_server_1 = __importDefault(require("./node.server"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const authentication_1 = __importDefault(require("../Middleware/authentication"));
const logger_1 = __importDefault(require("../configs/logger"));
const web_1 = __importDefault(require("../routes/web"));
const api_1 = __importDefault(require("../routes/api"));
/**
 * -----------------------------------------------------------------------------
 * @expressRouter      Initiate Express Router.
 * @dotenv             Get Configuration From .env
 * @Middelwares        Initiate Middlewares.
 * @BodyParser         To Parse Body From Request.
 * @CORS               Initiate Cross-Origin-Resource-Sharing Policy.
 * @Authenticate       Apply Authenticate Middelware
 * @loggerMiddleWare   Apply Logging Middelware
 * @API                Apply API Routes
 * @WebRoutes          Apply Web Routes
 * @NodeServer         Initiate Node Server.
 * @PostGressServer    Initiate Postgress Server.
 *
 * @todo -  Can Extend More Middelwares Or Server.
 * ----------------------------------------------------------------------------
 */
/**
 * @variable    Express Routers To Initialize Routes For API And Web Applications.
 */
const router = express_1.default.Router();
dotenv_1.default.config();
const PORT = process.env.SERVER_PORT;
const ENV = process.env.ENV;
// const app:Application = express(); 
const SocialServer = new node_server_1.default({ "port": PORT, "title": "NodeJs" });
let app = SocialServer.initiateConnection();
console.log(SocialServer.getConnectionInfos());
/* Parse Body */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/* Use Cors */
let corsOptions = {
    origin: ["*"],
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
exports.default = app;
