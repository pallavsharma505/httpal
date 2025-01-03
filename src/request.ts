import { IncomingMessage } from "http";

class Request {
    private message: IncomingMessage;
    constructor(message: IncomingMessage) {
        this.message = message;
    }
}

export default Request;