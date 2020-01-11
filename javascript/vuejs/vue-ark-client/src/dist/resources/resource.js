"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Resource {
    constructor(connection) {
        this.connection = connection;
        this.opts = {};
    }
    withOptions(opts) {
        this.opts = opts;
        return this;
    }
    resetOptions() {
        this.opts = {};
        return this;
    }
    async sendGet(url, query) {
        const response = await this.connection.get(url, { ...this.opts, ...{ searchParams: query } });
        this.resetOptions();
        return response;
    }
    async sendPost(url, body) {
        const response = await this.connection.post(url, { ...this.opts, ...{ body } });
        this.resetOptions();
        return response;
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map