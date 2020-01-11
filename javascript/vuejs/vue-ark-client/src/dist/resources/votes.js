"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Votes extends resource_1.Resource {
    async all(query) {
        return this.sendGet("votes", query);
    }
    async get(id) {
        return this.sendGet(`votes/${id}`);
    }
}
exports.Votes = Votes;
//# sourceMappingURL=votes.js.map