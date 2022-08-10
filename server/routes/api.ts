import {Router, Request, Response, NextFunction} from 'express';

const router: Router = Router()

/*  */
router.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.send("In Api's Routes");
})

/*  */
router.get('/login', (request: Request, response: Response, next: NextFunction) => {
    response.send("Login Using Api");
})

export default router;