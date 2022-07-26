import { BasiscResponse, goodByeResponse } from '../types'

export interface IHelloController {
  getMessage(name?: string): Promise<BasiscResponse>
}

export interface IGoodbyeController {
  getMessage(name?: string, date?: Date): Promise<goodByeResponse>
}
