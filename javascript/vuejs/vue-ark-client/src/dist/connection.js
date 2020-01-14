"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ky_universal_1 = __importDefault(require("ky-universal"));
const is_url_superb_1 = __importDefault(require("is-url-superb"));
const errors_1 = require("./errors");
const resources_1 = require("./resources");
class Connection {
    constructor(host) {
        this.host = host;
        if (!is_url_superb_1.default(host)) {
            throw new Error(`${host} is not a valid URL.`);
        }
    }
    api(name) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return new resources_1.Resources[name](this);
    }
    withOptions(opts) {
        this.opts = opts;
        return this;
    }
    async get(url, opts) {
        return this.sendRequest("get", url, opts);
    }
    async post(url, opts) {
        return this.sendRequest("post", url, opts);
    }
    async sendRequest(method, url, opts) {
        opts = { ...this.opts, ...(opts || {}) };
        if (opts.body && typeof opts !== "string") {
            opts.body = JSON.stringify(opts.body);
        }
        if (!opts.retry) {
            opts.retry = { retries: 0 };
        }
        if (!opts.timeout) {
            opts.timeout = 1500;
        }
        try {
            const response = await ky_universal_1.default[method](`${this.host}/${url}`, opts);
            return {
                body: response.json(),
                headers: response.headers,
                status: response.status,
            };
        }
        catch (error) {
            throw new errors_1.RequestError(error);
        }
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map