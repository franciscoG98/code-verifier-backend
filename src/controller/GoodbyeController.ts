import { BasicResponse, GoodbyeResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSuccess } from "..//utils/logger";
import moment from "moment";

export class GoodbyeController implements IGoodbyeController {
    public async getMessage(name?: string | undefined): Promise<GoodbyeResponse> {
        LogSuccess('[/api/goodbye] Get Request');

        return {
            message: `Goodbye, ${name || "world!"}`,
            date: moment().format('YYYY-MM-DD HH:mm:ss')
        }
    }
    
}