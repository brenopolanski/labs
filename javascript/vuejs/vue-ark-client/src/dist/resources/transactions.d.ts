import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Transactions extends Resource {
    all<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    create<T = any>(payload: object[]): Promise<IResponse<T>>;
    get<T = any>(id: string): Promise<IResponse<T>>;
    allUnconfirmed<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    getUnconfirmed<T = any>(id: string): Promise<IResponse<T>>;
    search<T = any>(payload: Record<string, any>): Promise<IResponse<T>>;
    types<T = any>(): Promise<IResponse<T>>;
    fees<T = any>(): Promise<IResponse<T>>;
}
