import { IResponse } from "./interfaces";
export declare class Connection {
    private readonly host;
    private opts;
    constructor(host: string);
    api<T = any>(name: string): T;
    withOptions(opts: Record<string, any>): this;
    get<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>>;
    post<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>>;
    private sendRequest;
}
