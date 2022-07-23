import { BasiscResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasiscResponse>
}