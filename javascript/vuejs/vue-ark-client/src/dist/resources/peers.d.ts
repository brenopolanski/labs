import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Peers extends Resource {
    all<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    get<T = any>(ip: string): Promise<IResponse<T>>;
}
