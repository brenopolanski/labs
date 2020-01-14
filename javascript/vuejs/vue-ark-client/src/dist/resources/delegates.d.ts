import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Delegates extends Resource {
    all<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    get<T = any>(id: string): Promise<IResponse<T>>;
    blocks<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>>;
    voters<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>>;
}
