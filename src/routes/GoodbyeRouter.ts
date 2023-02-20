import express, { Request, Response } from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { LogInfo } from "../utils/logger";
import moment from "moment";

// Router from Express
let goodbyeRouter = express.Router();

// http://localhost:8000/api/hello?name=Pancho/
goodbyeRouter.route('/')
    .get(async (req: Request, res: Response) => {
        
        // Obtain name from Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`);

        let date: string = moment().format('YYYY-MM-DD HH:mm:ss');

        // Controller Instance to execute method
        const controller: GoodbyeController = new GoodbyeController();
        
        // Obtein response
        const response = await controller.getMessage(name);

        const json: any = {
            response
        }

        // Send to the client the response
        return res.json(json);
    })

export default goodbyeRouter;