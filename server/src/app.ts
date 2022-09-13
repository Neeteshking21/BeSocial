import express, {Application, Express, Request, Response} from 'express'
import nodeServer from "./node.server"
import dotenv from 'dotenv';
import cors from 'cors';
import Authenticate from '../Middleware/authentication';
import loggerMiddleWare from '../configs/logger'
import webRoutes from '../routes/web'
import apiRoutes from '../routes/api'


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
const router = express.Router()
dotenv.config();

const PORT = process.env.SERVER_PORT;
const ENV = process.env.ENV;

// const app:Application = express(); 
const SocialServer: any = new nodeServer({"port": PORT, "title": "NodeJs"})
let app:any = SocialServer.initiateConnection()
console.log(SocialServer.getConnectionInfos())
/* Parse Body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* Use Cors */
let corsOptions = {
    origin: ["*"],
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

/* Authentication Middleware */
app.use(Authenticate)

/* Logger Middleware */
app.use(loggerMiddleWare);

/* Api Routes */
app.use("/api", apiRoutes);

/* Web Apis */
app.use(webRoutes);

export default app