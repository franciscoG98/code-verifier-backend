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
    // name is any here because a swagger error "GenerateMetadataError: @Query('name') 
    // Can't support 'union' type."
    public async getMessage(@Query() name?: any): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');

        return {
            message: `Hello, ${name || "world!"}`
        }
    }
    
}
