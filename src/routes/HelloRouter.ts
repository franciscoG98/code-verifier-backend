import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from Express
let helloRouter = express.Router();

// http://localhost:8000/api/hello?name=Pancho/
helloRouter.route('/')
    .get(async (req: Request, res: Response) => {
        
        // Obtain Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`);

        // Controller Instance to execute method
        const controller: HelloController = new HelloController();

        // Obtein response
        const response = await controller.getMessage(name);

        // Send to the client the response
        return res.send(response);
    })

export default helloRouter;