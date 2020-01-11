"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
class ConnectionManager {
    constructor() {
        this.default = "main";
        this.connections = {};
    }
    connect(host, name = "main") {
        if (this.connections[name]) {
            throw new Error(`Connection [${name}] is already configured.`);
        }
        this.connections[name] = new connection_1.Connection(host);
        return this.connections[name];
    }
    disconnect(name) {
        name = name || this.getDefaultConnection();
        delete this.connections[name];
    }
    connection(name) {
        name = name || this.getDefaultConnection();
        if (!this.connections[name]) {
            throw new Error(`Connection [${name}] not configured.`);
        }
        return this.connections[name];
    }
    getDefaultConnection() {
        return this.default;
    }
    setDefaultConnection(name) {
        this.default = name;
    }
    getConnections() {
        return this.connections;
    }
}
exports.ConnectionManager = ConnectionManager;
//# sourceMappingURL=connection-manager.js.map