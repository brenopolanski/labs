"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Businesses extends resource_1.Resource {
    async all(query) {
        return this.sendGet("businesses", query);
    }
    async get(id) {
        return this.sendGet(`businesses/${id}`);
    }
    async bridgechains(id, query) {
        return this.sendGet(`businesses/${id}/bridgechains`, query);
    }
    async search(payload) {
        return this.sendPost("businesses/search", payload);
    }
}
exports.Businesses = Businesses;
//# sourceMappingURL=businesses.js.map