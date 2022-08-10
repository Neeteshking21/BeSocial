import {Router, Request, Response, NextFunction} from 'express';

const router: Router = Router()

/*  */
router.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.send("this Is Main Dashboard");
})

/*  */
router.post('/login', (request: Request, response: Response, next: NextFunction) => {
    response.send("this Is Login Page");
})

export default router;