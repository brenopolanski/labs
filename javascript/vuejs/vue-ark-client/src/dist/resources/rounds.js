"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Rounds extends resource_1.Resource {
    async delegates(id) {
        return this.sendGet(`rounds/${id}/delegates`);
    }
}
exports.Rounds = Rounds;
//# sourceMappingURL=rounds.js.map