"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Bridgechains extends resource_1.Resource {
    async all(query) {
        return this.sendGet("bridgechains", query);
    }
    async get(id) {
        return this.sendGet(`bridgechains/${id}`);
    }
    async search(payload) {
        return this.sendPost("bridgechains/search", payload);
    }
}
exports.Bridgechains = Bridgechains;
//# sourceMappingURL=bridgechains.js.map