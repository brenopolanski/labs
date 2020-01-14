import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Businesses extends Resource {
    all<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    get<T = any>(id: string): Promise<IResponse<T>>;
    bridgechains<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>>;
    search<T = any>(payload?: Record<string, any>): Promise<IResponse<T>>;
}
