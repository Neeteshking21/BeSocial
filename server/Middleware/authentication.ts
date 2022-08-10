import express, {Application, Express, NextFunction, Request, Response} from 'express'

/* Middleare For Authentication */
let Authenticate = (req: Request, res: Response, next: NextFunction): any => {
    console.log(`You're Authenticated`);
    next();
}

export default Authenticate;