"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Blocks extends resource_1.Resource {
    async all(query) {
        return this.sendGet("blocks", query);
    }
    async get(id) {
        return this.sendGet(`blocks/${id}`);
    }
    async transactions(id, query) {
        return this.sendGet(`blocks/${id}/transactions`, query);
    }
    async search(payload) {
        return this.sendPost("blocks/search", payload);
    }
}
exports.Blocks = Blocks;
//# sourceMappingURL=blocks.js.map