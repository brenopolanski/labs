"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Peers extends resource_1.Resource {
    async all(query) {
        return this.sendGet("peers", query);
    }
    async get(ip) {
        return this.sendGet(`peers/${ip}`);
    }
}
exports.Peers = Peers;
//# sourceMappingURL=peers.js.map