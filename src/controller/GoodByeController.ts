import { BasiscResponse, goodByeResponse } from './types'
import { IGoodbyeController } from './interfaces'
import { LogSuccess } from '../utils/logger'

export class GoodByeController implements IGoodbyeController {
  public async getMessage(
    name?: string | undefined,
    date?: Date | undefined
  ): Promise<goodByeResponse> {
    LogSuccess('{[/api/Goodbye] Get Request}')
    return {
      message: `GoodBye ${name || 'world'}`,
      date: `${(date = new Date(Date.now()))}`,
    }
  }
}
