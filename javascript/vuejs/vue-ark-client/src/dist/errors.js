"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestError extends Error {
    constructor(error) {
        super(error.message);
        Object.defineProperty(this, "message", {
            enumerable: false,
            value: error.message,
        });
        Object.defineProperty(this, "name", {
            enumerable: false,
            value: this.constructor.name,
        });
        if (error.response) {
            Object.defineProperty(this, "response", {
                enumerable: false,
                value: {
                    body: JSON.parse(error.response.body),
                    headers: error.response.headers,
                    status: error.response.statusCode,
                },
            });
        }
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.RequestError = RequestError;
//# sourceMappingURL=errors.js.map