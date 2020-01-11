import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Wallets extends Resource {
    all<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    top<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    get<T = any>(id: string): Promise<IResponse<T>>;
    locks<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>>;
    transactions<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>>;
    transactionsSent<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>>;
    transactionsReceived<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>>;
    votes<T = any>(id: string): Promise<IResponse<T>>;
    search<T = any>(payload: Record<string, any>): Promise<IResponse<T>>;
}
