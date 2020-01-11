import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Votes extends Resource {
    all<T = any>(query?: Record<string, any>): Promise<IResponse<T>>;
    get<T = any>(id: string): Promise<IResponse<T>>;
}
