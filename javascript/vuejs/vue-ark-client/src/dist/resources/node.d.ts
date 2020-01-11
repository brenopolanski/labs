import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Node extends Resource {
    status<T = any>(): Promise<IResponse<T>>;
    syncing<T = any>(): Promise<IResponse<T>>;
    configuration<T = any>(): Promise<IResponse<T>>;
    crypto<T = any>(): Promise<IResponse<T>>;
    fees<T = any>(days: number): Promise<IResponse<T>>;
}
