import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "..//utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {

    /**
     * Endpoint to retrieve a Message "Hello {name}" in JSON
     * @param { string | undefined } name name of user to be greeted
     * @returns { BasicResponse } Promise of BasicResponse
     */
    @Get('/')
    public async getMessage(@Query()name?: string | undefined): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');

        return {
            message: `Hello, ${name || "world!"}`
        }
    }
    
}
