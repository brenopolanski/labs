"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Delegates extends resource_1.Resource {
    async all(query) {
        return this.sendGet("delegates", query);
    }
    async get(id) {
        return this.sendGet(`delegates/${id}`);
    }
    async blocks(id, query) {
        return this.sendGet(`delegates/${id}/blocks`, query);
    }
    async voters(id, query) {
        return this.sendGet(`delegates/${id}/voters`, query);
    }
}
exports.Delegates = Delegates;
//# sourceMappingURL=delegates.js.map