"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Locks extends resource_1.Resource {
    async all(query) {
        return this.sendGet("locks", query);
    }
    async get(id) {
        return this.sendGet(`locks/${id}`);
    }
    async search(payload) {
        return this.sendPost("locks/search", payload);
    }
    async unlocked(payload) {
        return this.sendPost("locks/unlocked", payload);
    }
}
exports.Locks = Locks;
//# sourceMappingURL=locks.js.map