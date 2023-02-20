/**
 * Root Router 
 * Redirection to Routers
 */

import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import goodbyeRouter from './GoodbyeRouter';
import { LogInfo } from '../utils/logger';

// Server instance 
let server = express();

// Router instace
let rootRouter = express.Router();

// Activate for requests to http://localhost:8000/api/

// GET: http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    res.send('Welcome to my api restful')
})

// Redirection to Routers & Controllers
server.use('/', rootRouter);        // http://localhost:8000/api/
server.use('/hello', helloRouter);  // http://localhost:8000/api/hello --> helloRouter
server.use('/goodbye', goodbyeRouter);  // http://localhost:8000/api/hello --> helloRouter


export default server;

