import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Locks extends Resource {
    all<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    get<T = any>(id: string): Promise<IResponse<T>>;
    search<T = any>(payload?: Record<string, any>): Promise<IResponse<T>>;
    unlocked<T = any>(payload?: Record<string, any>): Promise<IResponse<T>>;
}
