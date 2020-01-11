"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
class Wallets extends resource_1.Resource {
    async all(query) {
        return this.sendGet("wallets", query);
    }
    async top(query) {
        return this.sendGet("wallets/top", query);
    }
    async get(id) {
        return this.sendGet(`wallets/${id}`);
    }
    async locks(id, query) {
        return this.sendGet(`wallets/${id}/locks`, query);
    }
    async transactions(id, query) {
        return this.sendGet(`wallets/${id}/transactions`, query);
    }
    async transactionsSent(id, query) {
        return this.sendGet(`wallets/${id}/transactions/sent`, query);
    }
    async transactionsReceived(id, query) {
        return this.sendGet(`wallets/${id}/transactions/received`, query);
    }
    async votes(id) {
        return this.sendGet(`wallets/${id}/votes`);
    }
    async search(payload) {
        return this.sendPost("wallets/search", payload);
    }
}
exports.Wallets = Wallets;
//# sourceMappingURL=wallets.js.map