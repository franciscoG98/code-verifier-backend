/**
 * Basic JSON response for Controllers
 */
export type BasicResponse = {
    message: string,
}

export type GoodbyeResponse = {
    message: string,
    date: string
}

/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message: string
}
