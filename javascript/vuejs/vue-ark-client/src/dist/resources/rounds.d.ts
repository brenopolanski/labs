import { IResponse } from "../interfaces";
import { Resource } from "./resource";
export declare class Rounds extends Resource {
    delegates<T = any>(id: number): Promise<IResponse<T>>;
}
