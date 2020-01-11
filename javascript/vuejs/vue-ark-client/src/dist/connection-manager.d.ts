import { Connection } from "./connection";
export declare class ConnectionManager {
    private default;
    private readonly connections;
    connect(host: string, name?: string): Connection;
    disconnect(name?: string): void;
    connection(name?: string): Connection;
    getDefaultConnection(): string;
    setDefaultConnection(name: string): void;
    getConnections(): Record<string, Connection>;
}
