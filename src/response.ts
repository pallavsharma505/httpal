import { OutgoingMessage } from "http";

class Response {
    private message: OutgoingMessage;
    constructor(message: OutgoingMessage) {
        this.message = message;
    }
}

export default Response;