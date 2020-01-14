import { Connection } from "../connection";
import { IResponse } from "../interfaces";
export declare class Resource {
    protected readonly connection: Connection;
    private opts;
    constructor(connection: Connection);
    withOptions(opts: Record<string, any>): this;
    resetOptions(): this;
    sendGet<T = any>(url: string, query?: Record<string, any>): Promise<IResponse<T>>;
    sendPost<T = any>(url: string, body?: Record<string, any>): Promise<IResponse<T>>;
}
