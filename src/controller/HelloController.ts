import { BasiscResponse } from './types'
import { IHelloController } from './interfaces'
import { LogSuccess } from '../utils/logger'

export class HelloController implements IHelloController {
  public async getMessage(name?: string | undefined): Promise<BasiscResponse> {
    LogSuccess('{[/api/hello] Get Request}')
    return {
      message: `Hello ${name || 'world'}`,
    }
  }
}
