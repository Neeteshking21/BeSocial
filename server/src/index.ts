import express, {Application, Express, Request, Response} from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import Authenticate from '../Middleware/authentication';
import loggerMiddleWare from '../configs/logger'
import webRoutes from '../routes/web'
import apiRoutes from '../routes/api'

const router = express.Router()
dotenv.config();

const app:Application = express(); 

const port = process.env.SERVER_PORT;
const ENV = process.env.ENV;

/* Parse Body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* Use Cors */
let corsOptions = {
    origin: ["http://127.0.0.1:3000"],
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

app.listen(port, ()=>{
    if(ENV == "dev")
        console.log(`You're In Development Server`);
    console.log(`Server Is Running On 127.0.0.1:${port}`)
})