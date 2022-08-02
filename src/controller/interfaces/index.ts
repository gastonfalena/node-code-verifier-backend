import { BasicResponse, goodByeResponse } from '../types'

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>
}

export interface IGoodbyeController {
  getMessage(name?: string, date?: Date): Promise<goodByeResponse>
}
